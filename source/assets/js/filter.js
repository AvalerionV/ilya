$( document ).ready(function() {
    $(".filter").on("click", function() {
        $(".filter").toggleClass("filter-active");
        $(".filters-container").toggle('fast');
    })
    
    $("#location-form").submit(function() {
        var val = $("#location-form-input").val();
        
        if(val !== '') {
            $("#location-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
        
        if ($(this).find(".f-s-main").not(':empty')) {
            $(this).parent().parent().find("#clear-button").show();
        }
        
        $("#location-form-input").val("");
        
    })
    
    $("#bedrooms-form").submit(function() {
        var val = $("#bedrooms-form-input").val();
        
        if(val !== '') {
            $("#bedrooms-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
        
        if ($(this).find(".f-s-main").not(':empty')) {
            $(this).parent().parent().find("#clear-button").show();
        }
        
        $("#bedrooms-form-input").val("");
        
    })
    
    $("#bathrooms-form").submit(function() {
        var val = $("#bathrooms-form-input").val();
        
        if(val !== '') {
            $("#bathrooms-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
        
        if ($(this).find(".f-s-main").not(':empty')) {
            $(this).parent().parent().find("#clear-button").show();
        }
        
        $("#bathrooms-form-input").val("");
        
    })
    
    $("#size-form").submit(function() {
        var val = $("#size-form-input").val();
        
        if(val !== '') {
            $("#size-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
        
        if ($(this).find(".f-s-main").not(':empty')) {
            $(this).parent().parent().find("#clear-button").show();
        }
        
        $("#size-form-input").val("");
        
    })
    
    $("#price-form").submit(function() {
        var val = $("#price-form-input").val();
        
        if(val !== '') {
            $("#price-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
        
        if ($(this).find(".f-s-main").not(':empty')) {
            $(this).parent().parent().find("#clear-button").show();
        }
        
        $("#price-form-input").val("");
        
    })
    
    $("#fee-form").submit(function() {
        var val = $("#fee-form-input").val();
        
        if(val !== '') {
            $("#fee-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>" + val + "</span></div>")
        }
        
        if ($(this).find(".f-s-main").not(':empty')) {
            $(this).parent().parent().find("#clear-button").show();
        }
        
        $("#fee-form-input").val("");
        
    })
    
});

function clearSelection(element) {
    $(element).next().find(".f-s-main").empty();
    $(element).hide();
}