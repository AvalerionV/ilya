async function showDashboard() {
    $(".listing").fadeOut("fast", function() {
        $(".dashboard").fadeIn();
    });
}

async function showListing() {
    $(".dashboard").fadeOut("fast", function() {
        $(".listing").fadeIn();
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

