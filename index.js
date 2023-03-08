const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPass = document.getElementById("first-pass")
let secondPass = document.getElementById("second-pass")
let generatePassword = document.getElementById("generatePassword")
let count = 0

generatePassword.addEventListener("click", function() {
for (i = 0; i < 15; i++) {
let randomFirst = Math.floor ( Math.random() * characters.length )
let randomSecond = Math.floor ( Math.random() * characters.length )
firstPass.innerHTML += characters[randomFirst]
secondPass.innerHTML += characters[randomSecond]
}
})

function resetPasswords() {
    count += 1
    if (count > 1) {
    firstPass.innerHTML = ""
    secondPass.innerHTML = ""
    }
}