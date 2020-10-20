function getSubDocument(docID) {
    let query = firebase.firestore().collection("listing").doc(docID).collection("details");

    return query
            .get()
            .then()
            .catch()
}

function openDocument(name,location,docID) {
    $(".content-loader").fadeIn("fast");
    
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
        
        $("#vl-name-form-input").val(name);
        $("#vl-location-form-input").val(location);

        subDoc.forEach((doc) => {

            $("#vl-bedrooms-form-input").val(doc.data().bedrooms);
            $("#vl-bathrooms-form-input").val(doc.data().bathrooms);
            $("#vl-size-form-input").val(doc.data().size);
            $("#vl-price-form-input").val(doc.data().price);
            $("#vl-fee-form-input").val(doc.data().fee);
            
            $(".content-loader").fadeOut("fast");

        });
        
    });

}