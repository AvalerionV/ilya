function afterLogin(avatar) {
    $(".login-b").hide();
    
    $(".navbar").show(); 
    $(".topbar").show();
    $(".footer").show(); 
    $(".dashboard-b").show();
    
    if(avatar != null) {
        $("#u-avatar").attr("src",avatar);
    }
        
}

function aferLogout() {
    $(".navbar").hide(); 
    $(".topbar").hide();
    $(".footer").hide(); 
    $(".dashboard-b").hide();
    
    if(avatar != null) {
        $("#u-avatar").attr("src","./assets/images/user.png");
    }
    
    $(".login-b").show();
}