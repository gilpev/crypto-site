
/******     utility functions to communicate with api's     *******/

//function that calls coingecko api for coins list data
async function getCoinsList(){
    await fetch('https://api.coingecko.com/api/v3/coins/list')
    .then((response) => response.json())
    .then((data) => {console.log(data)
        saveToSessionStorage('coinsList', data);
    })
    .catch((error) => alert(error));
}

//function that calls coingecko api with certain coins ID to recieve the coins data
async function getSingleCoin(id){
    await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => response.json())
    .then((coin) => {
        console.log(coin);
        saveToSessionStorage(coin.id, {"coin": coin, "date": Date.now()});
    })
    .catch((error) => alert(error));
}

/********    utility functions for storage save/get    ********/

//function that saves items to sessionStorage
function saveToSessionStorage(key , value){
    let stringValue = JSON.stringify(value);
    if(sessionStorage.getItem(key) == null){
        sessionStorage.setItem(key, stringValue);
    }
    else {
        sessionStorage.removeItem(key);
        sessionStorage.setItem(key, stringValue);
    }
}

//function that gets items from sessionStorage
function getFromSessionStorage(key){
    if (sessionStorage.getItem(key) == null){
        // console.log('there is no such key in sessionStorage!');
        return null;
    }
    else {
        return JSON.parse(sessionStorage.getItem(key));
    }
}

/*****    utility functions that create page loaders/cards/buttons    ******/

//function that creates all cards of coins that it recieves in array and displays them
function createAllCards(arrToCreate){ 
    document.getElementById('allCards').innerHTML = '';
    if(arrToCreate != null){
        document.getElementById('allCards').innerHTML = homeLoader();
        let output = '';
        arrToCreate.forEach((coin) => {    
            output += createCard(coin);
        });
        document.getElementById('allCards').innerHTML = createUncheckAllShowChecked() + output + nextPreviousBtn();
        isToggledArrayChecked(arrToCreate);
    }
}

//function that creates the card of a coin
function createCard(coin){
    let output = '';
    output = `  <div class="col card bg-light col-12 col-lg-3 mx-1 my-1">
                    <div class="d-flex card-header justify-content-between">
                        <div>
                            <h4 class="card-title">${coin.symbol.toUpperCase()}</h4>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" onclick="toggleButton('customSwitch${coin.id}', '${coin.id}')" class="custom-control-input" id="customSwitch${coin.id}">
                            <label class="custom-control-label" for="customSwitch${coin.id}">
                        </div>
                    </div>
                        <div class="card-text mt-2 mx-2">${coin.name}</div>
                        <p>
                            <button id="btnOf${coin.id}" class="btn btn-sm btn-primary mt-2 mx-2" onclick="moreInfoBtn('${coin.id}')" type="button" data-toggle="collapse" data-target="#collapseInfo${coin.id}" aria-expanded="false" aria-controls="collapseInfo${coin.id}">
                            More info
                            </button>
                        </p>
                        <div class="collapse" id="collapseInfo${coin.id}">
                        </div>
                </div> `;
    return output;
}

//functio that creates the more info output that attached to the pressed "more info" button
function createMoreInfo(coin){
    let output = `<div class="py-2 mt-1 mx-2" style="border-top: solid 2px gray;">
    <h5>Current price:</h5>
    <div class="d-flex justify-content-between"> 
    <ul class="coinsPrices">
    <li>${coin.market_data.current_price.usd} <i class="fas fa-dollar-sign"></i></li>
    <li>${coin.market_data.current_price.eur} <i class="fas fa-euro-sign"></i></li>
    <li>${coin.market_data.current_price.ils} <i class="fas fa-shekel-sign"></i></li>
    </ul>
    <img class="coinsImage" src="${coin.image.small}">
    </div>
    </div>`;
    return output;
}

//function  that adds the loader while info is retrieved
function moreInfoLoader(){
    let output =  `<div class="d-flex justify-content-center">
                   <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                   </div>`;
    return output;  
}

//function  that adds the loader while a page is loaded
function homeLoader(){
    let output = `<div class="d-flex justify-content-center">
                  <div id="preloader">
                  <div id="loader"></div>
                  </div>
                  </div>`;
    return output;
}

