function getData(){
    return fetch('http://127.0.0.1:3000/getdata');
}

module.exports = getData;