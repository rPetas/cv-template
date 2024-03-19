fetch('assets/data.json')
    .then(response => response.json())
    .then(data => renderData(data))
    .catch(error => console.log('Error:', error));

function renderData(data) {
    // Check data.json for the available properties

    // Set candidate name
    find('#candidate').innerHTML = data.candidate;
    find('#role').innerHTML = data.role;
    find('#location').innerHTML = data.location;
    find('#phone').innerHTML = data.phone;
}

function find(selector){
    return document.querySelector(selector);
}