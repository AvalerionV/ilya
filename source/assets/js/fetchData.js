
let options = []; //let options = {where: [["name", "==", "Property 1"], ["bedrooms", "==", "3"]]};

function readDocuments(collection, options = {}) {
    let {where, orderBy, limit} = options;
    let query = firebase.firestore().collection(collection);

    if (where) {
        if (where[0] instanceof Array) {
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

function checkAgentExists(agent) {
    if(agentArray.indexOf(agent) !== -1) {
        return true;
    } else {
        return false;
    }
}

function returnDate(dt) {
    if(dt != undefined) {
        return dt.toDate().toDateString();
    }
    return '';
}

function renderList(id,doc) {
    
    $('.listing .listing-table-data').append('<tr class="item-data" onclick="openDocument(\'' + id + '\')"><td>' + returnDate(doc.date) + '</td><td>' + doc.name + '</td><td>' + doc.location + '</td><td>'+ doc.top +'</td><td>' + getAgent(doc.agent) + '</td>' + getListingStatus(doc.status) + '</tr>');
    
    if (!checkLocationExists(doc.location)) {
        locationArray.push(doc.location);
    }
    
}

function renderAgent(id,doc) {
    
    $('.agent .agent-table-data').append('<tr class="item-data"><td>' + doc.name + '</td><td>' + doc.location + '</td>' + getAgentStatus(doc.status) + '</tr>')
    
    if (!checkAgentExists(doc.name)) {
        agentArray.push({name:doc.name, id:id});
    }
}

let agentDocuments = readDocuments("agent", options); // read collection from firestore using provided options argument
let listingDocuments = readDocuments("listing", options); // read collection from firestore using provided options argument

function fetchAllData() {
    
    $('#agent-s-d').show();
    $('#listing-s-d').show();
    $('#agent-e-d').hide();
    $('#listing-e-d').hide();
    
    agentDocuments.then(querySnapshot => {
        
        if(querySnapshot.empty) {
            
            $('.agent').hide();
            $('.empty-a-data').show();
            $('#agent-s-d').hide();
            $('#agent-e-d').show();
            
        } else {
            
            $('.agent').show();
            $('.empty-a-data').hide();

            $(".agent .agent-table-data").empty(); // clear the table data
            $('#filter-agent-form-select').empty(); // clear select form options
            $('#filter-aic-form-select').empty(); // clear select form options
            $('#nl-aic-form-select').empty(); // clear select form options
            $('#nl-agent-form-select').empty(); // clear select form options

            $('#filter-agent-form-select').append("<option selected>All</option>");
            $('#filter-aic-form-select').append("<option selected>All</option>");
            $('#nl-aic-form-select').append("<option value=\"\" selected hidden>Select an option</option>");
            $('#nl-agent-form-select').append("<option value=\"\" selected hidden>Select an option</option>");

            querySnapshot.forEach((doc) => {
                renderAgent(doc.id,doc.data());
            })        

            Object.keys(agentArray).forEach(function (key) {
                $('#filter-agent-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
                $('#filter-aic-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
                $('#nl-aic-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
                $('#nl-agent-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
            });
            
        }
        
    });
    
    listingDocuments.then((querySnapshot) => {
        
        if(querySnapshot.empty) {
            
            $('.listing').hide();
            $('.empty-l-data').show();
            $('#listing-s-d').hide();
            $('#listing-e-d').show();
            
        } else {
            
            $('.listing').show();
            $('.empty-l-data').hide();

            $(".listing .listing-table-data").empty(); // clear the table data

            querySnapshot.forEach((doc) => {
                renderList(doc.id, doc.data());
            })
            
        }

    });

    autocomplete(document.getElementById("location-form-input"), locationArray);
        
}

