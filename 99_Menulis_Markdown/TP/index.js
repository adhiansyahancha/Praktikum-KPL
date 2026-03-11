/**
 * 1. Demonstrasi DOM menghitung huruf, huruf besar, dan huruf kecil
 * 2. Penggunaan getElementById
 * 3. Penggunaaan addEventListener
 */

/**
 * Ini adalah getElementById, bla bla bal
 */
const elemenEditor = document.getElementById("editor-kecil");

const elemenHf = document.getElementById("hf");
const elemenHb = document.getElementById("hb");

function hitungHuruf(event) {
    // Ini akan menangkap nilai isi dari elemen yang dipilih
    const teks = event.target.value;

    // Hasilnya akan seperti ini: ['K', 'a', 't', 'a', ' ', 'K', ...]
    const teksBaru = teks.split('');

    let jumlahHuruf = 0;
    let jumlahHurufBesar = 0;

    teksBaru.forEach(karakter => {
        // \w -> alfanumerika
        // \s -> spasi putih
        const kriteriaSpasi = /\s+/;
        if (kriteriaSpasi.test(karakter)) {
            return;
        }

        const kriteriaHurufBesar = /[A-Z]+/;
        if (kriteriaHurufBesar.test(karakter)) {
            jumlahHurufBesar = jumlahHurufBesar + 1;
        }

        jumlahHuruf = jumlahHuruf + 1;
    });

    elemenHf.textContent = jumlahHuruf;
    elemenHb.textContent = jumlahHurufBesar;
}

elemenEditor.addEventListener("input", hitungHuruf);
