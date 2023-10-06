class bankAccount{ 
    constructor (nama, saldo){
        this.nama = nama,
        this.saldo = saldo
    }
    welcome(){
        console.log(`Selamat datang ${this.nama}`)
    }
    deposit(jumlahTambah) {
            if (!isNaN(jumlahTambah) && jumlahTambah > 0){
                const verTambah = prompt(`Anda yakin ingin menabung Rp${jumlahTambah} ?\nKetikkan 'ya' atau 'tidak'`)
                if (verTambah == 'ya'){
                    this.saldo += jumlahTambah;
                    alert(`Saldo baru Anda adalah: Rp${this.saldo}`);
                } else {
                    alert("Silahkan kembali ke menu awal!");
                } 
            } else {
                alert("Input tidak valid. Harap masukkan angka.");
            }
    }
    withdraw(jumlahKurang) {
            if (!isNaN(jumlahKurang) && jumlahKurang > 0){
                if (this.saldo >= jumlahKurang) {
                    const verKurang = prompt(`Anda yakin ingin menarik Rp${jumlahKurang} ?\nKetikkan 'ya' atau 'tidak'`)
                    if (verKurang == 'ya'){
                        this.saldo -= jumlahKurang;
                        alert(`Saldo baru Anda adalah: Rp${this.saldo}`);
                    } else {
                        alert("Silahkan kembali ke menu awal!");
                    } 
                  } else {
                    alert(`Saldo tidak cukup.\nSaldo anda sekarang: Rp${this.saldo}`);
                  }
            } else {
                alert("Input tidak valid. Harap masukkan angka.");
            }
    }
}

// const bankAccount = require('./bank_account');

class bankSystem extends bankAccount{
    constructor(nama, saldo, address){
        super(nama, saldo),
        this.address = address
    }
    Status(){
        alert(`Nama : ${this.nama}\nJumlah saldo : ${this.saldo}\nTempat tinggal : ${this.address}`);
    }
}
const Account = new bankSystem ("Ronal", 50000, "Ponorogo");

for (let i = 0; i < 3 ; i++) {
    let tujuan = prompt(`Halo Pemuda!\n\nSilahkan pilih menu di bawah!\n1.Deposit\n2.Withdraw\n3.Cek Status\n4.Keluar/Exit`);
    if (tujuan == 1) {
        let input = parseFloat(prompt("Masukkan jumlah uang yang ingin anda tambahkan"));
        setTimeout(Account.deposit(input),1500);
        i = 0;
    } else if (tujuan == 2){
        let input = parseFloat(prompt("Masukkan jumlah uang yang ingin anda tarik"));
        setTimeout(Account.withdraw(input),1500);
        i = 0;
    } else if (tujuan == 3){
        setTimeout(Account.Status(),1500);
        i = 0;
    } else if (tujuan == 4){
        i = 5;
    } else {
        alert("Mohon masukkan nomor menu!")
        i = 0;
    }
    setTimeout(1000)
}

