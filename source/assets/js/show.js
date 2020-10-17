function afterLogin(avatar) {
    $(".login-b").fadeOut("slow", function() {
        successLoginLoad();
        $(".navbar").fadeIn(); 
        $(".topbar").fadeIn();
        $(".footer").fadeIn(); 
        $("main").fadeIn();
        $(".dashboard-b").fadeIn();
    });
    
    
    if(avatar != null) {
        $("#u-avatar").attr("src",avatar);
    }
        
}

function aferLogout() {
    closeAll().then(function() {
        $(".login-b").fadeIn("fast", function() {
            $(".navbar").fadeOut(); 
            $(".topbar").fadeOut();
            $(".footer").fadeOut(); 
            $("main").fadeOut();
        });
    });
    
    $("#u-avatar").attr("src","./assets/images/user.png");
}