var propertyName; var propertyLocation; var propertyBedrooms; var propertyBathrooms; var propertySize; var propertyPrice; var propertyFee; var propertyTOP; var propertyAIC; var propertyStatus; var propertyAgent; var propertyConfotur; var propertyNOR;

function checkInputs() {
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
    } else if(propertyLocation == "") {
        $("#nl-location-form-input").effect("shake");
        $("#nl-location-form-input").focus();
    } else if(propertyBedrooms == "") {
        $("#nl-bedrooms-form-input").effect("shake");
        $("#nl-bedrooms-form-input").focus();
    } else if(propertyBathrooms == "") {
        $("#nl-bathrooms-form-input").effect("shake");
        $("#nl-bathrooms-form-input").focus();
    } else if(propertySize == "") {
        $("#nl-size-form-input").effect("shake");
        $("#nl-size-form-input").focus();
    } else if(propertyPrice == "") {
        $("#nl-price-form-input").effect("shake");
        $("#nl-price-form-input").focus();
    } else if(propertyFee == "") {
        $("#nl-fee-form-input").effect("shake");
        $("#nl-fee-form-input").focus();
    } else if(propertyTOP == "") {
        $("#nl-type-form-select").effect("shake");
        $("#nl-type-form-select").focus();
    } else if(propertyAIC == "") {
        $("#nl-aic-form-select").effect("shake");
        $("#nl-aic-form-select").focus();
    } else if(propertyStatus == "") {
        $("#nl-status-form-select").effect("shake");
        $("#nl-status-form-select").focus();
    } else if(propertyAgent == "") {
        $("#nl-agent-form-select").effect("shake");
        $("#nl-agent-form-select").focus();
    } else if(propertyConfotur == "") {
        $("#nl-confotur-form-select").effect("shake");
        $("#nl-confotur-form-select").focus();
    } else if(propertyNOR == "") {
        $("#nl-nor-form-select").effect("shake");
        $("#nl-nor-form-select").focus();
    }
}

$( document ).ready(function() {
    
    $("#save-listing").on("click", function() {
        
        checkInputs();
        
    })
    
});