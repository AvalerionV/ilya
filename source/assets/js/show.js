function afterLogin(avatar) {
    $(".login-b").fadeOut();
    
    $(".navbar").fadeIn(); 
    $(".topbar").fadeIn();
    $(".footer").fadeIn(); 
    $(".dashboard-b").fadeIn();
    
    if(avatar != null) {
        $("#u-avatar").attr("src",avatar);
    }
        
}

function aferLogout() {
    $(".navbar").fadeOut(); 
    $(".topbar").fadeOut();
    $(".footer").fadeOut(); 
    $(".dashboard-b").fadeOut();
    $(".listing-b").fadeOut();
    
    $("#u-avatar").attr("src","./assets/images/user.png");
    
    $(".login-b").fadeIn();
}