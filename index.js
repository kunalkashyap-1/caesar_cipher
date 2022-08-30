let type = document.getElementById("Slt");


function trigger() {
    let key = Number(document.getElementById("key").value);
    switch (type.value) {
        case "Encrypt":
            cipher(key);
            break;
        case "Decrypt":
            cipher((26 - key));
            break;
    }
}

function cipher(key) {
    let text = document.getElementById("txt").value;
    let res = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[A-z]/g)) {
            let code = Number(char.charCodeAt(0));
            console.log(code);
            if (char == char.toUpperCase(text[i])) {
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