//function that creates the UncheckAll/ShowChecked buttons
function createUncheckAllShowChecked(){
    let output = `  <div class="container">
                    <div class="row justify-content-center my-2">
                        <div class="btn-group" role="group">
                            <button id="uncheckBtn" type="button" class="btn btn-success" onclick="uncheckAll()">Uncheck All</button>
                            <button id="showCheckedBtn" "type="button" class="btn btn-success" onclick="showChecked()">Show Checked</button>
                        </div>
                    </div>
                    </div>`
    return output;
}

//function that creates the next/previous buttons
function nextPreviousBtn(){
    let output = `  <div class="container">
                    <div class="row justify-content-center my-2">
                        <div class="btn-group" role="group">
                            <button id="previousBtn" type="button" class="btn btn-success" onclick="previousCoinGroup()">Previous</button>
                            <button id="nextBtn" type="button" class="btn btn-success" onclick="nextCoinGroup()">Next</button>
                        </div>
                    </div>
                    </div>`
    return output;
}

//function that compares two dates for two minutes diffrence and returns true/false accordingly 
function checkTwoMin(dateOld){
    let dateNow = Date.now();
    if(dateNow - dateOld > 120000){
        return true;
    }
    else {
        return false;
    }
}

//function that creates the more info dropdown information...and displays loader while info is retrieved
//also checks for two minutes diference in coins info time and calls new info if needed
//checkTwoMin is the function that checks the dates for two minutes change
async function moreInfoBtn(id){
    let loadOutput = moreInfoLoader();
    document.getElementById("collapseInfo"+id).innerHTML = loadOutput;
    let collapsed = document.getElementById(`btnOf${id}`).getAttribute("aria-expanded");
    if(((getFromSessionStorage(id)) == null) || ((checkTwoMin(getFromSessionStorage(id).date)) == true) && ((collapsed == 'false'))){
        await getSingleCoin(id);
        let coin = getFromSessionStorage(id).coin;
        let output = createMoreInfo(coin);
        document.getElementById("collapseInfo"+id).innerHTML = output;
    }
    else {
        let coin = getFromSessionStorage(id).coin;
        let output = createMoreInfo(coin);
        document.getElementById("collapseInfo"+id).innerHTML = output;
    }
}

//function that returns only part of the full coin array, with start index and end index
function getPartialArrayOfCoins(start , end){
    saveToSessionStorage('start', start); //saves new start & end indexes
    saveToSessionStorage('end', end);
    return getFromSessionStorage('coinsList').slice(start , end);
}

//function of button nextCoinGroup that displays the next group of coins inOrder 
//by calling createAllCards function with new array of coins to create and display
function nextCoinGroup(){
    let start = getFromSessionStorage('start');
    let end = getFromSessionStorage('end');
    let numToJump = getFromSessionStorage('numToJump');
    let coinsListLength = getFromSessionStorage('coinsList').length;
    let arrToReturn = null;
        if((start >= coinsListLength - numToJump) && (end >= coinsListLength)){
            end = coinsListLength;
            start = coinsListLength - numToJump;
            arrToReturn = getPartialArrayOfCoins(start , coinsListLength);
        }
        else if((start == 0) && (end == numToJump)){
            start += numToJump;
            end += numToJump;
            arrToReturn = getPartialArrayOfCoins(start , end);
        }
        else {
            start += numToJump;
            end += numToJump;
            arrToReturn = getPartialArrayOfCoins(start , end);
        }
        createAllCards(arrToReturn); 
}

//function of button previousCoinGroup that displays the next group of coins inOrder 
//by calling createAllCards function with new array of coins to create and display
function previousCoinGroup(){
    let start = getFromSessionStorage('start');
    let end = getFromSessionStorage('end');
    let numToJump = getFromSessionStorage('numToJump');
    let arrToReturn = null;
        if((start <= 0 && end <= numToJump)){
            end = numToJump;
            start = 0;
            arrToReturn = getPartialArrayOfCoins(start , end);
        }
        else if((start == 0) && (end == numToJump)){

        }
        else {
            start -= numToJump;
            end -= numToJump;
            arrToReturn = getPartialArrayOfCoins(start , end);
        }
        createAllCards(arrToReturn);
}

