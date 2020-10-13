async function closeAll() {
    $(".dashboard-b").hide();
    $(".listing-b").hide();
    $(".agent-b").hide();
    $(".info-b").hide();
    $(".new-listing-b").hide();
    $(".new-agent-b").hide();
    $(".view-listing-b").hide();
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

async function showAgent() {
    closeAll().then(function() {
        $(".agent-b").fadeIn(); 
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

async function showNewAgent() {
    closeAll().then(function() {
        $(".new-agent-b").fadeIn();
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
    
     $(".agent-button").click(function() {
        fetchAgent('agent');
        showAgent();
    });
    
    $(".info-button").click(function() {
        showInfo();
    });
    
    $("#new-listing").click(function() {
        showNewList();
    })
    
    $("#new-agent").click(function() {
        showNewAgent();
    })
    
    $("#back-list").click(function() {
        fetchListing('listing');
        showListing();
    })
    
    $("#back-agent").click(function() {
        fetchAgent('agent');
        showAgent();
    })
    
})

