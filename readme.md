HALAMAN PROFIL MAHASISWA
Tujuan: Membuat halaman profil mahasiswa yang berisi judul, foto, nama, NIM, dan deskripsi singkat.
A. HTML (index.html)
- <!DOCTYPE html>: Menandakan dokumen menggunakan HTML5.
- <html lang="id">: Menandakan awal dokumen HTML dengan bahasa Indonesia.
- <head>: Menyimpan informasi halaman, seperti judul dan pengaturan tampilan.
- <meta charset="UTF-8">: Mendukung karakter dan simbol teks.
- <meta name="viewport">: Membantu halaman menyesuaikan ukuran layar perangkat.
- <title>: Memberikan judul pada tab browser.
- <link rel="stylesheet" href="style.css">: Menghubungkan HTML dengan file CSS eksternal.
- <body>: Menampung konten yang ditampilkan di halaman web.
- <header>: Membuat bagian kepala halaman, biasanya berisi judul.
- <h1>: Membuat judul utama halaman.
- <main>: Menandai bagian utama halaman.
- <section>: Mengelompokkan konten profil menjadi satu bagian.
- <img>: Menampilkan foto mahasiswa.
- src: Menentukan lokasi atau nama file gambar.
- alt: Memberikan teks alternatif untuk gambar.
- <h2>: Menampilkan nama mahasiswa sebagai judul bagian.
- <p>: Membuat paragraf, misalnya NIM dan deskripsi.
- class: Memberikan nama kelompok elemen agar dapat diatur dengan CSS.
B. CSS (style.css)
- body: Memilih bagian utama halaman untuk diatur tampilannya.
- font-family: Mengatur jenis huruf.
- background-color: Mengatur warna latar belakang.
- margin: Mengatur jarak di luar elemen.
- padding: Mengatur jarak di dalam elemen.
- text-align: center: Membuat teks berada di tengah.
- .profil: Memilih elemen yang memiliki class profil.
- max-width: Membatasi lebar maksimum elemen.
- border-radius: Membuat sudut elemen membulat.
- border-radius: 50%: Membuat foto berbentuk lingkaran jika lebar dan tingginya sama.
- box-shadow: Memberikan efek bayangan.
- width dan height: Mengatur lebar dan tinggi elemen.
- object-fit: cover: Membuat gambar memenuhi area tanpa mengubah proporsi gambar, dengan kemungkinan sebagian gambar terpotong.
- font-size: Mengatur ukuran teks.
- font-weight: bold: Membuat teks menjadi tebal.
- color: Mengatur warna teks.
- line-height: Mengatur jarak antarbaris teks.
Kesimpulan soal 1: HTML digunakan untuk membuat struktur profil mahasiswa, sedangkan CSS digunakan untuk memperindah tampilannya. Foto dapat dibuat berbentuk lingkaran dengan border-radius: 50%, nama ditebalkan dengan font-weight: bold, dan latar belakang diatur menggunakan background-color.



