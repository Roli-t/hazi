window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);
}

function $(nev) {
    return document.querySelectorAll(nev);
}

function init() {
    ID("kuld").addEventListener("click", validalas);

}
function torles() {
    document.getElementById("torlesek").reset();
}


function validalas() {
    var hiba = "";
    var urlapAdatok = "";
    var nevInput = ID("nev").value;
    console.log(nevInput);
    if (nevInput.length < 3) {
        hiba = "A név legyen 3 karakternél hosszabb!<br>";
    }
    var szuro = /[A-Z]/; //nagybetűvel kezdődjön
    if (!szuro.test(nevInput)) {
        hiba += "A név nagybetűvel kezdődjön!<br>"; //+= hozzáfűzés, így mind a 2 hibát kiírja, ha mind a két hiba fennáll
        ID("nev").style.border = "1px solid red";
    } else {
        urlapAdatok += "Név: " + nevInput + "<br>";
        ID("nev").style.border = "1px solid green";
    }
    

    //telefonszam
    var telszambeiras = ID("telszam").value;
    var szuro2 = /[+]([0-9]{2})-([0-9]{2})-([0-9]{3})-([0-9]{4})/;
    if (!szuro2.test(telszambeiras)) {
        hiba += "A telefonszám érvénytelen!" + "<br>";
        ID("telszam").style.border = "1px solid red";
    } else {
        urlapAdatok += "Telefonszám: " + telszambeiras + "<br>";
        ID("telszam").style.border = "1px solid green";
        
    }
    //email
    var emailbeir = ID("e-mail").value;
    var szuro1 = /[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9]+[.]+[a-z0-9]/;
    console.log(emailbeir);
    if (!szuro1.test(emailbeir)) {
        hiba += "Az e-mail cím hibás!<br>";
        ID("e-mail").style.border = "1px solid red";
    } else {
        urlapAdatok += "E-mail: " + emailbeir + "<br>";
        ID("e-mail").style.border = "1px solid green";
    }
    
    //email ujra
    var emailujrabeir = ID("e-mailu").value;
    if (emailbeir !== emailujrabeir) {
        hiba += "A két e-mail cím nem egyezik!" + "<br>";
        ID("e-mailu").style.border = "1px solid red";
    } else {
        urlapAdatok += "E-mail újra: " + emailujrabeir + "<br>";
        ID("e-mailu").style.border = "1px solid green";
    }
    var webbeir = ID("web").value;
    var szuro3 = /^[http:]+[//]+[a-z]+[.]+[a-z]/;
    if (!szuro3.test(webbeir)) {
        hiba += "A weboldal címe hibás!" + "<br>";
        ID("web").style.border = "1px solid red";
    } else {
        urlapAdatok += "Weboldal: " + webbeir + "<br>";
        ID("web").style.border = "1px solid green";
    }

    var prioritasInput = ID("prioritas").value;
    urlapAdatok += "Prioritás: " + prioritasInput + "<br>";

    var uzenetInput = ID("uzenet").value;
    urlapAdatok += "Üzenet: " + uzenetInput;

    $("aside section:nth-child(1) p")[0].innerHTML = hiba; 
    $("aside section:nth-child(2) p")[0].innerHTML = urlapAdatok;
    console.log(hiba);
}


