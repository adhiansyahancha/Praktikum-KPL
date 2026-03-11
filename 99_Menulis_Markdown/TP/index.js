// DOM Document Object Model

const elemenEditor = document.getElementById("editor-kecil");

const elemenHf = document.getElementById("hf");

const elemenHb = document.getElementById("hb");

function hitungHuruf(event) {
    // const inputIsi = elemenEditor.value.length;
    const inputIsi = event.target.value;

    // ['K', 'a', 't'. 'a', '-', ...]
    const chr = inputIsi.split('');

    let jumlahHurufSejati = 0;
    let jumlahHurufBesar = 0;
    const spasi = /\s+/;
    const besar = /[A-Z]/;
    chr.forEach(karakter => {
        if (spasi.test(karakter)) {
            return;
        }

        if (besar.test(karakter)) {
            jumlahHurufBesar = jumlahHurufBesar + 1
        }

        jumlahHurufSejati = jumlahHurufSejati + 1;
    });

    elemenHf.textContent = jumlahHurufSejati;

    elemenHb.textContent = jumlahHurufBesar;
}

elemenEditor.addEventListener("input", hitungHuruf);
