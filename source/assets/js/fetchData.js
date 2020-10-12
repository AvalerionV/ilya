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

function getAgent(docID) {
    var agent = null;
    Object.keys(agentArray).forEach(function (key) {
        if(agentArray[key].id == docID) {
            agent = agentArray[key].name;
        }
    });
    return agent;
}

function getListingStatus(status) {
    if(status == 'For Rent') {
        return '<td id="status-for-rent"><span>Rent</span></td>';
    } else if(status == 'For Sale') {
        return '<td id="status-for-sale"><span>Sale</span></td>';
    } else if(status == 'Sold') {
        return '<td id="status-sold"><span>Sold</span></td>';
    }
}

function getAgentStatus(status) {
    if(status == 'Active') {
        return '<td id="status-active"><span>Active</span></td>';
    } else if(status == 'Inactive') {
        return '<td id="status-inactive"><span>Inactive</span></td>';
    }
}

function checkLocationExists(loc) {
    if(locationArray.indexOf(loc) !== -1) {
        return true;
    } else {
        return false;
    }
}

function renderList(doc) {
    
    $('.listing .listing-table-data').append('<tr class="item-data"><td>' + getFormattedDate(doc.data().date) + '</td><td>' + doc.data().name + '</td><td>' + doc.data().location + '</td><td>'+ doc.data().top +'</td><td>' + getAgent(doc.data().agent) + '</td>' + getListingStatus(doc.data().status) + '</tr>')
    
    if (checkLocationExists(doc.data().location) == false) {
        locationArray.push(doc.data().location);
    }
    
}

function renderAgent(doc) {
    
    $('.agent .agent-table-data').append('<tr class="item-data"><td>' + doc.data().name + '</td><td>' + doc.data().location + '</td>' + getAgentStatus(doc.data().status) + '</tr>')
    
    agentArray.push({name:doc.data().name, id:doc.id});
}

function fetchListing(collection) {
    
    let documents = readDocuments(collection, options); // read collection from firestore using provided options argument
    locationArray = []; // empty the LocationArray
    
    documents.then(function(doc) {
        
        $(".listing .listing-table-data").empty(); // clear the table data

        doc.docs.forEach(doc => {
            renderList(doc);
        })
        
    })
    
    autocomplete(document.getElementById("location-form-input"), locationArray);
    
}

function fetchAgent(collection) {
    
    let documents = readDocuments(collection, options); // read collection from firestore using provided options argument
    
    documents.then(function(doc) {
    
        agentArray = [];
        
        $(".agent .agent-table-data").empty(); // clear the table data
        
        $('#filter-agent-form-select').empty(); // clear select form options
        $('#filter-aic-form-select').empty(); // clear select form options
        $('#nl-aic-form-select').empty(); // clear select form options
        $('#nl-agent-form-select').empty(); // clear select form options
        
        $('#filter-agent-form-select').append("<option selected>All</option>");
        $('#filter-aic-form-select').append("<option selected>All</option>");
        $('#nl-aic-form-select').append("<option value=\"\" selected hidden>Select an option</option>");
        $('#nl-agent-form-select').append("<option value=\"\" selected hidden>Select an option</option>");

        doc.docs.forEach(doc => {
            renderAgent(doc);
        })        
        
        Object.keys(agentArray).forEach(function (key) {
            $('#filter-agent-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
            $('#filter-aic-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
            $('#nl-aic-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
            $('#nl-agent-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
        });
        
        //$('#mySelect').append($("<option></option>").attr("value", key).text(value)); 
        
    })
    
}

