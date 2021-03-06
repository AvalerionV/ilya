let propertyName; let propertyLocation; let propertyBedrooms; let propertyBathrooms; let propertySize; let propertyPrice; let propertyFee; let propertyTOP; let propertyAIC; let propertyStatus; let propertyAgent; let propertyConfotur; let propertyNOR;

let agentName; let agentLocation; let agentStatus;

function checkListInputs() {
    propertyName = $("#nl-name-form-input").val();
    propertyLocation = $("#nl-location-form-input").val();
    propertyBedrooms = $("#nl-bedrooms-form-input").val();
    propertyBathrooms = $("#nl-bathrooms-form-input").val();
    propertySize = $("#nl-size-form-input").val();
    propertyPrice = $("#nl-price-form-input").val();
    propertyFee = $("#nl-fee-form-input").val();
    propertyTOP = $("#nl-type-form-select").val();
    propertyAIC = $("#nl-aic-form-select").val();
    propertyStatus = $("#nl-status-form-select").val();
    propertyAgent = $("#nl-agent-form-select").val();
    propertyConfotur = $("#nl-confotur-form-select").val();
    propertyNOR = $("#nl-nor-form-select").val();

    if(propertyName == "") {
        $("#nl-name-form-input").effect("shake");
        $("#nl-name-form-input").focus();
        return false;
    } else if(propertyLocation == "") {
        $("#nl-location-form-input").effect("shake");
        $("#nl-location-form-input").focus();
        return false;
    } else if(propertyBedrooms == "") {
        $("#nl-bedrooms-form-input").effect("shake");
        $("#nl-bedrooms-form-input").focus();
        return false;
    } else if(propertyBathrooms == "") {
        $("#nl-bathrooms-form-input").effect("shake");
        $("#nl-bathrooms-form-input").focus();
        return false;
    } else if(propertySize == "") {
        $("#nl-size-form-input").effect("shake");
        $("#nl-size-form-input").focus();
        return false;
    } else if(propertyPrice == "") {
        $("#nl-price-form-input").effect("shake");
        $("#nl-price-form-input").focus();
        return false;
    } else if(propertyTOP == "null") {
        $("#nl-type-form-select").effect("shake");
        $("#nl-type-form-select").focus();
        return false;
    } else if(propertyStatus == "null") {
        $("#nl-status-form-select").effect("shake");
        $("#nl-status-form-select").focus();
        return false;
    } else if(propertyAgent == "null") {
        $("#nl-agent-form-select").effect("shake");
        $("#nl-agent-form-select").focus();
        return false;
    } else if(propertyConfotur == "null") {
        $("#nl-confotur-form-select").effect("shake");
        $("#nl-confotur-form-select").focus();
        return false;
    } else if(propertyNOR == "null") {
        $("#nl-nor-form-select").effect("shake");
        $("#nl-nor-form-select").focus();
        return false;
    }
    
    return true;
}

function checkAgentInputs() {
    agentName = $("#na-name-form-input").val();
    agentLocation = $("#na-location-form-input").val();
    agentStatus = $("#na-status-form-select").val();
    
    if(agentName == "") {
        $("#na-name-form-input").effect("shake");
        $("#na-name-form-input").focus();
        return false;
    } else if(agentLocation == "") {
        $("#na-location-form-input").effect("shake");
        $("#na-location-form-input").focus();
        return false;
    } else if(agentStatus == "null") {
        $("#na-status-form-select").effect("shake");
        $("#na-status-form-select").focus();
        return false;
    }
    
    return true;
}

$( document ).ready(function() {
    
    $("#save-listing").on("click", function() {
        
        $(".content-loader").fadeIn("fast");
        
        if(checkListInputs() == false) {
            $(".content-loader").fadeOut("fast");
            return;
        }
        
        db.collection("listing").doc().set({ 
            name: propertyName,
            location : propertyLocation,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            top : propertyTOP,
            status : propertyStatus,
            agent : propertyAgent,
            bedrooms : Number(propertyBedrooms),
            bathrooms : Number(propertyBathrooms),
            size : Number(propertySize),
            price : Number(propertyPrice),
            fee : Number(propertyFee),
            aic : propertyAIC,
            confotur : propertyConfotur,
            nor : propertyNOR
        }).then(function() {
            listingDocuments = readDocuments("listing", listingOptions);
            fetchAllData();
            showListing();
            $(".content-loader").fadeOut("fast");
        });
        
        
        $("#nl-name-form-input").val("");
        $("#nl-location-form-input").val("");
        $("#nl-bedrooms-form-input").val("");
        $("#nl-bathrooms-form-input").val("");
        $("#nl-size-form-input").val("");
        $("#nl-price-form-input").val("");
        $("#nl-fee-form-input").val("");
    });
    
    $("#save-agent").on("click", function() {
        
        $(".content-loader").fadeIn("fast");
        
        if(checkAgentInputs() == false) {
            $(".content-loader").fadeOut("fast");
            return;
        }
        
        db.collection("agent").doc().set({ 
            name: agentName,
            location : agentLocation,
            status : agentStatus
        }).then(function() {
            agentDocuments = readDocuments("agent", agentOptions);
            fetchAllData();
            showAgent();
            $(".content-loader").fadeOut("fast");
        });
        
        $("#na-name-form-input").val("");
        $("#na-location-form-input").val("");
        
    });
    
});