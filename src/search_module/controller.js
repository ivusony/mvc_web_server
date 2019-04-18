const   data    =   require('./model'),
        display =   require('./view'),
        btn     =   document.querySelector('.button'),
        div     =   document.querySelector('.container');


        function ctrl(){
            btn.addEventListener('click', function(){
                data()
                .then(function(xmlData){
                    return xmlData.text();
                })
                .then(function(str){
                    var string = new DOMParser();
                    string.parseFromString(str, 'application/xml');
                    return str;
                })
                .then(function(data){
                    display(data);
                })
                
            })
        }

module.exports = ctrl;