// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

//senza html, solo tramite un alert box generato dalla pagina
 //let username = window.prompt("Enter your username");
 //console.log(username); //apre un alert che ti chiede l'username, l'username inserito verrà visualizzato su console




//con la creazione di un textbox sulla parte di html
 let username;

 document.getElementById("mySubmit").onclick = function() //prende il text digitato e lo mette su username
    {
        username = document.getElementById("myText").value;
        document.getElementById("id1").textContent = `Hello ${username}`
        console.log(username); //visualizza sulla console
    }