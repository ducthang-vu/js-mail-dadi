/*
    A script for allowing access to registered user and for playing a dice game
*/

console.log('main.js is working')

var registered_users = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers']
var login_button = document.getElementById('login-button')
var message = document.getElementById('house-message')


/* 1- Access */
login_button.addEventListener('click', 
    function() {
        var username = document.getElementById('username').value.toLowerCase()
        var control = false

        for (var i = 0; i < registered_users.length; i++) {
            if (username == registered_users[i]) 
                control = true
            } 

        if (control) {
            message.innerHTML = "Hi! We're happy to welcome back!\nRoll the die if you want to play."
        }
        else {
            message.innerHTML = "Sorry, you are not a registered user. You cannot play with us."
        }
    }        
)


/* 1- Dice game */
// A game of dice beetween the user and the house, both rolling a dice (six faces), the highest score winning

var roll_button = document.getElementById('roll-button')
var die = ['<i class="fas fa-dice-one"></i>', '<i class="fas fa-dice-two"></i>', '<i class="fas fa-dice-three"></i>', '<i class="fas fa-dice-four"></i>', '<i class="fas fa-dice-five"></i>', '<i class="fas fa-dice-six"></i>']


roll_button.addEventListener('click',
    function() {
        var score = []
        var result_raw_msg

        // roll die twice
        for (i = 0; i < 2; i++) {
            score.push(Math.floor(Math.random() * (6)))
        }

        result_raw_msg = 'You scored: ' + (++score[0]) + '.\nThe house scored: ' + (++score[1]) +'.'

        if (score[0] > score [1]) {
            message.innerHTML = result_raw_msg + '</br>You won!'
        }
        else if (score[0] == score [1]) {
            message.innerHTML = result_raw_msg + "</br>It's a tie!"
        }
        else {
            message.innerHTML = result_raw_msg + '</br>The house wins.'
        }       
    }
)