SOAL 2 — HALAMAN TOKO ONLINE RESPONSIF
Tujuan: Membuat halaman toko online yang memiliki nama toko, menu navigasi, tiga produk, harga, gambar, dan footer.
A. HTML (index.html)
- <header>: Menampilkan bagian atas halaman, seperti nama toko.
- <h1>: Menampilkan judul utama atau nama toko.
- <nav>: Mengelompokkan menu navigasi.
- <a>: Membuat tautan yang dapat diklik.
- href: Menentukan tujuan tautan.
- <main>: Menandai konten utama halaman.
- <h2>: Menampilkan judul bagian produk.
- <section>: Mengelompokkan seluruh produk.
- <article>: Menampung satu produk beserta gambar, nama, dan harga.
- <img>: Menampilkan gambar produk.
- <h3>: Menampilkan nama produk.
- <p>: Menampilkan informasi, seperti harga produk.
- <footer>: Menampilkan informasi di bagian bawah halaman.
- id: Memberikan identitas unik pada elemen HTML.
B. CSS (style.css)
- *: Memilih semua elemen HTML.
- box-sizing: border-box: Membuat ukuran elemen lebih mudah dikendalikan karena padding dan border ikut dihitung dalam ukuran yang ditentukan.
- display: grid: Mengaktifkan tata letak Grid.
- grid-template-columns: Mengatur jumlah dan ukuran kolom.
- 1fr: Membagi ruang yang tersedia dalam satu bagian pecahan.
- repeat(3, 1fr): Membuat tiga kolom dengan ukuran yang sama.
- gap: Mengatur jarak antaritem.
- border: Membuat garis tepi elemen.
- border-radius: Membuat sudut elemen membulat.
- text-decoration: none: Menghilangkan dekorasi teks, misalnya garis bawah tautan.
- width: 100%: Membuat lebar elemen mengikuti lebar area induknya.
- max-width: Membatasi lebar maksimum elemen.
- @media: Membuat aturan CSS berdasarkan kondisi, seperti ukuran layar.
- min-width: Menentukan batas lebar minimum untuk menerapkan aturan CSS.
Kesimpulan soal 2: HTML digunakan untuk menyusun informasi toko dan produk. CSS Grid digunakan untuk mengatur posisi produk dalam beberapa kolom. Media query membuat tampilan menyesuaikan ukuran layar, misalnya satu kolom pada ponsel dan tiga kolom pada layar yang lebih lebar.


SOAL 3 — HALAMAN BERITA KAMPUS
Tujuan: Membuat halaman berita kampus yang memiliki judul, navigasi, tiga artikel berita, gambar, ringkasan, dan footer.
A. HTML (index.html)
- <header>: Membuat bagian kepala halaman berita.
- <h1>: Menampilkan judul utama berita kampus.
- <nav>: Membuat bagian navigasi.
- <a>: Membuat tautan menuju bagian halaman.
- <main>: Menandai konten utama berita.
- <h2>: Menampilkan judul bagian berita terbaru.
- <section>: Mengelompokkan seluruh kartu berita.
- <article>: Menampung satu artikel berita.
- <img>: Menampilkan gambar berita.
- <h3>: Menampilkan judul artikel.
- <p>: Menampilkan ringkasan berita.
- <footer>: Menampilkan informasi di bagian bawah halaman.
B. CSS (style.css)
- background-color: Mengatur warna latar belakang halaman atau kartu.
- color: Mengatur warna teks.
- padding: Memberikan ruang di dalam kartu berita.
- margin: Memberikan jarak di luar elemen.
- border-radius: Membuat sudut kartu membulat.
- box-shadow: Memberikan bayangan pada kartu berita.
- display: grid: Menyusun kartu berita menggunakan Grid.
- grid-template-columns: 1fr: Membuat satu kolom.
- repeat(2, 1fr): Membuat dua kolom dengan ukuran sama.
- repeat(3, 1fr): Membuat tiga kolom dengan ukuran sama.
- @media (min-width: 768px): Mengatur tampilan untuk layar dengan lebar minimal 768 piksel.
- @media (min-width: 1024px): Mengatur tampilan untuk layar dengan lebar minimal 1024 piksel.
- :hover: Menerapkan gaya ketika kursor berada di atas elemen.
- height: auto: Membuat tinggi gambar menyesuaikan proporsi aslinya.
Contoh:
.berita h3:hover {
    color: orange;
}

Artinya, warna judul berita berubah menjadi oranye ketika kursor diarahkan ke judul tersebut.

Kesimpulan soal 3: HTML digunakan untuk membuat struktur artikel berita. CSS Grid mengatur jumlah kolom kartu berita, sedangkan media query menyesuaikan tata letak berdasarkan ukuran layar. :hover memberikan efek interaktif saat kursor diarahkan ke judul berita.


