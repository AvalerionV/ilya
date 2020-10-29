let listingOptions = []; //{where: [["name", "==", "Property 1"], ["bedrooms", "==", "3"]]}
let agentOptions = []; //{where: [["name", "==", "Property 1"], ["bedrooms", "==", "3"]]}

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
    if(locationArray.lastIndexOf(loc) !== -1) {
        return true;
    }
    return false;
}

function checkAgentExists(agent) {
    if(agentNameArray.lastIndexOf(agent) !== -1) {
        return true;
    }
    return false;
}

function returnDate(dt) {
    if(dt != undefined) {
        return dt.toDate().toDateString();
    }
    return '';
}

function renderList(id,doc) {
    
    $('.listing .listing-table-data').append('<tr class="item-data" onclick="openDocument(\'' + id + '\')"><td><div id="l-name">' + doc.name + '</div><div id="l-location">' + doc.location + '</div></td><td>' + returnDate(doc.date) + '</td><td>'+ doc.top +'</td><td>' + getAgent(doc.agent) + '</td>' + getListingStatus(doc.status) + '</tr>');
    
    if (checkLocationExists(doc.location) == false) {
        locationArray.push(doc.location);
    }
    
}

function renderAgent(id,doc) {
    
    $('.agent .agent-table-data').append('<tr class="item-data"><td><div id="a-name">' + doc.name + '</div><div id="a-location">' + doc.location + '</div></td>' + getAgentStatus(doc.status) + '</tr>')
    
    if (!checkAgentExists(doc.name)) {
        agentNameArray.push(doc.name);
        agentArray.push({name:doc.name, id:id});
    }
}

let agentDocuments = readDocuments("agent", listingOptions); // read collection from firestore using provided options argument
let listingDocuments = readDocuments("listing", agentOptions); // read collection from firestore using provided options argument

function fetchAllData() {
    let t0 = performance.now();

    $('.listing').hide();
    $('.agent').hide();
    $('#l-stats').hide();
    $('#a-stats').hide();
    $('.empty-l-data').show();
    $('.empty-a-data').show();
    $('#agent-s-d').show();
    $('#listing-s-d').show();
    $('#agent-e-d').hide();
    $('#listing-e-d').hide();
    
    agentDocuments.then(querySnapshot => {
        
        if(querySnapshot.empty) {
            throw "NO-DATA-01";
        }
            
        $('.agent').show();
        $('#a-stats').show();
        $('.empty-a-data').hide();

        $(".agent .agent-table-data").empty(); // clear the table data
        $('#filter-agent-form-select').empty(); // clear select form options
        $('#filter-aic-form-select').empty(); // clear select form options
        $('#nl-aic-form-select').empty(); // clear select form options
        $('#nl-agent-form-select').empty(); // clear select form options
        $('#vl-aic-form-select').empty(); // clear select form options
        $('#vl-agent-form-select').empty(); // clear select form options

        $('#filter-agent-form-select').append("<option selected>All</option>");
        $('#filter-aic-form-select').append("<option selected>All</option>");
        $('#nl-aic-form-select').append("<option value=\"\" selected hidden>Select an option</option>");
        $('#nl-agent-form-select').append("<option value=\"\" selected hidden>Select an option</option>");
        $('#vl-aic-form-select').append("<option value=\"\" selected hidden>Select an option</option>");
        $('#vl-agent-form-select').append("<option value=\"\" selected hidden>Select an option</option>");

        querySnapshot.forEach((doc) => {
            renderAgent(doc.id,doc.data());
        });  
        
        $('#a-records').html(querySnapshot.size);
    
        let t1 = performance.now();

        $('#a-execTime').html(((t1-t0)/1000).toFixed(3));

        Object.keys(agentArray).forEach(function (key) {
            $('#filter-agent-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
            $('#filter-aic-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
            $('#nl-aic-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
            $('#nl-agent-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
            $('#vl-aic-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
            $('#vl-agent-form-select').append($("<option></option>").attr("value", agentArray[key].id).text(agentArray[key].name));
        });
        
    }).catch(function(error) {
        $('.agent').hide();
        $('.empty-a-data').show();
        $('#agent-s-d').hide();
        $('#agent-e-d').show();
    });
    
    listingDocuments.then((querySnapshot) => {
        
        if(querySnapshot.empty) {
            throw "NO-DATA-01";
        }
        
        $('.listing').show();
        $('#l-stats').show();
        $('.empty-l-data').hide();

        $(".listing .listing-table-data").empty(); // clear the table data

        querySnapshot.forEach((doc) => {
            renderList(doc.id, doc.data());
        });
        
        $('#l-records').html(querySnapshot.size);
    
        let t1 = performance.now();

        $('#l-execTime').html(((t1-t0)/1000).toFixed(3));

    }).catch(function(error) {
        if(error == "NO-DATA-01") {
            $('.listing').hide();
            $('.empty-l-data').show();
            $('#listing-s-d').hide();
            $('#listing-e-d').show();
        }
    });

    autocomplete(document.getElementById("location-form-input"), locationArray);
}

