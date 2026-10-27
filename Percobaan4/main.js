// 1. Membuat array of object
const pegawai = [
    {
        nama: "Andi",
        jabatan: "Manager",
        gaji: 8000000
    },
    {
        nama: "Budi",
        jabatan: "Staff",
        gaji: 5000000
    },
    {
        nama: "Citra",
        jabatan: "Manager",
        gaji: 9000000
    },
    {
        nama: "Dedi",
        jabatan: "Staff",
        gaji: 6000000
    }
];

// 2. Mengambil elemen HTML
const tabel = document.getElementById("dataPegawai");
const hasilTertinggi = document.getElementById("pegawaiTertinggi");

// 3. Menyiapkan variabel gaji tertinggi
let gajiTertinggi = -Infinity;
let pegawaiTerbaik = null;

// 4. Melakukan perulangan
for (let i = 0; i < pegawai.length; i++) {

    let nama = pegawai[i].nama;
    let jabatan = pegawai[i].jabatan;
    let gajiPokok = pegawai[i].gaji;

    // 5. Menghitung pajak 10%
    let pajak = gajiPokok * 0.10;

    // 6. Menghitung tunjangan Manager
    let tunjangan = 0;

    if (jabatan === "Manager") {
        tunjangan = gajiPokok * 0.20;
    }

    // 7. Menghitung gaji bersih
    let gajiBersih = gajiPokok + tunjangan - pajak;

    // 8. Menampilkan data ke tabel
    tabel.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${nama}</td>
            <td>${jabatan}</td>
            <td>Rp${gajiPokok.toLocaleString("id-ID")}</td>
            <td>Rp${pajak.toLocaleString("id-ID")}</td>
            <td>Rp${tunjangan.toLocaleString("id-ID")}</td>
            <td>Rp${gajiBersih.toLocaleString("id-ID")}</td>
        </tr>
    `;

    // 9. Mencari gaji bersih tertinggi
    if (gajiBersih > gajiTertinggi) {
        gajiTertinggi = gajiBersih;

        pegawaiTerbaik = {
            nama: nama,
            jabatan: jabatan,
            gajiBersih: gajiBersih
        };
    }
}

// 10. Menampilkan pegawai dengan gaji tertinggi
hasilTertinggi.innerHTML = `
    Nama: ${pegawaiTerbaik.nama}<br>
    Jabatan: ${pegawaiTerbaik.jabatan}<br>
    Gaji Bersih: Rp${pegawaiTerbaik.gajiBersih.toLocaleString("id-ID")}
`;