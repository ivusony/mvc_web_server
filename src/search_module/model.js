function getData(){
    return fetch('http://localhost:3000/getdata');
}

module.exports = getData;