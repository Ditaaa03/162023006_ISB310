// isi dropdown pakai perulangan
for (var i = 1; i <= 31; i++) {
    document.getElementById("tanggal").innerHTML += "<option>"+i+"</option>";
}

for (var i = 1; i <= 12; i++) {
    document.getElementById("bulan").innerHTML += "<option>"+i+"</option>";
}

for (var i = 1950; i <= 2025; i++) {
    document.getElementById("tahun").innerHTML += "<option>"+i+"</option>";
}

// fungsi rekursif
function satuDigit(angka) {
    if (angka < 10) {
        return angka;
    } else {
        var jumlah = 0;
        var angkaString = angka.toString();

        for (var i = 0; i < angkaString.length; i++) {
            jumlah += parseInt(angkaString[i]);
        }

        return satuDigit(jumlah);
    }
}

function hitung() {

    var t = document.getElementById("tanggal").value;
    var b = document.getElementById("bulan").value;
    var th = document.getElementById("tahun").value;

    var gabung = t + b + th;
    var total = 0;

    for (var i = 0; i < gabung.length; i++) {
        total += parseInt(gabung[i]);
    }

    var akhir = satuDigit(total);

    document.getElementById("o1").innerHTML = t;
    document.getElementById("o2").innerHTML = b;
    document.getElementById("o3").innerHTML = th;
    document.getElementById("o4").innerHTML = total;
    document.getElementById("o5").innerHTML = akhir;
    document.getElementById("o6").innerHTML = akhir;

    document.getElementById("judul").innerHTML =
        "Tanggal Lahir Anda Berada Pada Garis Hidup " + akhir;

    document.getElementById("arti").innerHTML =
        "Karakter anda sesuai dengan garis hidup nomor " + akhir;

    document.getElementById("output").classList.remove("hidden");
}

function resetData() {
    document.getElementById("output").classList.add("hidden");
}

function showHome() {
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("garis").classList.add("hidden");
}

function showMenu() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("garis").classList.add("hidden");
}

function showGaris() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("garis").classList.remove("hidden");
}