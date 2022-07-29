import {rp} from "./Helper";

class StockData {
    stockName: string;
    currentPrice: number;
    totalLot: number;

    constructor(stockName: string, currentPrice: number, totalLot: number) {
        this.stockName = stockName;
        this.currentPrice = currentPrice;
        this.totalLot = totalLot;
        // console.log("initial price = " + rp(currentPrice));
    }

    buyLot(lot: number): number {
        this.totalLot += lot;
        // console.log("you bought " + lot + " lots for " + rp(lot * this.currentPrice));
        return this.totalLot;
    }

    updatePrice(newPriceInLot: number) {
        this.currentPrice = newPriceInLot;
        // console.log("new price = " + rp(newPriceInLot));
        return this.currentPrice;
    }

    totalPrice(): number {
        return this.currentPrice * this.totalLot;
    }

    countLotShouldInvest(budget: number, monthVal: number): number {
        return Math.round(((budget * monthVal) - this.totalPrice()) / this.currentPrice);
    }

}

const investTarget = 1_000_000;
const stock: StockData = new StockData("BBCA", 90_000, 18);
let nMonth: number = 3;

function execute() {
    let lotShouldInvest: number;

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
