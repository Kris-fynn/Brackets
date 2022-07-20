/* global document,window,localStorage */

/* Code for image changer */ 

var dogImage = document.querySelector('img');

dogImage.onclick = function () {
    
    'use strict';
    
    var myImages = dogImage.getAttribute('src');
    
    if (myImages === 'puppy.png') {
        
        dogImage.setAttribute('src', 'dog.png');
        
    } else {
        
        dogImage.setAttribute('src', 'puppy.png');
        
    }

};

//Personalized welcome massege code

var nameButton = document.querySelector('button'); 

var myHeading = document.querySelector('h1');

function setUserName() {
    
    'use strict'; 
    
    var myName = window.prompt('Please enter your name.');
    
    localStorage.setItem('name', myName);
    
    myHeading.textContent = 'have a nice day, ' + myName;
    
}

if (!localStorage.getItem('name')) {
    
    setUserName();
    
} else {
    
    var storeName = localStorage.getItem('name');
    
    myHeading.textContent = 'Have a nice day, ' + storeName;
    
}

nameButton.onclick = function () {
    
    'use strict';
    
    setUserName();
    
};

