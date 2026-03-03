const daftarWarna = [
    '#ff3333', '#ff9933', '#ffff33', '#99ff33', '#33ff33', '#33ff99', '#33ffff', '#3399ff',
    '#ff0000', '#ff6600', '#ffff00', '#66ff00', '#00ff00', '#00ff66', '#00ffff', '#0066ff',
    '#990000', '#cc3300', '#999900', '#339900', '#009900', '#009933', '#009999', '#003399',
    '#000000', '#333333', '#666666', '#999999', '#cccccc', '#dddddd', '#eeeeee', '#ffffff'
];

let modeSaatIni = ''; 
let warnaPilihan = '';

const gridElement = document.getElementById('colorGrid');
daftarWarna.forEach(warna => {
    const kotak = document.createElement('div');
    kotak.className = 'tile';
    kotak.style.backgroundColor = warna;
    kotak.onclick = () => setWarna(warna, kotak);
    gridElement.appendChild(kotak);
});

function openModal(mode) {
    modeSaatIni = mode;
    document.getElementById('colorModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('colorModal').style.display = 'none';
}

function setWarna(warna, elemen) {
    warnaPilihan = warna;
    document.querySelectorAll('.tile').forEach(t => t.classList.remove('active'));
    if(elemen) elemen.classList.add('active');
    document.getElementById('customPreview').style.backgroundColor = warna;
}

function updateFromNative(warna) {
    setWarna(warna, null);
}

function pilihWarna() {
    if (warnaPilihan) {
        const idPreview = modeSaatIni === 'bg' ? 'bgPreview' : 'textPreview';
        document.getElementById(idPreview).style.backgroundColor = warnaPilihan;
        closeModal();
    }
}

function terapkanWarna() {
    const warnaBG = document.getElementById('bgPreview').style.backgroundColor;
    const warnaTeks = document.getElementById('textPreview').style.backgroundColor;

    if(warnaBG) document.body.style.backgroundColor = warnaBG;
    if(warnaTeks) {
        document.body.style.color = warnaTeks;
        document.querySelectorAll('h1, span, legend').forEach(el => {
            el.style.color = warnaTeks;
        });
    }
}