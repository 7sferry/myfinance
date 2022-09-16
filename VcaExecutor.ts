import {rp} from "./Helper";
import {StockCalculator, StockData} from "./VcaFormula";

/************************
 * Author: [MR FERRY™]  *
 * September 2022       *
 ************************/

const investTarget = 1_000_000;
const stockDmas: Readonly<StockData> = {
    stockName: "DMAS",
    currentPrice: 181,
    totalLot: 0,
}
let nMonth: number = 1;

function execute() {
    let lotShouldInvest: number;
    const stock: StockCalculator = new StockCalculator(stockDmas);

    console.log("saya berniat untuk investasi kurang lebih " + rp(investTarget) + " perbulan");
    console.log("saya akan membeli saham " + stock?.stockName);
    console.log("harga saat ini adalah " + rp(stock.currentPrice));
    console.log("jumlah lot yang saya miliki dari " + (nMonth - 1) + " bulan terakhir: " + stock.totalLot + " lot");
    console.log("total investasi yang saya miliki selama " + (nMonth - 1) + " bulan terakhir: " + rp(stock.totalPrice()));
    console.log("sekarang bulan ke-" + nMonth);
    lotShouldInvest = stock.countLotShouldInvest(investTarget, nMonth);
    console.log("maka saya harus investasi sebanyak: " + lotShouldInvest + " lot senilai " + rp(lotShouldInvest * stock.currentPrice));
    console.log("sekarang jumlah lot yang saya miliki: " + stock.buyLot(lotShouldInvest) + " lot");
    console.log("sekarang total investasi saya " + rp(stock.totalPrice()));

    // lotShouldInvest = stock.countLotShouldInvest(investTarget, 1);
    // console.log("should invest in this month = " + lotShouldInvest + " lot");
    // stock.buyLot(lotShouldInvest);

    // stock.updatePrice(110_000);
    // lotShouldInvest = stock.countLotShouldInvest(investTarget, 2);
    // console.log("should invest in this month = " + (lotShouldInvest) + " lot");
    // stock.buyLot(lotShouldInvest);
    //
    // stock.updatePrice(90_000);
    // lotShouldInvest = stock.countLotShouldInvest(investTarget, 3);
    // console.log("should invest in this month = " + (lotShouldInvest) + " lot");
    // stock.buyLot(lotShouldInvest);

}

execute();
