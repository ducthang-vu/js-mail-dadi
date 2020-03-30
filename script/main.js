/*
    A script for allowing access to registered user and for playing a dice game
*/

console.log('main.js is working')

var registered_users = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers']
var login_button = document.getElementById('login-button')



/* 1- Access */
login_button.addEventListener('click', 
    function() {
        var username = document.getElementById('username').value.toLowerCase()
        var message = document.getElementById('house-message')
        var control = false

        for (var i = 0; i < registered_users.length; i++) {
            if (username == registered_users[i]) 
                control = true
            } 

        if (control) {
            message.innerHTML = "Hi! We're happy to welcome back!"
        }
        else {
            message.innerHTML = "Sorry, you are not a registered user. You cannot play with us."
        }
    }        
)
