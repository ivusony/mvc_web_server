const   data    =   require('./model'),
        btn     =   document.querySelector('.button'),
        div     =   document.querySelector('.container');


        function ctrl(){
            btn.addEventListener('click', function(){
                console.log('pressed');
            })
        }

module.exports = ctrl;