SOAL 4 — PROGRAM DATA DAN PERHITUNGAN GAJI PEGAWAI
Tujuan: Menyimpan data pegawai, menghitung pajak dan tunjangan, menampilkan tabel gaji, serta mencari pegawai dengan gaji bersih tertinggi.
A. HTML (index.html)
- <table>: Membuat tabel data pegawai.
- <thead>: Menampung bagian kepala tabel.
- <tr>: Membuat baris tabel.
- <th>: Membuat sel judul kolom.
- <td>: Membuat sel data tabel.
- <tbody>: Menampung isi atau baris data tabel.
- id="dataPegawai": Menentukan tempat JavaScript menampilkan data pegawai.
- <p>: Menampilkan hasil pegawai dengan gaji tertinggi.
- <script src="script.js">: Menghubungkan HTML dengan file JavaScript.
B. CSS (style.css)
- font-family: Mengatur jenis huruf.
- margin: Mengatur jarak di luar elemen.
- text-align: center: Memusatkan teks.
- width: 100%: Membuat tabel memenuhi lebar area yang tersedia.
- border-collapse: collapse: Menggabungkan garis batas sel tabel agar tidak tampak sebagai garis ganda.
- border: Memberikan garis tepi pada sel.
- padding: Memberikan ruang di dalam sel.
- background-color: Mengatur warna latar belakang tabel atau judul kolom.
- @media (max-width: 600px): Mengatur tampilan saat lebar layar maksimal 600 piksel.
C. JavaScript (script.js)
- const: Membuat variabel yang tidak dapat ditugaskan ulang.
- let: Membuat variabel yang nilainya dapat diubah.
- Array: Menyimpan beberapa data dalam satu kumpulan.
- Objek: Menyimpan informasi yang saling berhubungan, seperti nama, jabatan, dan gaji.
- for: Mengulang perintah untuk memproses setiap pegawai.
- if: Memeriksa kondisi tertentu.
- ===: Membandingkan nilai dan tipe data.
- >: Membandingkan apakah angka di kiri lebih besar daripada angka di kanan.
- +=: Menambahkan nilai ke variabel yang sudah ada.
- innerHTML: Memasukkan atau mengubah isi HTML suatu elemen.
- document.getElementById(): Memilih elemen HTML berdasarkan ID.
- .length: Mendapatkan panjang teks atau jumlah elemen array.
- toLocaleString("id-ID"): Mengubah angka menjadi teks dengan format angka Indonesia.
- Template literal `...`: Membuat teks yang dapat terdiri atas beberapa baris dan menyisipkan variabel menggunakan ${...}.
D. Rumus perhitungan gaji
- Pajak: Gaji Pokok × 10%.
- Tunjangan Manager: Gaji Pokok × 20%.
- Tunjangan jabatan lain: Rp0, sesuai ketentuan soal.
- Gaji Bersih: Gaji Pokok + Tunjangan − Pajak.
Contoh kode:
let pajak = gajiPokok * 0.10;

Kode tersebut menghitung pajak sebesar 10% dari gaji pokok.
if (jabatan === "Manager") {
    tunjangan = gajiPokok * 0.20;
}

Kode tersebut memberikan tunjangan 20% hanya jika jabatan pegawai adalah Manager.

Kesimpulan soal 4: HTML digunakan untuk membuat tabel, CSS untuk memperindah tabel, dan JavaScript untuk mengolah data serta melakukan perhitungan. Array dan objek menyimpan data pegawai, for memproses setiap data, sedangkan if digunakan untuk memeriksa jabatan dan menentukan gaji tertinggi.


