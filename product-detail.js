
/* DATA DUMMY PRODUK */

const product = {
    id: "PRD-001",
    name: "Laptop Lenovo ThinkPad",
    category: "Elektronik",
    price: "Rp3.500.000",
    condition: "Baik",
    location: "Jakarta Selatan",
    uploadDate: "20 November 2026",
    seller: "Andi Pratama",
    sellerStatus: "Mahasiswa Aktif",
    whatsapp: "6281234567890"
};


/*
SIMULASI STATUS PENGGUNA

Untuk mencoba:
"belum_login" = belum login
"mahasiswa" = mahasiswa aktif terverifikasi
"alumni" = alumni

Ganti nilainya untuk mencoba masing-masing kondisi.
*/

const currentUser = {
    status: "mahasiswa"
};


/* GALERI FOTO */

const mainPhoto = document.getElementById("mainPhoto");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedImage = button.dataset.image;

        mainPhoto.src = selectedImage;

        thumbnails.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

    });

});


/* MENAMPILKAN INFORMASI PRODUK DUMMY */

console.log("Detail Produk:", product);


/* ATURAN KONTAK PENJUAL */

const contactArea = document.getElementById("contactArea");

if (currentUser.status === "alumni") {

    contactArea.style.display = "none";

} else {

    contactArea.style.display = "block";

}

document.getElementById("contactButton").addEventListener("click", function() {

    if (currentUser.status === "belum_login") {

        alert("Silakan login terlebih dahulu untuk menghubungi penjual.");

    } else if (currentUser.status === "alumni") {

        alert("Maaf, alumni hanya dapat menjual barang.");

    } else if (currentUser.status === "mahasiswa") {

        const confirmation = confirm(
            "Kamu akan diarahkan ke WhatsApp penjual. Lanjutkan?"
        );

        if (confirmation) {
            window.open(
                "https://wa.me/" + product.whatsapp,
                "_blank"
            );
        }

    }

});


/* LAPORKAN PRODUK */

document.getElementById("reportButton").addEventListener("click", function() {

    if (currentUser.status === "belum_login") {

        alert("Silakan login terlebih dahulu untuk melaporkan produk.");

        return;

    }

    const reason = prompt(
        "Tuliskan alasan kamu melaporkan produk ini:"
    );

    if (reason && reason.trim() !== "") {

        alert(
            "Laporan berhasil disimulasikan. Terima kasih atas laporanmu."
        );

    } else if (reason !== null) {

        alert("Alasan laporan tidak boleh kosong.");

    }

});