//function that initiates the homePage. uses homeLoader for loader effect and creates the first 
//group of coins cards.
async function homePage(){
    clearInterval(myinterval);
    document.getElementById('parallax').innerHTML = homepage;
    document.getElementById("aboutPage").classList.remove("active");
    document.getElementById("liveReportsPage").classList.remove("active");
    document.getElementById("homePage").classList.add("active");
    document.getElementById('allCards').innerHTML = homeLoader();
    await getCoinsList();
    // number saved to local storage to use as the number
    // that the indexes jump to retrieve the next group of coins
    saveToSessionStorage('numToJump', 54);
    let arr = getPartialArrayOfCoins(0 , 54);
    createToggleArray();
    createAllCards(arr);
}

//function that initiates the about-page.
function aboutPage(){
    clearInterval(myinterval);
    document.getElementById('parallax').innerHTML = about;
    document.getElementById("homePage").classList.remove("active");
    document.getElementById("liveReportsPage").classList.remove("active");
    document.getElementById("aboutPage").classList.add("active");

}

//function that checks if there are toggled coins for the chart to display.
//if there are no coins then an error will display and we return to home-page
//else the chart is created and displayd with the coins that toggled.
//some of the coins dont exist in cryptocompare.com and will not be displayd even if toggled.
function liveReportsPage(){
    if(getFromSessionStorage('toggledCoins').toggledArray.length == 0){
        noChosenCoinsForChart();
        setTimeout(function(){document.getElementById('errorDiv').innerHTML = '';
        }, 5000);
    }
    else {
        document.getElementById('parallax').innerHTML = livereports;
        document.getElementById('myChart').innerHTML = homeLoader();
        document.getElementById("aboutPage").classList.remove("active");
        document.getElementById("homePage").classList.remove("active");
        document.getElementById("liveReportsPage").classList.add("active");
        saveToSessionStorage('pricesForChart', {});
        loadChart();
    }
}

//function that creates the error message when there are no coins for live-chart to display.
function noChosenCoinsForChart(){
    let output = `<div class="col alert alert-dismissible alert-danger col-12 col-lg-4">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Sorry there are no coins chosen for chart!
                            Please choose at least one coin for chart.</strong>
                  </div>`;
    document.getElementById('errorDiv').innerHTML = '';
    document.getElementById('errorDiv').innerHTML = output;
}

//function that searches the coin that the user searched for in serach input
function searchCoin(){
   clearInterval(myinterval);
   let searchWord = document.getElementById('searchInput').value;
   document.getElementById('parallax').innerHTML = searchpage;
   document.getElementById('errorDiv').innerHTML = '';
   let arrayToSearch = getFromSessionStorage('coinsList');
   let coins = arrayToSearch.filter(coin => coin.symbol == searchWord);
   document.getElementById('parallax').innerHTML = searchpage;
   clearInterval(myinterval);

   if (searchWord == "" || coins.length == 0){
       searchError();
       setTimeout(function(){document.getElementById('errorDiv').innerHTML = '';
       homePage();
       }, 3000);
       document.getElementById('searchInput').value = "";
   }
   else {
    document.getElementById("homePage").classList.remove("active");
    createAllCards(coins);
    isToggledArrayChecked(coins);
    document.getElementById('searchInput').value = "";
   }
}

//function that creates the error message when search was wrong.
function searchError(){
    let output = `<div class="col alert alert-dismissible alert-danger col-12 col-lg-4">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Sorry the coin that you searched wasn't found, please try again.</strong>
                  </div>`;
    document.getElementById('errorDiv').innerHTML = '';
    document.getElementById('errorDiv').innerHTML = output;
}

//function that checks the state of the toggle button true/false
function toggleButton(id, coinID){
    let toggledArray = getFromSessionStorage('toggledCoins').toggledArray;
    let toggledLength = getFromSessionStorage('toggledCoins').toggledLength;
    let coin = getFromSessionStorage('coinsList').find(coin => coin.id == coinID);

    if((toggledLength >= 5) && document.getElementById(id).checked){
        document.getElementById(id).checked = false;
        toggledArray.push(coin);
        showModal(toggledArray);
    }
    else if(document.getElementById(id).checked && (toggledLength < 5)) {
        toggledArray.push(coin);
        saveToSessionStorage('toggledCoins', {'toggledArray': toggledArray, 'toggledLength': toggledArray.length});
    }
    else if(!document.getElementById(id).checked){
       let newToggledArray = toggledArray.filter(coin => coin.id != coinID);
       saveToSessionStorage('toggledCoins', {'toggledArray': newToggledArray, 'toggledLength': newToggledArray.length});
    }
}

