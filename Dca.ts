import {rp} from "./Helper";

const investTarget = 1_000_000;
const currentPrice = 210_000;
const shouldInvest = Math.round(investTarget / currentPrice);

function execute() {

    console.log("saya berniat investasi senilai " + rp(investTarget) + " perbulan");
    console.log("bulan ini harga saham satu lot " + rp(currentPrice));
    console.log("untuk itu bulan ini saya akan investasi sebanyak " + shouldInvest + " lot senilai " + rp(shouldInvest * currentPrice));

}

execute();
