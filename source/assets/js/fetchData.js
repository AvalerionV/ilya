//let options = {where: [["location", "==", "Cocotal Golf Course - Bavaro"]]};
let options = {};

function readDocuments(collection, options = {}) {
    let {where, orderBy, limit} = options;
    let query = firebase.firestore().collection(collection);

    if (where) {
        if (where[0] instanceof Array) {
            // It's an array of array
            for (let w of where) {
                query = query.where(...w);
            }
        } else {
            query = query.where(...where);
        }

    }

    if (orderBy) {
        query = query.orderBy(...orderBy);
    }

    if (limit) {
        query = query.limit(limit);
    }

    return query
            .get()
            .then()
            .catch()
}

function getFormattedDate() {
    var date = new Date();

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? '0' : '') + month;
    day = (day < 10 ? '0' : '') + day;
    hour = (hour < 10 ? '0' : '') + hour;
    min = (min < 10 ? '0' : '') + min;
    sec = (sec < 10 ? '0' : '') + sec;

    var str = day + '/' + month + '/' + date.getFullYear();

    return str;
}

function renderList(doc) {
    
    locationArray = []; // empty the LocationArray
    
    $('.listing .listing-table-data').append('<tr class="item-data"><td>' + getFormattedDate(doc.data().date) + '</td><td>' + doc.data().name + '</td><td>' + doc.data().location + '</td><td>'+ doc.data().typeofproperty +'</td><td></td><td>' + doc.data().status + '</td></tr>')
    
    locationArray.push(doc.data().location);
}

function renderAgent(doc) {
    
    $('.agent .agent-table-data').append('<tr class="item-data"><td>' + doc.data().name + '</td><td>' + doc.data().location + '</td><td>' + doc.data().status + '</td></tr>')
}

function fetchListing(collection) {
    
    let documents = readDocuments(collection, options); // read collection from firestore using provided options argument
    
    documents.then(function(doc) {
        
        $(".listing .listing-table-data").empty(); // clear the table data

        doc.docs.forEach(doc => {
            renderList(doc);
        })
        
        autocomplete(document.getElementById("location-form-input"), locationArray);
        autocomplete(document.getElementById("nl-location-form-input"), locationArray);
        
    })
    
}

function fetchAgent(collection) {
    
    let documents = readDocuments(collection, options); // read collection from firestore using provided options argument
    
    documents.then(function(doc) {
        
        $(".agent .agent-table-data").empty(); // clear the table data

        doc.docs.forEach(doc => {
            renderAgent(doc);
        })
        
    })
    
}

