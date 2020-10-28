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
        $(".filters-container").toggle('slow');
    });
    
     $('.listing-search-box').submit(function() {
        let val = $(".listing-search-box input").val();
        
        if(val !== '') {
            
            listingOptions = {where: [["name", "==", val]]};
            
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();
            
            $("#listing-clear").slideDown();
            
        } else {
            
            listingOptions = [];
            
            listingDocuments = readDocuments("listing", listingOptions);
            
            fetchAllData();
            
        }
    });
    
    $('.agent-search-box').submit(function() {
        let val = $(".agent-search-box input").val();
        
        if(val !== '') {
            
            agentOptions = {where: [["name", "==", val]]};
            
            agentDocuments = readDocuments("agent", agentOptions);
            
            fetchAllData();
            
            $("#agent-clear").slideDown();
            
        } else {
            
            agentOptions = [];
            
            agentDocuments = readDocuments("agent", agentOptions);
            
            fetchAllData();
            
        }
    });
    
    $("#location-form").submit(function() {
        let val = $("#location-form-input").val();
        
        if(val !== '') {
            
            $("#location-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>")
        
            addValue(listingOptions, "where", ["location", "==", val]);
        
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#location-form-input").prop('disabled', true);
            $("#location-form-input").val("");
            $("#listing-clear").slideDown();
            
        }
        
    });
    
    $("#bedrooms-form").submit(function() {
        let val = $("#bedrooms-form-input").val();
        
        if(val !== '') {
            
            $("#bedrooms-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>")
        
            addValue(listingOptions, "where", ["bedrooms", "==", Number(val)]);

            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#bedrooms-form-input").prop('disabled', true);
            $("#bedrooms-form-input").val("");
            $("#listing-clear").slideDown();
            
        }
        
    });
    
    $("#bathrooms-form").submit(function() {
        let val = $("#bathrooms-form-input").val();
        
        if(val !== '') {
            
            $("#bathrooms-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>")
        
            addValue(listingOptions, "where", ["bathrooms", "==", Number(val)]);

            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#bathrooms-form-input").prop('disabled', true);
            $("#bathrooms-form-input").val("");
            $("#listing-clear").slideDown();
            
        }
        
    });
    
    $("#size-form").submit(function() {
        let val = $("#size-form-input").val();
        
        if(val !== '') {
            
            $("#size-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>")
        
            addValue(listingOptions, "where", ["size", "==", Number(val)]);
        
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#size-form-input").prop('disabled', true);
            $("#size-form-input").val("");
            $("#listing-clear").slideDown();
            
        }
        
    });
    
    $("#price-form").submit(function() {
        let val = $("#price-form-input").val();
        
        if(val !== '') {
            
            $("#price-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>")
        
            addValue(listingOptions, "where", ["price", "==", Number(val)]);
        
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#price-form-input").prop('disabled', true);
            $("#price-form-input").val("");
            $("#listing-clear").slideDown();
            
        }
        
    });
    
    $("#fee-form").submit(function() {
        let val = $("#fee-form-input").val();
        
        if(val !== '') {
            
            $("#fee-form-input").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>");
            
            addValue(listingOptions, "where", ["fee", "==", Number(val)]);
        
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#fee-form-input").prop('disabled', true);
            $("#fee-form-input").val("");
            $("#listing-clear").slideDown();
            
        }
        
    });
    
    $('#top-form-select').change(function() {
        let val = $(this).find(':selected').val();
        
        if(val !== '') {
            
            $("#top-form-select").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>");
            
            addValue(listingOptions, "where", ["top", "==", val]);
        
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#top-form-select").prop('disabled', true);
            $("#listing-clear").slideDown();
            
        }
    });
    
    $('#filter-agent-form-select').change(function() {
        let val = $(this).find(':selected').val();
        let name = $(this).find(':selected').text();
        
        if(val !== '') {
            
            $("#filter-agent-form-select").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + name + "</span></div>");
            
            addValue(listingOptions, "where", ["agent", "==", val]);
        
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#filter-agent-form-select").prop('disabled', true);
            $("#listing-clear").slideDown();
            
        }
    });
    
    $('#status-form-select').change(function() {
        let val = $(this).find(':selected').val();
        
        if(val !== '') {
            
            $("#status-form-select").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>");
            
            addValue(listingOptions, "where", ["status", "==", val]);
        
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#status-form-select").prop('disabled', true);
            $("#listing-clear").slideDown();
            
        }
    });
    
    $('#confotur-form-select').change(function() {
        let val = $(this).find(':selected').val();
        
        if(val !== '') {
            
            $("#confotur-form-select").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>");
            
            addValue(listingOptions, "where", ["confotur", "==", val]);
        
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#confotur-form-select").prop('disabled', true);
            $("#listing-clear").slideDown();
            
        }
    });
    
    $('#nor-form-select').change(function() {
        let val = $(this).find(':selected').val();
        
        if(val !== '') {
            
            $("#nor-form-select").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + val + "</span></div>");
            
            addValue(listingOptions, "where", ["nor", "==", val]);
        
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#nor-form-select").prop('disabled', true);
            $("#listing-clear").slideDown();
            
        }
    });
    
    $('#filter-aic-form-select').change(function() {
        let val = $(this).find(':selected').val();
        let name = $(this).find(':selected').text();
        
        if(val !== '') {
            
            $("#filter-aic-form-select").parent().next().append("<div class=\"f-s-card l-tab l-active\"><span>Filter on: " + name + "</span></div>");
            
            addValue(listingOptions, "where", ["aic", "==", val]);
        
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();

            $("#filter-aic-form-select").prop('disabled', true);
            $("#listing-clear").slideDown();
            
        }
    });
    
});

function clearListingSelection(element) {
    $("#location-form-input").prop('disabled', false);
    $("#bedrooms-form-input").prop('disabled', false);
    $("#bathrooms-form-input").prop('disabled', false);
    $("#size-form-input").prop('disabled', false);
    $("#price-form-input").prop('disabled', false);
    $("#fee-form-input").prop('disabled', false);
    
    $("#top-form-select").prop('disabled', false);
    $('#top-form-select').val('null');
    
    $("#filter-agent-form-select").prop('disabled', false);
    $('#filter-agent-form-select').val('null');
    
    $("#status-form-select").prop('disabled', false);
    $('#status-form-select').val('null');
    
    $("#confotur-form-select").prop('disabled', false);
    $('#confotur-form-select').val('null');
    
    $("#nor-form-select").prop('disabled', false);
    $('#nor-form-select').val('null');
    
    $("#filter-aic-form-select").prop('disabled', false);
    $('#filter-aic-form-select').val('null');

    $(".listing-search-box input").val("");
    
    $(".f-s-main").each(function(index) {
        $(this).empty();
    });
    
    listingOptions = [];
    
    listingDocuments = readDocuments("listing", listingOptions);
    fetchAllData();
    
    $(element).slideUp();

}

function clearAgentSelection(element) {
    $(".agent-search-box input").val("");
    
    agentOptions = [];
    
    agentDocuments = readDocuments("agent", agentOptions);
    
    fetchAllData();
    
    $(element).slideUp();
}