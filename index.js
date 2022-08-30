let type = document.getElementById("Slt");

if(type.value=="encrypt"){
    document.querySelector(".Brute").classList.toggle("visible");
}

function trigger() {
    let text = document.getElementById("txt").value;
    let key = Number(document.getElementById("key").value);
    switch (type.value) {
        case "Encrypt":
            cipher(text,key); 
            break;
        case "Decrypt":
            cipher(text,(26 - key));
            break;
    }
}

function cipher(text,key) {

    let res = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        console.log(char);
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
    console.log(res);
    return res;
}
