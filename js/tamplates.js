const homepage = 
    `<!-- nav bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <a class="navbar-brand"><h3 id="navbarHeading">Cryptonite</h3></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item" id="homePage">
            <a class="nav-link" href="#" onclick="homePage()">Home</a>
            </li>
            <li class="nav-item" id="liveReportsPage">
            <a class="nav-link" href="#" onclick="liveReportsPage()">Live Reports</a>
            </li>
            <li class="nav-item" id="aboutPage">
            <a class="nav-link" href="#" onclick="aboutPage()">About</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" id="searchForm" onsubmit="return false;" abineguid="2546239E40EC49368C5BB0B6946B6511">
            <input class="form-control mr-sm-2" id="searchInput" type="text" placeholder="Search">
            <button class="btn btn-success my-2 my-sm-0" type="submit" onclick="searchCoin()">Search</button>
        </form>
        </div>
    </nav><!-- end of navbar -->

    <!-- Modal -->
    <div class="modal fade" id="myModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLongTitle"><small class="text-primary">Please choose up to 5 coins:</small></h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
                <ul class="list-group" id="modalList">

                </ul>
            </div>
            <div class="container">
                <div class="row justify-content-center" id="modalError">
                    
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" onclick="closeModal()" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" onclick="modalSaveChanges()" class="btn btn-primary">Save changes</button>
            </div>
        </div>
        </div>
    </div><!-- end of modal -->

    <!-- div for errors -->
    <div class="container">
        <div class="row justify-content-center" id="errorDiv">

        </div>
    </div>

    <!-- div for all cards -->
    <div class="container-fluid px-4 py-4">
        <div class="row justify-content-center my-2" id="allCards">
        
        </div>
    </div>`;

    const livereports = `<!-- nav bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <a class="navbar-brand"><h3 id="navbarHeading">Cryptonite</h3></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item" id="homePage">
            <a class="nav-link" href="#" onclick="homePage()">Home</a>
            </li>
            <li class="nav-item" id="liveReportsPage">
            <a class="nav-link" href="#" onclick="liveReportsPage()">Live Reports</a>
            </li>
            <li class="nav-item" id="aboutPage">
            <a class="nav-link" href="#" onclick="aboutPage()">About</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" id="searchForm" onsubmit="return false;" abineguid="2546239E40EC49368C5BB0B6946B6511">
            <input class="form-control mr-sm-2" id="searchInput" type="text" placeholder="Search">
            <button class="btn btn-success my-2 my-sm-0" type="submit" onclick="searchCoin()">Search</button>
        </form>
        </div>
    </nav><!-- end of navbar -->

    <!-- div for chart -->
    <div class="container">
        <div class="row justify-content-center">
            <div class="col col-10 col-lg-12" id="myChart">

            </div>
        </div>
    </div>`;

    const about = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css"> 
        <link rel="stylesheet" href="css/bootstrap.min.css"> 
        <script src="https://kit.fontawesome.com/5293b8720c.js" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    
        <title>Crypto Site</title>
    </head>
    <body id="htmlBody">
        <div class="parallax" id="parallax">
            <!-- nav bar -->
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
                <a class="navbar-brand"><h3 id="navbarHeading">Cryptonite</h3></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" id="homePage">
                    <a class="nav-link" href="#" onclick="homePage()">Home</a>
                    </li>
                    <li class="nav-item" id="liveReportsPage">
                    <a class="nav-link" href="#" onclick="liveReportsPage()">Live Reports</a>
                    </li>
                    <li class="nav-item" id="aboutPage">
                    <a class="nav-link" href="#" onclick="aboutPage()">About</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0" id="searchForm" onsubmit="return false;" abineguid="2546239E40EC49368C5BB0B6946B6511">
                    <input class="form-control mr-sm-2" id="searchInput" type="text" placeholder="Search">
                    <button class="btn btn-success my-2 my-sm-0" type="submit" onclick="searchCoin()">Search</button>
                </form>
                </div>
            </nav><!-- end of navbar -->

            <!-- div for errors -->
            <div class="container">
                <div class="row justify-content-center" id="errorDiv">

                </div>
            </div>
    
            <div class="container  justify-content-center">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="card bg-light text-center my-4">
                            <div class="card-header">
                              <img src="./images/gillsProfile.jpeg" alt="Gills Profile pic" class="rounded-circle" style="width: 180px;">
                            </div>
                            <div class="card-body mx-5">
                              <p class="card-text">
                                <p>
                                <h5>
                                    This Cryptonite web site shows cryptocurrency information & real time 
                                    prices report based on CoinGecko & CryptoCompare APIs.
                                    Comparison of cryptocurrencies prices shown in real-time report of 
                                    cryptocurrencies and finding symbol of specific cryptocurrency gives
                                    user an easy way to find valuable information.   
                                </h5>
                                </p>
                                                        
                                <p>
                                  <h5>
                                    <p class="text-success"> More Info button:</p>                                
                                    Clicking on this button will open more information about the currency
                                    inside the card, showing the currency image
                                    and the currency price according to the currencies: USD, Euro, NIS.
                                  </h5>
                                </p>
                                <p>
                                  <h5>
                                    <p class="text-success"> Toggle button:</p>
                                    Clicking this button will add the current currency to the list of reports.
                                    Note - Up to 5 coins can be added to the list of reports. If you have selected 5
                                    coins and you want to add a currency, you must choose to remove one of the five 
                                    coins already selected, that is, display in the reports.
                                  </h5>
                                </p>
                                <p>
                                  <h5>
                                    <p class="text-success"> Real-time reports screen</p>
                                    This screen displays a graph depicting the status of the selected coins in the toggle
                                    button in real-time. Each currency selected and marked as ON in the button toggle
                                    belongs to the above graph and report.
                                  </h5>
                                </p>
                                <br>
                                <h7><p class="text-info">This site was designed in "Mobile first" design approach.</p></h7>
                                <h7><p class="text-info">Technologies: HTML5, CSS3, Bootstrap, JavaScript, jQuery, CanvasJS.</p></h7>
                                <h7><p class="text-info">Tools I used: VS Code, GitHub.</p></h7>
                              </p>
                            </div>
                            <div class="card-footer text-muted">
                                <h4><p class="text-success">Created by Grigori Pevzner - Full Stack Web Developer</p></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- end of parallax -->
    
    
    
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
    <script src="js/liveReports.js"></script>
    <script src="js/tamplates.js"></script>
    <!-- <script> homePage(); </script> -->
    </body>
    </html>`;

    const searchpage = `<!-- nav bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <a class="navbar-brand"><h3 id="navbarHeading">Cryptonite</h3></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item" id="homePage">
            <a class="nav-link" href="#" onclick="homePage()">Home</a>
            </li>
            <li class="nav-item" id="liveReportsPage">
            <a class="nav-link" href="#" onclick="liveReportsPage()">Live Reports</a>
            </li>
            <li class="nav-item" id="aboutPage">
            <a class="nav-link" href="#" onclick="aboutPage()">About</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" id="searchForm" onsubmit="return false;" abineguid="2546239E40EC49368C5BB0B6946B6511">
            <input class="form-control mr-sm-2" id="searchInput" type="text" placeholder="Search">
            <button class="btn btn-success my-2 my-sm-0" type="submit" onclick="searchCoin()">Search</button>
        </form>
        </div>
    </nav><!-- end of navbar -->
    
    <!-- div for errors -->
    <div class="container">
        <div class="row justify-content-center" id="errorDiv">

        </div>
    </div>

    <!-- div for all cards -->
    <div class="container-fluid px-4 py-4">
        <div class="row justify-content-center my-2" id="allCards">
        
        </div>
    </div>`;