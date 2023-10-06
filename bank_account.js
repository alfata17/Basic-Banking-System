let saldo = 0;

function tambahSaldo() {
    const jumlahTambah = parseFloat(prompt("Masukkan jumlah uang yang ingin anda tambahkan"));
    if (!isNaN(jumlahTambah) && jumlahTambah > 0){
        const verTambah = prompt(`Anda yakin ingin menabung Rp${saldo} + Rp${jumlahTambah} ?\nKetikkan 'ya' atau 'tidak'`)
        if (verTambah == 'ya'){
            saldo += jumlahTambah;
            alert(`Saldo baru Anda adalah: Rp${saldo}`);
        } else {
            alert("Silahkan kembali ke menu awal!");
        } 
    } else {
        alert("Input tidak valid. Harap masukkan angka.");
    }
}

function kurangSaldo() {
    const jumlahKurang = parseFloat(prompt("Masukkan jumlah uang yang ingin anda tarik"));
    if (!isNaN(jumlahKurang) && jumlahKurang > 0){
        if (saldo >= jumlahKurang) {
            const verKurang = prompt(`Anda yakin ingin menarik Rp${saldo} - Rp${jumlahKurang} ?\nKetikkan 'ya' atau 'tidak'`)
            if (verKurang == 'ya'){
                saldo -= jumlahKurang;
                alert(`Saldo baru Anda adalah: Rp${saldo}`);
            } else {
                alert("Silahkan kembali ke menu awal!");
            } 
          } else {
            alert(`Saldo tidak cukup.\nSaldo anda sekarang: Rp${saldo}`);
          }
    } else {
        alert("Input tidak valid. Harap masukkan angka.");
    }
}

const tabung    = "Masukkan 'tabung' untuk menabung uang (++)";
const tarik     = "Masukkan 'tarik' untuk menarik uang (--)";
const cekSaldo  = "Masukkan 'cek saldo' untuk melihat saldo anda (??)";
const selesai   = "Masukkan 'selesai' untuk keluar!";

for (let i = 0; i < 3 ; i++) {
    let tujuan = prompt(`Halo Pemuda!\n${tabung}\n${tarik}\n${cekSaldo}\n\n${selesai}`);
    if (tujuan == 'tabung') {
        tambahSaldo(saldo);
        i = 0;
    } else if (tujuan == 'tarik'){
        kurangSaldo(saldo);
        i = 0;
    } else if (tujuan == 'cek saldo'){
        alert(`Jumlah saldo anda sekarang adalah Rp${saldo}`)
        i = 0;
    } else if (tujuan == 'selesai'){
        i = 5;
    } else {
        alert("Mohon masukkan keyword sesuai perintah!")
        i = 0;
    }
}