SOAL 5 — FORMULIR PENDAFTARAN DENGAN BOOTSTRAP DAN JQUERY
Tujuan: Membuat formulir pendaftaran yang memiliki kolom nama, email, password, konfirmasi password, tombol Register, validasi, pesan kesalahan, dan modal keberhasilan.
A. HTML (index.html)
- <form>: Membuat formulir untuk memasukkan data.
- <label>: Memberikan keterangan pada kolom input.
- <input>: Membuat kolom untuk memasukkan data.
- type="text": Membuat kolom teks biasa.
- type="password": Membuat kolom password dengan karakter yang disamarkan.
- id: Memberikan identitas unik pada elemen.
- <button>: Membuat tombol.
- type="submit": Menjadikan tombol sebagai tombol pengiriman formulir.
- <div>: Membuat wadah untuk mengelompokkan elemen.
- <script>: Memuat atau menjalankan JavaScript.
- Bootstrap: Framework yang menyediakan kelas siap pakai untuk mempercepat pembuatan tampilan.
- CDN: Cara memuat file CSS atau JavaScript dari server eksternal melalui internet.
- Modal: Jendela yang muncul di atas halaman untuk menampilkan informasi, seperti pesan keberhasilan pendaftaran.
B. CSS (style.css)
- font-family: Mengatur jenis huruf.
- background-color: Mengatur warna latar belakang.
- max-width: Membatasi lebar maksimum formulir.
- padding: Memberikan ruang di dalam formulir.
- border-radius: Membuat sudut formulir membulat.
- box-shadow: Memberikan efek bayangan.
- width: 100%: Membuat tombol memenuhi lebar area yang tersedia.
C. Bootstrap
- container: Membuat wadah konten yang lebarnya menyesuaikan ukuran layar.
- mt-5: Memberikan jarak di bagian atas elemen.
- mb-3: Memberikan jarak di bagian bawah elemen.
- text-center: Membuat teks rata tengah.
- form-label: Memberikan gaya pada label formulir.
- form-control: Memberikan gaya pada kolom input.
- btn: Memberikan gaya dasar tombol.
- btn-primary: Memberikan gaya tombol utama.
- alert alert-danger: Membuat kotak pesan kesalahan.
- modal: Menandai komponen modal.
- modal-dialog: Mengatur wadah dialog modal.
- modal-content: Menampung isi modal.
- modal-body: Menampung pesan utama modal.
- modal-footer: Menampung bagian bawah modal.
D. JavaScript dan jQuery
- $(document).ready(): Menjalankan kode ketika struktur HTML siap dimanipulasi.
- $(): Fungsi jQuery untuk memilih elemen.
- $("#nama"): Memilih elemen dengan ID nama.
- .submit(): Menangani kejadian saat formulir dikirim.
- event.preventDefault(): Mencegah tindakan bawaan formulir, seperti memuat ulang halaman.
- .val(): Mengambil atau mengatur nilai kolom input.
- .trim(): Menghilangkan spasi di awal dan akhir teks.
- .includes("@"): Memeriksa apakah email mengandung tanda @.
- .length: Memeriksa panjang teks.
- !==: Memeriksa apakah dua nilai tidak sama.
- .html(): Mengubah atau memasukkan isi HTML ke dalam suatu elemen.
- if: Memeriksa apakah suatu syarat terpenuhi.
- new bootstrap.Modal(): Membuat objek modal Bootstrap.
- .show(): Menampilkan modal.
E. Aturan validasi formulir
- Nama tidak boleh kosong.
- Email harus mengandung tanda @, sesuai persyaratan soal.
- Password minimal enam karakter.
- Password dan konfirmasi password harus sama.
- Jika ada kesalahan, tampilkan pesan menggunakan alert alert-danger.
- Jika seluruh syarat terpenuhi, tampilkan modal keberhasilan.
Kesimpulan soal 5: HTML membuat struktur formulir, Bootstrap mempercepat pengaturan tampilan, CSS menyesuaikan desain, dan jQuery/JavaScript memeriksa data yang dimasukkan pengguna. Jika data tidak sesuai, pesan kesalahan ditampilkan. Jika semua syarat terpenuhi, modal keberhasilan muncul.




