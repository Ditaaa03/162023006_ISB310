for (var i = 1; i <= 31; i++) {
    document.getElementById("tanggal").innerHTML += "<option>"+i+"</option>";
}
document.getElementById("tanggal").style.fontWeight = "bold";

for (var i = 1; i <= 12; i++) {
    document.getElementById("bulan").innerHTML += "<option>"+i+"</option>";
}
document.getElementById("bulan").style.fontWeight = "bold";

for (var i = 1990; i <= 2026; i++) {
    document.getElementById("tahun").innerHTML += "<option>"+i+"</option>";
}
document.getElementById("tanggal").style.fontWeight = "bold";

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

    var totalAwal = parseInt(t) + parseInt(b) + parseInt(th);
    var total = 0;
    var angkaString = totalAwal.toString();
    
    for (var i = 0; i < angkaString.length; i++) {
        total += parseInt(angkaString[i]);
    }

    var akhir = satuDigit(total);

    var artiText = "";

    switch (akhir) {
        case 1:
            artiText = "Bagi mereka yang jumlah angka hari lahirnya 1 adalah seorang membawa energi pembuka jalan. Dalam banyak tradisi numerologi, angka 1 dianggap sebagai simbol permulaan, keberanian, dan kekuatan untuk menaklukkan tantangan pertama. Karena itu, mereka yang lahir di tanggal ini sering terlihat menonjol sejak kecil, baik dalam ketegasan, gaya berpikir, maupun keberanian mengambil tindakan. Kekuatan terbesar mereka bukan hanya keberanian, tetapi kejelasan tujuan. Mereka tahu apa yang mereka mau, dan ketika fokus itu muncul, mereka bergerak cepat tanpa ragu. Banyak yang mengatakan bahwa pemilik tanggal 1 seperti memiliki “lampu hijau” dari alam semesta: hambatan yang ada sering terasa lebih mudah, pintu kesempatan terbuka lebih cepat, dan dukungan datang di saat tepat. Di dunia karier, mereka cocok menjadi pemimpin proyek, wirausaha, pengambil keputusan, atau pencetus ide besar. Rezeki mereka muncul saat mereka berani memulai, bukan menunggu. Ketika mereka mengambil langkah pertama, semesta seolah mengurus sisanya.";
            break;
        case 2:
            artiText = "Bagi mereka yang jumlah angka hari lahirnya 2 adalah seorang yang dikenal sebagai angka kebijaksanaan dan energi spiritual yang kuat. Orang-orang dengan tanggal ini sering tampak tenang dari luar, tetapi dunianya di dalam penuh analisis, perasaan halus, dan insting yang jarang salah. Mereka bisa membaca situasi lewat tanda kecil yang sering dilewatkan orang lain. Keberuntungan mereka tidak datang dari kerja keras semata, tetapi dari pemilihan langkah yang tepat. Banyak pemilik tanggal 7 yang justru sukses karena mengikuti intuisi, bukan pola rasional. Seperti selalu ada “bisikan halus” atau petunjuk tak terlihat yang menuntun mereka ke arah peluang besar. Mereka cenderung cocok di bidang analisis, penelitian, seni, spiritualitas, psikologi, atau profesi yang membutuhkan kepekaan tinggi. Rezeki muncul kala mereka mengikuti suara hati, bukan ikut arus."
            break;
        case 3:
            artiText = "Bagi mereka yang jumlah angka hari lahirnya 3 adalah seorang yang melambangkan cinta kasih, kepedulian, dan jiwa sosial yang luas. Orang yang lahir di tanggal ini sering dipercaya membawa energi kebaikan yang mengalir kuat di sekelilingnya. Mereka mudah menolong, tidak perhitungan, dan justru karena itu, rezekinya jarang terputus. Kebaikan mereka menjadi magnet. Dukungan, peluang, bahkan pertolongan tak terduga sering muncul ketika mereka membutuhkannya. Banyak dari pemilik tanggal ini yang menemukan jalan karier melalui hubungan baik yang mereka bangun, atau melalui reputasi positif yang mereka miliki. Dalam keuangan, mereka biasanya tidak rakus, tetapi justru karena niat baik dan sifat rendah hati, rezeki mereka lancar dan stabil. Orang lain mudah percaya, bekerja sama, dan memberikan peluang kepada mereka."
            break;
        case 4:
            artiText = "Bagi mereka yang jumlah angka hari lahirnya 4 adalah seorang yang sering disebut angka master, energi spiritualnya dua kali lipat. Orang-orang yang lahir pada tanggal ini memiliki daya tarik unik: mereka intuitif, visioner, dan sering mendapat “ilham” yang membawa perubahan besar dalam hidup. Pemilik angka ini sering mengalami kejadian tidak terduga yang membawa mereka ke jalan yang tepat, bertemu orang penting secara kebetulan, mendapat ide brilian saat tidak sengaja, atau ditawari peluang yang tidak mereka cari. Kekuatan mereka adalah visi ke depan. Mereka mampu melihat gambaran besar yang tidak dilihat orang lain. Banyak dari mereka yang cocok menjadi pembimbing, pemikir, pemimpin spiritual, kreator, atau inovator. Rezeki mereka terbuka melalui hal-hal intuitif, mengikuti firasat, membaca tanda alam, dan mengalir bersama energi yang muncul."
            break;
        case 5:
            artiText = "Bagi mereka yang jumlah angka hari lahirnya 5 adalah seorang yang melambangkan kombinasi sempurna antara kerja keras (1) dan kesabaran yang membawa hasil besar (7). Mereka adalah tipe yang tekun, disiplin, dan tidak mudah digoyahkan meski mengalami rintangan panjang. Kelebihannya: semesta seakan memberi “bonus tambahan.” Meski mereka bekerja keras, hasil yang datang sering terasa lebih besar dari usaha yang mereka keluarkan. Mereka seperti selalu satu langkah lebih dekat ke keberhasilan dibanding orang lain. Dalam dunia usaha dan karier, mereka jarang buntu. Jika satu pintu tertutup, pintu lain segera terbuka. Mereka juga pandai mengelola waktu dan energi, sehingga sering berhasil lebih cepat dibanding rekan-rekannya."
            break;
        case 6:
            artiText = "Bagi mereka yang jumlah angka hari lahirnya 6 adalah seorang pribadi yang penuh ide, mudah beradaptasi, dan memiliki daya tarik sosial yang kuat. Orang yang lahir pada tanggal ini sering terlihat menyenangkan, ekspresif, dan membawa aura positif. Keberuntungan mereka mayoritas datang dari hubungan dan komunikasi. Banyak pemilik tanggal ini yang sukses karena jaringan sosial, kemampuan bicara, negosiasi, atau relasi yang mereka bangun dengan tulus. Mereka sangat cocok di dunia kreatif, media, pemasaran, komunikasi, pendidikan, atau industri yang membutuhkan inovasi dan pergaulan luas. Rezeki mereka mengalir ketika mereka berkolaborasi, bukan bekerja sendirian."
            break;
        case 7:
            artiText = "Bagi mereka yang jumlah angka hari lahirnya 7 adalah seorang yang dikenal sebagai angka rumah tangga, kestabilan, dan energi finansial yang kuat. Pemilik tanggal ini biasanya tumbuh menjadi orang yang sangat dapat dipercaya, rajin, dan penuh tanggung jawab, karakter yang membuat mereka sering dipercaya mengelola sesuatu yang penting. Rezekinya cenderung stabil karena jalan hidup mereka lebih terstruktur. Mereka mendapatkan peluang finansial dari kerja sama, kemitraan, posisi yang solid, atau lingkungan yang menghargai dedikasi mereka. Keunikan mereka: mereka jarang mengalami krisis besar. Bahkan dalam kondisi sulit, selalu ada jalan kembali untuk bangkit karena energi tanggal 24 membawa perlindungan dan kemapanan alami."
            break;
        case 8:
            artiText = "Bagi mereka yang jumlah angka hari lahirnya 8 adalah seorang yang memiliki jiwa kepemimpinan. Karena itu, orang yang lahir pada tanggal ini membawa aura keberanian, kecerdikan, dan kemampuan strategis yang luar biasa. Mereka cepat membaca peluang, terutama dalam dunia bisnis, investasi, dan perdagangan. Sekalipun menghadapi risiko besar, mereka punya naluri kuat untuk memilih waktu yang tepat. Keberuntungan finansial sering mengikuti mereka karena mereka berani mengambil langkah yang orang lain ragu lakukan. Mereka adalah tipe yang bisa memulai dari nol dan tetap berhasil berkat keberanian dan ketajaman intuisi bisnis. Mereka jarang stagnan, selalu ada lonjakan keberhasilan di fase hidup tertentu."
            break;
        case 9:
            artiText = "Bagi mereka yang jumlah angka hari lahirnya 1 adalah seorang individu yang selalu mencari kesempurnaan dan ingin membantu menjadikan lingkungan sekitar Anda tempat yang lebih baik. Anda tertarik pada karier yang melibatkan terapi, penyembuhan, nutrisi, kecantikan, mode, dekorasi interior, pengajaran, konseling, dan perhotelan. Orang lain selalu menginginkan nasihat Anda, dan Anda juga berdedikasi untuk mencapai tujuan yang Anda tetapkan sejak dini dalam hidup. Anda tertarik pada karier di bidang bisnis, pengembangan properti, kepemimpinan, hukum, manajemen proyek, perbankan, keuangan, dan properti. Anda memiliki kemampuan mengelola keuangan yang baik dan bakat alami dalam mengatur anggaran."
            break;
    }
    document.getElementById("1").innerHTML = t;
    document.getElementById("2").innerHTML = b;
    document.getElementById("3").innerHTML = th;
    document.getElementById("4").innerHTML = totalAwal;
    document.getElementById("5").innerHTML = total;
    document.getElementById("6").innerHTML = akhir;

    document.getElementById("judul").innerHTML = "Tanggal Lahir Anda Berada Pada Garis Hidup " + akhir;

    document.getElementById("arti").innerHTML = artiText;

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