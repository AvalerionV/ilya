function getDocument(docID) {
    let query = firebase.firestore().collection("listing").doc(docID);

    return query
            .get()
            .then()
            .catch()
}

function openDocument(docID) {
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
    
    let docData = getDocument(docID);
    
    docData.then(function(doc) {
        
        $("#vl-name-form-input").val(doc.data().name);
        $("#vl-location-form-input").val(doc.data().location);
        $("#vl-bedrooms-form-input").val(doc.data().bedrooms);
        $("#vl-bathrooms-form-input").val(doc.data().bathrooms);
        $("#vl-size-form-input").val(doc.data().size);
        $("#vl-price-form-input").val(doc.data().price);
        $("#vl-fee-form-input").val(doc.data().fee);
        
    })

}