//function that creates array for toggled coins.
function createToggleArray(){
    if(getFromSessionStorage('toggledCoins') == null){
        saveToSessionStorage('toggledCoins', {'toggledArray': [], 'toggledLength': 0});
    }
}

//function that uses 'isToggleChecked' to go through array and check if toggle switch is on/off
function isToggledArrayChecked(arr){
    arr.forEach(coin => {
        isToggleChecked(coin.id);
    });
}

//function that check's if a coins toggle switch is on/off. if the switch is on then display it.
function isToggleChecked(id){
    let arrayToSearch = getFromSessionStorage('toggledCoins').toggledArray;
    let flag = arrayToSearch.find(coin => coin.id == id);
    if(flag == null){
        return false;
    }
    else {
        document.getElementById(`customSwitch${id}`).checked = true;
        return true;
    }
}

//function that shows all the toggled coins
function showChecked(){
    let toggledArray = getFromSessionStorage('toggledCoins').toggledArray;
    if(toggledArray[0] == null){
        showCheckedError();
        setTimeout(function(){document.getElementById('errorDiv').innerHTML = '';}, 3000);
    }
    else {
        createAllCards(toggledArray);
    }
}

//function that creates the error message when there are no checked coins.
function showCheckedError(){
    let output = `<div class="col alert alert-dismissible alert-danger col-12 col-lg-4">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Sorry there are no checked coins to display!</strong>
                  </div>`;
    document.getElementById('errorDiv').innerHTML = '';
    document.getElementById('errorDiv').innerHTML = output;
}

//function that uchecks all coins that were toggled
function uncheckAll(){
    let toggledArray = getFromSessionStorage('toggledCoins').toggledArray;
    toggledArray.forEach(coin => document.getElementById(`customSwitch${coin.id}`).checked = false);
    saveToSessionStorage('toggledCoins', {'toggledArray': [], 'toggledLength': 0});
    homePage();
}

//function that calls other functions to create and then shows the modal
function showModal(arr){
    createModal(arr);
    arr.forEach(coin => {
        document.getElementById(`modalSwitch${coin.id}`).checked = false;
    })
    saveToSessionStorage('arrayForModal', arr);
    $("#myModal").modal('show');
}

//function that creates the modal with the array of coins to display for user choice to toggle
function createModal(arr){
    let output = '';
    arr.forEach(coin => {
        output += `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <div><h4>${coin.symbol.toUpperCase()} - <small class="text-success">${coin.name}</small></h4></div>
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="modalSwitch${coin.id}">
                        <label class="custom-control-label" for="modalSwitch${coin.id}">
                    </div>
                   </li>`;
    });
    document.getElementById('modalList').innerHTML = output;
}

//function that saves the changes to toggled coins made in modal (choose 5 coins from list of the six you toggled)
function modalSaveChanges(){
    let arrayToReturn = [];
    let arrayOfCoins = getFromSessionStorage('arrayForModal');
    arrayOfCoins.forEach(coin => {
        if(document.getElementById(`modalSwitch${coin.id}`).checked == true){ 
            arrayToReturn.push(coin);
        }
        });
    if(arrayToReturn.length > 5){
        modalError();
        setTimeout(function(){document.getElementById('modalError').innerHTML = '';}, 3000);
    }
    else {
        saveToSessionStorage('toggledCoins', {'toggledArray': arrayToReturn, 'toggledLength': arrayToReturn.length}); 
        $("#myModal").modal('hide');
        createAllCards(getPartialArrayOfCoins(getFromSessionStorage('start'),getFromSessionStorage('end')));
    }
}

//function that creates the error message when there are to many checked coins in modal.
function modalError(){
    let output = `<div class="col alert alert-dismissible alert-danger col-12 mt-3">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Please choose up to 5 coins!!!</strong>
                  </div>`;
    document.getElementById('modalError').innerHTML = output;
}

//function that closes the modal
function closeModal(){
    $("#myModal").modal('hide');
}