Fungsi Perintah Git dari Awal sampai Push ke GitHub
1. git init
- Fungsi: Membuat repositori Git di dalam folder proyek.
- Tujuan: Memulai penggunaan Git untuk mencatat perubahan file.
- Penggunaan: Saat pertama kali mengelola proyek menggunakan Git.
2. git status
- Fungsi: Memeriksa status file dalam repositori.
- Tujuan: Mengetahui file yang baru dibuat, diubah, atau siap di-commit.
- Penggunaan: Untuk memeriksa kondisi proyek sebelum melakukan perintah Git lainnya.
3. git add .
- Fungsi: Memasukkan perubahan file ke staging area.
- Tujuan: Menyiapkan file yang akan disimpan dalam commit.
- Penggunaan: Setelah membuat atau mengubah file proyek.
4. git add nama_file
- Fungsi: Menyiapkan file tertentu untuk di-commit.
- Tujuan: Memilih file yang ingin disimpan perubahannya.
- Penggunaan: Jika hanya ingin menambahkan satu file, misalnya index.html.
5. git commit -m "pesan"
- Fungsi: Menyimpan perubahan ke dalam riwayat Git lokal.
- Tujuan: Memberikan catatan tentang perubahan yang dilakukan.
- Penggunaan: Setelah menjalankan git add.
6. git log
- Fungsi: Menampilkan riwayat commit.
- Tujuan: Melihat perubahan yang sudah disimpan sebelumnya.
- Penggunaan: Saat ingin memeriksa riwayat pengerjaan proyek.
7. git log --oneline
- Fungsi: Menampilkan riwayat commit dalam bentuk ringkas.
- Tujuan: Mempermudah melihat daftar commit.
- Penggunaan: Saat ingin melihat riwayat tanpa tampilan panjang.
8. git branch
- Fungsi: Menampilkan daftar branch lokal.
- Tujuan: Mengetahui cabang yang tersedia dan branch yang sedang aktif.
- Penggunaan: Saat ingin memeriksa cabang pengerjaan proyek.
9. git branch -M main
- Fungsi: Mengganti nama branch aktif menjadi main.
- Tujuan: Menggunakan main sebagai nama branch utama.
- Penggunaan: Saat menyiapkan repositori baru.
10. git remote add origin URL
- Fungsi: Menambahkan alamat repositori GitHub sebagai remote.
- Tujuan: Menghubungkan repositori lokal dengan repositori online.
- Penggunaan: Saat pertama kali menghubungkan proyek ke GitHub.
11. git remote -v
- Fungsi: Menampilkan alamat remote yang tersimpan.
- Tujuan: Memeriksa alamat GitHub yang terhubung.
- Penggunaan: Saat ingin memastikan tujuan push sudah benar.
12. git remote set-url origin URL
- Fungsi: Mengubah alamat remote yang sudah ada.
- Tujuan: Memperbaiki atau mengganti alamat repositori GitHub.
- Penggunaan: Jika alamat remote sebelumnya salah.
13. git push -u origin main
- Fungsi: Mengirim commit lokal ke branch main di GitHub sekaligus mengatur hubungan pelacakan branch.
- Tujuan: Mengunggah perubahan proyek ke GitHub.
- Penggunaan: Saat melakukan push pertama untuk branch tersebut.
14. git push
- Fungsi: Mengirim commit lokal ke repositori remote yang sesuai.
- Tujuan: Memperbarui proyek di GitHub dengan perubahan terbaru.
- Penggunaan: Setelah melakukan perubahan dan commit berikutnya.
15. git pull origin main
- Fungsi: Mengambil dan menggabungkan perubahan dari branch main di GitHub ke branch lokal.
- Tujuan: Menyamakan proyek lokal dengan perubahan terbaru di GitHub.
- Penggunaan: Saat ada perubahan di GitHub yang belum tersedia di komputer.
16. git fetch origin
- Fungsi: Mengambil informasi dan commit terbaru dari repositori remote tanpa langsung menggabungkannya ke branch lokal.
- Tujuan: Memeriksa perubahan dari GitHub terlebih dahulu.
- Penggunaan: Saat ingin mengetahui perkembangan repositori online.
17. git clone URL
- Fungsi: Menyalin repositori GitHub ke komputer.
- Tujuan: Mengambil proyek yang sudah tersedia secara online.
- Penggunaan: Saat ingin mengunduh dan mengerjakan proyek dari GitHub.
18. git diff
- Fungsi: Menampilkan perbedaan perubahan kode yang belum di-stage.
- Tujuan: Memeriksa perubahan sebelum membuat commit.
- Penggunaan: Saat ingin mengetahui bagian kode yang berubah.
19. git diff --staged
- Fungsi: Menampilkan perbedaan perubahan yang sudah masuk staging area.
- Tujuan: Memeriksa perubahan yang akan dimasukkan ke commit.
- Penggunaan: Setelah menjalankan git add, sebelum git commit.
20. git restore nama_file
- Fungsi: Mengembalikan perubahan file yang belum di-stage ke versi sebelumnya.
- Tujuan: Membatalkan perubahan lokal yang tidak ingin dipertahankan.
- Penggunaan: Saat ingin mengembalikan file ke kondisi sebelumnya. Perubahan yang dibatalkan dapat hilang.
21. git restore --staged nama_file
- Fungsi: Mengeluarkan file dari staging area.
- Tujuan: Membatalkan persiapan commit tanpa menghapus perubahan pada isi file.
- Penggunaan: Jika file tidak sengaja dimasukkan menggunakan git add.
22. git rm --cached nama_file
- Fungsi: Menghapus file dari pelacakan Git tanpa menghapus file lokal.
- Tujuan: Mengeluarkan file dari repositori Git.
- Penggunaan: Saat ingin menghentikan pelacakan suatu file.
23. git config
- Fungsi: Mengatur konfigurasi Git.
- Tujuan: Menentukan identitas pembuat commit dan pengaturan Git lainnya.
- Penggunaan: Saat pertama kali menggunakan Git atau ketika perlu mengubah konfigurasi.
Contoh pengaturan nama dan email:
git config --global user.name "Nama Kamu"
git config --global user.email "email@example.com"

