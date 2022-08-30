let type = document.getElementById("Slt");
let text = document.getElementById("txt");

function change(){
    if(type.value=="Encrypt"){
        document.querySelector(".brute").classList.add("visible");
    }
}

function trigger() {
    let key = Number(document.getElementById("key").value);
    switch (type.value) {
        case "Encrypt":
            document.querySelector(".crack").innerHTML=cipher(text.value,key); 
            break;
        case "Decrypt":
            document.querySelector(".crack").innerHTML=cipher(text.value,(26 - key));
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