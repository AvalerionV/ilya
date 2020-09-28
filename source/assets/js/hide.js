function hideElements() {
    $(".error").hide();
};

function preLoginLoad() {
    $(".login-b").fadeOut("fast", function() {
        $(".loading").fadeIn();
    });
};

function postLoginLoad() {
    $(".login-b").fadeIn("fast", function() {
        $(".loading").fadeOut();
    });
}

function successLoginLoad() {
    $(".loading").fadeOut();
}