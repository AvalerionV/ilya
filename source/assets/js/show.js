function afterLogin(avatar) {
    $(".login-b").fadeOut("slow", function() {
        successLoginLoad();
        
        $(".navbar").fadeIn(); 
        $(".topbar").fadeIn();
        $(".footer").fadeIn(); 
        $(".dashboard-b").fadeIn();
    });
    
    
    if(avatar != null) {
        $("#u-avatar").attr("src",avatar);
    }
        
}

function aferLogout() {
    $(".login-b").fadeIn("slow", function() {
        $(".navbar").fadeOut(); 
        $(".topbar").fadeOut();
        $(".footer").fadeOut(); 
        $(".dashboard-b").fadeOut();
        $(".listing-b").fadeOut();
    });
    
    $("#u-avatar").attr("src","./assets/images/user.png");
    
}