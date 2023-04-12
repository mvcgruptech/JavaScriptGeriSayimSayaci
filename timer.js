/*Geri Sayım sayacı Metin ÖZCAN tarafından yazılmıştır. */

//Bu İhale bitiş tarihi mesela
const zaman=new Date('April 12,2023 16:00:00').getTime();

function yeniYil(){

    //Buda şimdiki zaman oluyor
    const simdi=new Date().getTime();
    let fark=zaman-simdi;

    let saniye=1000;
    let dakika=saniye*60;
    let saat=dakika*60;
    let gun=saat*24;

    let g=Math.floor(fark/(gun));
    let s=Math.floor((fark%(gun))/saat);
    let m=Math.floor((fark%(saat))/dakika);
    let sn=Math.floor((fark%(dakika))/saniye);

    document.getElementById("gun").innerText=g<10?("0"+g):g;
    document.getElementById("saat").innerText=s<10?("0"+s):s;
    document.getElementById("dakika").innerText=m<10?("0"+m):m;
    document.getElementById("saniye").innerText=sn<10?("0"+sn):sn;
}

setInterval(function(){
    yeniYil();
},1000);