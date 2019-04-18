function display(data){
    var div = document.createElement('div');
    div.innerHTML = data;
    document.body.appendChild(div);

}

module.exports = display;