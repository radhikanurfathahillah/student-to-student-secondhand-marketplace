
/* MENGAMBIL ELEMEN HTML */

const uploadForm = document.getElementById("uploadForm");

const fotoInput = document.getElementById("foto");

const previewContainer =
    document.getElementById("previewContainer");

const summarySection =
    document.getElementById("summarySection");

const summaryContent =
    document.getElementById("summaryContent");

const closeSummary =
    document.getElementById("closeSummary");


/* MENAMPILKAN PREVIEW FOTO */

fotoInput.addEventListener("change", function() {

    previewContainer.innerHTML = "";

    const files = Array.from(this.files);

    // Maksimal 5 foto
    if (files.length > 5) {

        alert("Maksimal hanya boleh mengunggah 5 foto.");

        this.value = "";

        return;

    }

    // Memeriksa setiap foto
    for (const file of files) {

        const allowedTypes = [
            "image/jpeg",
            "image/png"
        ];

        // Memeriksa format
        if (!allowedTypes.includes(file.type)) {

            alert("Format foto harus JPG atau PNG.");

            this.value = "";
            previewContainer.innerHTML = "";

            return;

        }

        // Memeriksa ukuran maksimal 5 MB
        if (file.size > 5 * 1024 * 1024) {

            alert(
                "Ukuran setiap foto maksimal 5 MB."
            );

            this.value = "";
            previewContainer.innerHTML = "";

            return;

        }

    }

    // Menampilkan foto
    files.forEach(function(file) {

        const reader = new FileReader();

        reader.onload = function(event) {

            const previewItem = document.createElement("div");

            previewItem.className = "preview-item";

            const image = document.createElement("img");

            image.src = event.target.result;

            image.alt = "Preview " + file.name;

            const fileName = document.createElement("p");

            fileName.textContent = file.name;

            previewItem.appendChild(image);
            previewItem.appendChild(fileName);

            previewContainer.appendChild(previewItem);

        };

        reader.readAsDataURL(file);

    });

});


/* VALIDASI DAN SIMULASI UPLOAD */

uploadForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("namaBarang").value.trim();

    const kategori = document.getElementById("kategori").value;

    const harga = document.getElementById("harga").value;

    const kondisi = document.getElementById("kondisi").value;

    const lokasi = document.getElementById("lokasi").value.trim();

    const deskripsi = document.getElementById("deskripsi").value.trim();

    const whatsapp = document.getElementById("whatsapp").value.trim();

    const files = Array.from(fotoInput.files);


    // Validasi semua input
    if (
        !nama ||
        !kategori ||
        !harga ||
        !kondisi ||
        !lokasi ||
        !deskripsi ||
        !whatsapp
    ) {

        alert("Mohon lengkapi semua informasi produk.");

        return;

    }


    // Validasi harga
    if (Number(harga) <= 0) {

        alert("Harga harus lebih dari 0.");

        return;

    }


    // Validasi jumlah foto
    if (files.length < 1 || files.length > 5) {

        alert("Pilih minimal 1 dan maksimal 5 foto.");

        return;

    }


    // Validasi WhatsApp sederhana
    if (!/^[0-9]{10,15}$/.test(whatsapp)) {

        alert("Masukkan nomor WhatsApp yang valid, gunakan angka saja.");

        return;

    }


    // Membuat ringkasan produk
    summaryContent.replaceChildren();

    const productData = [
        ["Nama Barang", nama],
        ["Kategori", kategori],
        ["Harga", "Rp" + Number(harga).toLocaleString("id-ID")],
        ["Kondisi", kondisi],
        ["Lokasi", lokasi],
        ["Deskripsi", deskripsi],
        ["Jumlah Foto", files.length + " foto"],
        ["WhatsApp", whatsapp]
    ];

    productData.forEach(function(item) {

        const paragraph = document.createElement("p");

        const label = document.createElement("strong");

        label.textContent = item[0] + ": ";

        paragraph.appendChild(label);

        paragraph.appendChild(
            document.createTextNode(item[1])
        );

        summaryContent.appendChild(paragraph);

    });


    // Menampilkan ringkasan
    summarySection.hidden = false;

    summarySection.scrollIntoView({
        behavior: "smooth"
    });


    // Simulasi pengiriman
    alert(
        "Produk berhasil divalidasi dan disimulasikan " +
        "dikirim untuk moderasi admin!"
    );

});


/* MENUTUP RINGKASAN */

closeSummary.addEventListener("click", function() {

    summarySection.hidden = true;

});
