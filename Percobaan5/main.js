$(document).ready(function () {

    $("#formRegistrasi").submit(function (event) {

        // Mencegah halaman dimuat ulang
        event.preventDefault();

        // Mengambil nilai input
        let nama = $("#nama").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val();
        let konfirmasi = $("#konfirmasi").val();

        // Menghapus pesan error sebelumnya
        $(".error-message").remove();
        $(".is-invalid").removeClass("is-invalid");

        let valid = true;

        // Validasi nama
        if (nama === "") {
            tampilkanError(
                "#nama",
                "#errorNama",
                "Nama lengkap tidak boleh kosong."
            );

            valid = false;
        }

        // Validasi email
        if (!email.includes("@")) {
            tampilkanError(
                "#email",
                "#errorEmail",
                "Email harus mengandung karakter @."
            );

            valid = false;
        }

        // Validasi password minimal 6 karakter
        if (password.length < 6) {
            tampilkanError(
                "#password",
                "#errorPassword",
                "Password minimal 6 karakter."
            );

            valid = false;
        }

        // Validasi konfirmasi password
        if (password !== konfirmasi) {
            tampilkanError(
                "#konfirmasi",
                "#errorKonfirmasi",
                "Konfirmasi password tidak sama."
            );

            valid = false;
        }

        // Jika seluruh data valid
        if (valid) {

            let modal = new bootstrap.Modal(
                document.getElementById("modalSukses")
            );

            modal.show();

            $("#formRegistrasi")[0].reset();
        }

    });

    // Fungsi untuk menampilkan pesan kesalahan
    function tampilkanError(input, tempat, pesan) {

        $(input).addClass("is-invalid");

        $(tempat).html(
            '<div class="alert alert-danger error-message">' +
            pesan +
            '</div>'
        );
    }

});