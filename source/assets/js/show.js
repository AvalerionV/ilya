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