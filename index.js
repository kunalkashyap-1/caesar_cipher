let type = document.getElementById("Slt");
let text = document.getElementById("txt");


document.querySelector(".Brute").classList.add("visible");
function change(){
    switch (type.value) {
        case "Encrypt":
            document.querySelector(".Brute").classList.add("visible");
            document.querySelector("#trig").value="Encrypt";
            break;
        case "Decrypt":
            document.querySelector(".Brute").classList.remove("visible");
            document.querySelector("#txt").value="Fubswrjudskb lv ixq";
            document.querySelector("#trig").value="Decrypt";
            break;
    }
}

function trigger() {
    let key = Number(document.getElementById("key").value);
    switch (type.value) {
        case "Encrypt":
            document.querySelector(".crack").innerHTML="Encrypted:- "+cipher(text.value,key); 
            break;
        case "Decrypt":
            document.querySelector(".crack").innerHTML="Decrypted:- "+cipher(text.value,(26 - key));
            break;
    }
}

function cipher(text,key) {

    let res = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[A-z," "]/g)) {
            let code = Number(char.charCodeAt(0));
            if(char ===" "){
                res+=" ";
            }
            else if (char == char.toUpperCase(text[i])) {
                let ch = String.fromCharCode((code + key - 65) % 26 + 65);
                res += ch;
            }
            else {
                let ch = String.fromCharCode((code + key - 97) % 26 + 97);
                res += ch;
            }
        }
    }
    return res;
}

function brute_force(){
    for (let i = 1; i <= 26; i++) {
        document.querySelectorAll(".result")[i].innerHTML= i+"."+cipher(text.value,(26-i));
    }
}