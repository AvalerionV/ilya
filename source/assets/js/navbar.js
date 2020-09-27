async function showDashboard() {
    $(".listing-b").fadeOut("fast", function() {
        $(".dashboard-b").fadeIn();
    });
}

async function showListing() {
    $(".dashboard-b").fadeOut("fast", function() {
        $(".listing-b").fadeIn();
    });   
}

$( document ).ready(function() {
    $(".list-button").click(function() {
        showListing();
    })
    
    $(".home-button").click(function() {
        showDashboard();
    })
    
})

