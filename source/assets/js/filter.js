function addValue(obj, key, value) {
    if (obj.hasOwnProperty(key)) {
        obj[key].push(value);
    } else {
        obj[key] = [value];
    }
};

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
        
        addValue(options, "where", ["location", "==", val]);
        
        fetchListing('listing');
        
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
        
        addValue(options, "where", ["bedrooms", "==", val]);
        
        fetchListing('listing');
        
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
        
        addValue(options, "where", ["bathrooms", "==", val]);
        
        fetchListing('listing');
        
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
        
        addValue(options, "where", ["size", "==", val]);
        
        fetchListing('listing');
        
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
        
        addValue(options, "where", ["price", "==", val]);
        
        fetchListing('listing');
        
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
        
        addValue(options, "where", ["fee", "==", val]);
        
        fetchListing('listing');
        
        $("#fee-form-input").val("");
        
    })
    
});

function clearSelection(element) {
    $(element).next().find(".f-s-main").empty();
    $(element).hide();
}