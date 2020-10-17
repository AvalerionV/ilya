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
            $("#location-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>")
        }
        
        addValue(options, "where", ["location", "==", val]);
        
        fetchAllData();
        
        $("#location-form-input").prop('disabled', true);
        $("#location-form-input").val("");
        $("#clear-button").show();
        
    })
    
    $("#bedrooms-form").submit(function() {
        var val = $("#bedrooms-form-input").val();
        
        if(val !== '') {
            $("#bedrooms-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>")
        }
        
        addValue(options, "where", ["bedrooms", "==", val]);
        
        fetchAllData();
        
        $("#bedrooms-form-input").prop('disabled', true);
        $("#bedrooms-form-input").val("");
        $("#clear-button").show();
        
    })
    
    $("#bathrooms-form").submit(function() {
        var val = $("#bathrooms-form-input").val();
        
        if(val !== '') {
            $("#bathrooms-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>")
        }
        
        addValue(options, "where", ["bathrooms", "==", val]);
        
        fetchAllData();
        
        $("#bathrooms-form-input").prop('disabled', true);
        $("#bathrooms-form-input").val("");
        $("#clear-button").show();
        
    })
    
    $("#size-form").submit(function() {
        var val = $("#size-form-input").val();
        
        if(val !== '') {
            $("#size-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>")
        }
        
        addValue(options, "where", ["size", "==", val]);
        
        fetchAllData();
        
        $("#size-form-input").prop('disabled', true);
        $("#size-form-input").val("");
        $("#clear-button").show();
        
    })
    
    $("#price-form").submit(function() {
        var val = $("#price-form-input").val();
        
        if(val !== '') {
            $("#price-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>")
        }
        
        addValue(options, "where", ["price", "==", val]);
        
        fetchAllData();
        
        $("#price-form-input").prop('disabled', true);
        $("#price-form-input").val("");
        $("#clear-button").show();
        
    })
    
    $("#fee-form").submit(function() {
        var val = $("#fee-form-input").val();
        
        if(val !== '') {
            $("#fee-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>")
        }
        
        addValue(options, "where", ["fee", "==", val]);
        
        fetchAllData();
        
        $("#fee-form-input").prop('disabled', true);
        $("#fee-form-input").val("");
        $("#clear-button").show();
        
    })
    
});

function clearSelection(element) {
    $("#location-form-input").prop('disabled', false);
    $("#bedrooms-form-input").prop('disabled', false);
    $("#bathrooms-form-input").prop('disabled', false);
    $("#size-form-input").prop('disabled', false);
    $("#price-form-input").prop('disabled', false);
    $("#fee-form-input").prop('disabled', false);
    
    $(".f-s-main").each(function(index) {
        $(this).empty();
    });
    options = [];
    fetchAllData();
    $(element).hide();
}