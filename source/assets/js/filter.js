$( document ).ready(function() {
    $(".filter").on("click", function() {
        $(".filter").toggleClass("filter-active");
        $(".filters-container").toggle('fast');
    })
    
    $("#location-form").submit(function() {
        var val = $("#location-form-input").val();
        if(val !== '') {
            $("#location-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
    $("#top-form").submit(function() {
        var val = $("#top-form-input").val();
        if(val !== '') {
            $("#top-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
    $("#bedrooms-form").submit(function() {
        var val = $("#bedrooms-form-input").val();
        if(val !== '') {
            $("#bedrooms-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
    $("#bathrooms-form").submit(function() {
        var val = $("#bathrooms-form-input").val();
        if(val !== '') {
            $("#bathrooms-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
    $("#size-form").submit(function() {
        var val = $("#size-form-input").val();
        if(val !== '') {
            $("#size-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
    $("#status-form").submit(function() {
        var val = $("#status-form-input").val();
        if(val !== '') {
            $("#status-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
    $("#price-form").submit(function() {
        var val = $("#price-form-input").val();
        if(val !== '') {
            $("#price-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
    $("#agent-form").submit(function() {
        var val = $("#agent-form-input").val();
        if(val !== '') {
            $("#agent-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
    $("#fee-form").submit(function() {
        var val = $("#fee-form-input").val();
        if(val !== '') {
            $("#fee-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
    $("#confotur-form").submit(function() {
        var val = $("#confotur-form-input").val();
        if(val !== '') {
            $("#confotur-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
    $("#nor-form").submit(function() {
        var val = $("#nor-form-input").val();
        if(val !== '') {
            $("#nor-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
    $("#aic-form").submit(function() {
        var val = $("#aic-form-input").val();
        if(val !== '') {
            $("#aic-form-input ~ .f-s-main").append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
    })
    
});