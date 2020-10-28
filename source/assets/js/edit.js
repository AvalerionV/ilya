let editPropertyName; let editPropertyLocation; let editPropertyBedrooms; let editPropertyBathrooms; let editPropertySize; let editPropertyPrice; let editPropertyFee; let editPropertyTOP; let editPropertyAIC; let editPropertyStatus; let editPropertyAgent; let editPropertyConfotur; let editPropertyNOR;

function getSubDocument(docID) {
    let query = firebase.firestore().collection("listing").doc(docID);

    return query
            .get()
            .then()
            .catch()
}

function openDocument(docID) {
    $(".content-loader").fadeIn("fast");
    $("#delete-listing").attr('onClick', 'deleteDoc(\''+ docID +'\');')
    $("#edit-listing").attr('onClick', 'saveDoc(\''+ docID +'\');')
    
    closeAll().then(function() {
        $(".view-listing-b").fadeIn();
        $("#vl-name-form-input").val("");
        $("#vl-location-form-input").val("");
        $("#vl-bedrooms-form-input").val("");
        $("#vl-bathrooms-form-input").val("");
        $("#vl-size-form-input").val("");
        $("#vl-price-form-input").val("");
        $("#vl-fee-form-input").val("");
    });
    
    let subData = getSubDocument(docID);
        
    subData.then(function(subDoc) {
        
        $("#vl-name-form-input").val(subDoc.data().name);
        $("#vl-location-form-input").val(subDoc.data().location);
        $("#vl-bedrooms-form-input").val(subDoc.data().bedrooms);
        $("#vl-bathrooms-form-input").val(subDoc.data().bathrooms);
        $("#vl-size-form-input").val(subDoc.data().size);
        $("#vl-price-form-input").val(subDoc.data().price);
        $("#vl-fee-form-input").val(subDoc.data().fee);
        
        var top = subDoc.data().top;
        $('#vl-type-form-select option').each(function(){
            if($(this).attr('value')==top){
                $(this).attr('selected', 'selected');
            }
        });
        
        var aic = subDoc.data().aic;
        $('#vl-aic-form-select option').each(function(){
            if($(this).attr('value')==aic){
                $(this).attr('selected', 'selected');
            }
        });
        
        var status = subDoc.data().status;
        $('#vl-status-form-select option').each(function(){
            if($(this).attr('value')==status){
                $(this).attr('selected', 'selected');
            }
        });
        
        var agent = subDoc.data().agent;
        $('#vl-agent-form-select option').each(function(){
            if($(this).attr('value')==agent){
                $(this).attr('selected', 'selected');
            }
        });
        
        var confotur = subDoc.data().confotur;
        $('#vl-confotur-form-select option').each(function(){
            if($(this).attr('value')==confotur){
                $(this).attr('selected', 'selected');
            }
        });
        
        var nor = subDoc.data().nor;
        $('#vl-nor-form-select option').each(function(){
            if($(this).attr('value')==nor){
                $(this).attr('selected', 'selected');
            }
        });
        
        $(".content-loader").fadeOut("fast");

        
    });
}

function deleteDoc(docID) {
    $(".content-loader").fadeIn("fast");
    
    db.collection('listing').doc(docID).delete().then(function() {
        listingDocuments = readDocuments("listing", listingOptions);
        fetchAllData();
        showListing();
        $(".content-loader").fadeOut("fast");
    });
}

function checkEditListInputs() {
    editPropertyName = $("#vl-name-form-input").val();
    editPropertyLocation = $("#vl-location-form-input").val();
    editPropertyBedrooms = $("#vl-bedrooms-form-input").val();
    editPropertyBathrooms = $("#vl-bathrooms-form-input").val();
    editPropertySize = $("#vl-size-form-input").val();
    editPropertyPrice = $("#vl-price-form-input").val();
    editPropertyFee = $("#vl-fee-form-input").val();
    editPropertyTOP = $("#vl-type-form-select").val();
    editPropertyAIC = $("#vl-aic-form-select").val();
    editPropertyStatus = $("#vl-status-form-select").val();
    editPropertyAgent = $("#vl-agent-form-select").val();
    editPropertyConfotur = $("#vl-confotur-form-select").val();
    editPropertyNOR = $("#vl-nor-form-select").val();

    if(editPropertyName == "") {
        $("#vl-name-form-input").effect("shake");
        $("#vl-name-form-input").focus();
        return false;
    } else if(editPropertyLocation == "") {
        $("#vl-location-form-input").effect("shake");
        $("#vl-location-form-input").focus();
        return false;
    } else if(editPropertyBedrooms == "") {
        $("#vl-bedrooms-form-input").effect("shake");
        $("#vl-bedrooms-form-input").focus();
        return false;
    } else if(editPropertyBathrooms == "") {
        $("#vl-bathrooms-form-input").effect("shake");
        $("#vl-bathrooms-form-input").focus();
        return false;
    } else if(editPropertySize == "") {
        $("#vl-size-form-input").effect("shake");
        $("#vl-size-form-input").focus();
        return false;
    } else if(editPropertyPrice == "") {
        $("#vl-price-form-input").effect("shake");
        $("#vl-price-form-input").focus();
        return false;
    } else if(editPropertyTOP == "null") {
        $("#vl-type-form-select").effect("shake");
        $("#vl-type-form-select").focus();
        return false;
    } else if(editPropertyStatus == "null") {
        $("#vl-status-form-select").effect("shake");
        $("#vl-status-form-select").focus();
        return false;
    } else if(editPropertyAgent == "null") {
        $("#vl-agent-form-select").effect("shake");
        $("#vl-agent-form-select").focus();
        return false;
    } else if(editPropertyConfotur == "null") {
        $("#vl-confotur-form-select").effect("shake");
        $("#vl-confotur-form-select").focus();
        return false;
    } else if(editPropertyNOR == "null") {
        $("#vl-nor-form-select").effect("shake");
        $("#vl-nor-form-select").focus();
        return false;
    }
    
    return true;
}

function saveDoc(docID) {
    $(".content-loader").fadeIn("fast");
    
    if(checkEditListInputs() == false) {
        $(".content-loader").fadeOut("fast");
        return;
    }

    db.collection("listing").doc(docID).set({ 
        name: editPropertyName,
        location : editPropertyLocation,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        top : editPropertyTOP,
        status : editPropertyStatus,
        agent : editPropertyAgent,
        bedrooms : Number(editPropertyBedrooms),
        bathrooms : Number(editPropertyBathrooms),
        size : Number(editPropertySize),
        price : Number(editPropertyPrice),
        fee : Number(editPropertyFee),
        aic : editPropertyAIC,
        confotur : editPropertyConfotur,
        nor : editPropertyNOR
    }).then(function() {
        listingDocuments = readDocuments("listing", listingOptions);
        fetchAllData();
        showListing();
        $(".content-loader").fadeOut("fast");
    });
}