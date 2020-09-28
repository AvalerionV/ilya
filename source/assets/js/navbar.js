async function closeAll() {
    $(".dashboard-b").hide();
    $(".listing-b").hide();
    $(".info-b").hide();
}

async function showDashboard() {
    closeAll().then(function() {
        $(".dashboard-b").fadeIn();
    });
}

async function showListing() {
    closeAll().then(function() {
        $(".listing-b").fadeIn(); 
    });
}

async function showInfo() {
    closeAll().then(function() {
        $(".info-b").fadeIn();
    });
}

$( document ).ready(function() {
    $(".home-button").click(function() {
        showDashboard();
    });
    
    $(".list-button").click(function() {
        showListing();
    });
    
    $(".info-button").click(function() {
        showInfo();
    });
    
})

