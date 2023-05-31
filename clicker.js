//php clicker  

//values
let tehtavat = 0
let ratkaisut = 1
let opintopisteet = 0
let raha = 0
let tehtavatmulti = 1
let ratkaisutmulti = 1
let rahamulti = 1
let harjtyöostettu = 0
let mvcdemoostettu = 0
let erityisopetuntiostettu = 0
let privatetuntiostettu = 0
let äitejäostettu = 0
let isejäostettu = 0
let lukioavattu = false
let amkavattu = false
let yliopistoavattu = false

//save and load system

// function save() {
//     localStorage.setItem("tehtavat", tehtavat);
//     localStorage.setItem("ratkaisut", ratkaisut);
//     localStorage.setItem("opintopisteet", opintopisteet);
//     localStorage.setItem("raha", raha);
//     localStorage.setItem("tehtavatmulti", tehtavatmulti);
//     localStorage.setItem("ratkaisutmulti", ratkaisutmulti);
//     localStorage.setItem("rahamulti", rahamulti);
//     localStorage.setItem("harjtyöostettu", harjtyöostettu);
//     localStorage.setItem("mvcdemoostettu", mvcdemoostettu);
//     localStorage.setItem("erityisopetuntiostettu", erityisopetuntiostettu);
//     localStorage.setItem("privatetuntiostettu", privatetuntiostettu);
//     localStorage.setItem("äitejäostettu", äitejäostettu);
//     localStorage.setItem("isejäostettu", isejäostettu);
// }

// function load() {
//     if (localStorage.getItem("raha")) {
//         tehtavat = Number(localStorage.getItem("tehtavat"));
//         ratkaisut = Number(localStorage.getItem("ratkaisut"));
//         opintopisteet = Number(localStorage.getItem("opintopisteet"));
//         raha = Number(localStorage.getItem("raha"));
//         tehtavatmulti = Number(localStorage.getItem("tehtavatmulti"));
//         ratkaisutmulti = Number(localStorage.getItem("ratkaisutmulti"));
//         rahamulti = Number(localStorage.getItem("rahamulti"));
//         harjtyöostettu = Number(localStorage.getItem("harjtyöostettu"));
//         mvcdemoostettu = Number(localStorage.getItem("mvcdemoostettu"));
//         erityisopetuntiostettu = Number(localStorage.getItem("erityisopetuntiostettu"));
//         privatetuntiostettu = Number(localStorage.getItem("privatetuntiostettu"));
//         äitejäostettu = Number(localStorage.getItem("äitejäostettu"));
//         isejäostettu = Number(localStorage.getItem("isejäostettu"));

//     }
// }

// setInterval(save, 1000);
// load();


//functions


function peruna() {
    tehtavat += tehtavatmulti
    document.getElementById("tehtavat").innerHTML = tehtavat
}

function erotus() {
    if (opintopisteet < 0) {
        document.getElementById("erotus").innerHTML = "SINUT ON EROTETTU"
        setInterval(erotus2, 6000)
        function erotus2() {
            location.reload()
        }
    }
}

function tehtävienTeko () {
    if (tehtavat >= 1) {
        tehtavat = tehtavat - ratkaisutmulti
        opintopisteet += ratkaisutmulti
        loadall()
        raha += 1*rahamulti
    }
}

function kela() {
    if (opintopisteet <= 5) {
        raha += 50
        document.getElementById("raha").innerHTML = raha;
    }
}

function loadall() {
    document.getElementById("raha").innerHTML = Math.round(raha * 100) / 100;
    document.getElementById("opintopisteet").innerHTML = Math.round(opintopisteet * 100) / 100;
    document.getElementById("tehtavat").innerHTML = tehtavat
    document.getElementById("harjtyöostettu").innerHTML = harjtyöostettu
    document.getElementById("mvcdemoostettu").innerHTML = mvcdemoostettu
    document.getElementById("erityisopetuntiostettu").innerHTML = erityisopetuntiostettu
    document.getElementById("privatetuntiostettu").innerHTML = privatetuntiostettu
    document.getElementById("äitejäostettu").innerHTML = äitejäostettu
    document.getElementById("isejäostettu").innerHTML = isejäostettu
    erotus()
    Lukio()
}

function tehtävät1() {
    // if (opintopisteet = 
    tehtavatmulti += 1
    opintopisteet = opintopisteet - 30
    harjtyöostettu += 1
}

function tehtävät10() {
    // if opintopisteet = 
    tehtavatmulti += 10
    opintopisteet = opintopisteet - 200
    mvcdemoostettu += 1
}

function ratkaisut1() {
    ratkaisutmulti += 1
    raha = raha - 100
    erityisopetuntiostettu += 1
}

function ratkaisut10() {
    ratkaisutmulti += 10
    raha = raha - 800
    erityisopetuntiostettu += 1
}

function äiti() {
    rahamulti += 2
    raha = raha - 150
    opintopisteet = opintopisteet - 100
    äitejäostettu += 1
}

function isi() {
    rahamulti += 10
    raha = raha - 500
    opintopisteet = opintopisteet - 250
    isejäostettu += 1
}

var nappiLuotu = false

function Lukio() {
    if (
    !nappiLuotu &&
    harjtyöostettu >= 50 &&
    mvcdemoostettu >= 50 &&
    erityisopetuntiostettu >= 50 &&
    privatetuntiostettu >= 50 &&
    äitejäostettu >= 50 &&
    isejäostettu >= 50
    ) {    
    var nappi = document.createElement("a");
    nappi.href = "../php_clicker/Lukio.html";
    nappi.textContent = "Nappi";

    document.body.appendChild(nappi);
    nappiLuotu = true
    lukioavattu = true
    }
}
