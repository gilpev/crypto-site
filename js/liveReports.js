
//function that recieves an array of coins and creates a string seperrated with ",",
function createCoinsString(arrForChart){
    let symbolArr = [];
    arrForChart.forEach(coin => {
        symbolArr.push(coin.symbol.toUpperCase());
    });
    let symbolString = symbolArr.join(',');
    return symbolString;
}

//function that makes the call to cryptocompare.com to recieve the prices of toggled coins.
async function getCoinsPrices(string){
    await fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${string}&tsyms=USD`)
    .then((response) => response.json())
    .then((data) => {console.log(data)
        saveToSessionStorage('pricesForChart', data);
    })
    .catch((error) => alert(error));
}

//an interval for the updateChart function so i could stop it when leaving Live-Reports page.
var myinterval;

//the main function of Live-Reports page that initiates the chart with toggled coins.
//the chart is from canvas.js library.
function loadChart(){
    
    var arrForChart = getFromSessionStorage('toggledCoins').toggledArray;
    var coinsString = createCoinsString(arrForChart);
    getCoinsPrices(coinsString);
    var currentPrices = getFromSessionStorage('pricesForChart');

    var dataCoin1 = [];
    var dataCoin2 = [];
    var dataCoin3 = [];
    var dataCoin4 = [];
    var dataCoin5 = [];
    
    var chart = new CanvasJS.Chart("myChart", {
        zoomEnabled: true,
        theme: 'light1',
        title: {
            text: "Coins prices in Dollars"
        },
        axisX: {
            title: "chart updates every 2 secs"
        },
        axisY:{
            prefix: "$",
            includeZero: false
        }, 
        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer",
            verticalAlign: "top",
            fontSize: 18,
            fontColor: "dimGrey",
            itemclick : toggleDataSeries
        },
        data: [{
            type: 'line',
            xValueType: 'dateTime',
            yValueFormatString: '$####.000',
            xValueFormatString: 'hh:mm:ss TT',
            showInLegend: true,
            name: '',
            dataPoints: dataCoin1
        },
        {
            type: 'line',
            xValueType: 'dateTime',
            yValueFormatString: '$####.000',
            showInLegend: true,
            name: '',
            dataPoints: dataCoin2
        },
        {
            type: 'line',
            xValueType: 'dateTime',
            yValueFormatString: '$####.000',
            showInLegend: true,
            name: '',
            dataPoints: dataCoin3
        },
        {
            type: 'line',
            xValueType: 'dateTime',
            yValueFormatString: '$####.000',
            showInLegend: true,
            name: '',
            dataPoints: dataCoin4
        },
        {
            type: 'line',
            xValueType: 'dateTime',
            yValueFormatString: '$####.000',
            showInLegend: true,
            name: '',
            dataPoints: dataCoin5
        },]
    });

    arrForChart.forEach((coin , index) => {
        chart.options.data[index].name = `${coin.symbol.toUpperCase()}`;
     });
    
    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

    var updateInterval = 2000;
    var time = new Date();

    arrForChart.forEach((coin, index) => {
        getCoinsPrices(coinsString);
        currentPrices = getFromSessionStorage('pricesForChart');
        let symbol = coin.symbol.toUpperCase();
        if(currentPrices[`${symbol}`] != null){
            let datapoints = chart.options.data[index].dataPoints;
            datapoints.push({x: time.getTime() , y: currentPrices[`${symbol}`].USD});
        }
    });
    chart.render();       

    function updateChart() {
        time.setTime(time.getTime() + updateInterval);
        getCoinsPrices(coinsString);
        currentPrices = getFromSessionStorage('pricesForChart');
        arrForChart.forEach((coin, index) => {
            let symbol = coin.symbol.toUpperCase();
            if(currentPrices[`${symbol}`] != null){
                let datapoints = chart.options.data[index].dataPoints;
                datapoints.push({x: time.getTime() , y: currentPrices[`${symbol}`].USD});
                chart.options.data[index].legendText = chart.options.data[index].name + " = " + '$'+currentPrices[`${symbol}`].USD;
            }
        });    
        chart.render();       
    }
    updateChart();
    myinterval = setInterval(function(){updateChart()}, updateInterval);
}