24. git switch main
- Fungsi: Berpindah ke branch main.
- Tujuan: Melanjutkan pengerjaan pada branch utama.
- Penggunaan: Saat proyek memiliki beberapa branch.
25. git switch -c nama_branch
- Fungsi: Membuat branch baru sekaligus berpindah ke branch tersebut.
- Tujuan: Memisahkan pengerjaan fitur baru dari branch utama.
- Penggunaan: Saat ingin mengembangkan fitur secara terpisah.
Urutan inti untuk push ke GitHub
Jika kamu ingin mengirim proyek baru ke GitHub, urutan dasarnya adalah:
1. git init — membuat repositori lokal.
2. git status — memeriksa kondisi file.
3. git add . — menyiapkan perubahan.
4. git commit -m "Pesan" — menyimpan perubahan.
5. git branch -M main — mengatur nama branch utama.
6. git remote add origin URL — menghubungkan ke GitHub.
7. git push -u origin main — mengirim commit ke GitHub.
Untuk push perubahan berikutnya, biasanya cukup menggunakan:
1. git status
2. git add .
3. git commit -m "Pesan perubahan"
4. git push
Inti yang perlu diingat:
- init = membuat repositori.
- status = memeriksa kondisi file.
- add = menyiapkan perubahan.
- commit = menyimpan riwayat perubahan.
- remote = mengatur koneksi ke GitHub.
- push = mengirim commit ke GitHub.
- pull = mengambil dan menggabungkan perubahan dari GitHub.
- clone = menyalin repositori dari GitHub ke komputer.



…or create a new repository on the command line
echo "# pswi-ut" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/agungds2007-max/pswi-ut.git
git push -u origin main


…or push an existing repository from the command line
git remote add origin https://github.com/agungds2007-max/pswi-ut.git


git branch -M main
git push -u origin main
git init
git status
git add .
git commit -m "Pesan commit"
git branch -M main
git remote add origin https://github.com/username/repository.git
git push -u origin main

git pull
git log
git remote -v
git checkout nama-branch
git checkout -b nama-branch
git merge nama-branch
git clone https://github.com/username/repository.git