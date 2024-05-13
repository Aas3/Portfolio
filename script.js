(function () {
    'use strict';

///////////////////////////////////////////////////////  PASSWORD ///

    // var greeting = function(){
    //     var userAnswer = prompt('enter password', "");


    //     userAnswer=userAnswer.toLowerCase();


    //     if(userAnswer === "hi"){
    //         console.log("HI! its nice to meet you!  °˖✧◝(⁰▿⁰)◜✧˖° ");
    //         for(var i=0; i=== userAnswer.length ; i++){
    //             console.log(`hi ${i}`);
    //         }
    //     }
    //     else if(userAnswer === "" ){
    //         console.log("Youre leaving already ... bye ( ˃̣̣̥⌓˂̣̣̥) (ुŏ̥̥̥̥ ‸ ŏ̥̥̥̥) ु");
    //     }
    //     else{
    //         console.log("try one of the options instead ¯\_(ツ)_/¯ ");
    //         console.log(`lengthOfString: ${userAnswer.length}`)
    //     }
 
    //     }
    //     greeting();

    

///////////////////////////////////////////////////////  ON CLICK NAV ///
    const navLinks = document.querySelectorAll('.nav-link');

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the 'active' class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add the 'active' class to the clicked link
            this.classList.add('active');
        });
    });



})();