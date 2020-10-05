async function closeAll() {
    $(".dashboard-b").hide();
    $(".listing-b").hide();
    $(".info-b").hide();
    $(".new-listing-b").hide();
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

async function showNewList() {
    closeAll().then(function() {
        $(".new-listing-b").fadeIn();
    });
}

$( document ).ready(function() {
    $(".home-button").click(function() {
        showDashboard();
    });
    
    $(".list-button").click(function() {
        fetchListing('listing');
        showListing();
    });
    
    $(".info-button").click(function() {
        showInfo();
    });
    
    $("#new-listing").click(function() {
        showNewList();
    })
    
    $(".back-btn").click(function() {
        showListing();
    })
    
})

