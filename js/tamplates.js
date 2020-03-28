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

    const about = ``;

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