import {getMonthDifference, Monthly, rp} from "./Helper";
import {VcaCalculator, StockData} from "./VcaFormula";

/************************
 * Author: [MR FERRY™]  *
 * September 2022       *
 ************************/

const DMAS: Readonly<StockData> = {
    stockName: "DMAS",
    currentUnitPrice: 1000,
    totalLot: 10,
    monthlyInvestTarget: 1000_000,
    since: {
        date: null,
        monthly: Monthly.SEPTEMBER,
        year: 2022,
    },
}
const BSSR: Readonly<StockData> = {
    stockName: "BSSR",
    currentUnitPrice: 1000,
    totalLot: 5,
    monthlyInvestTarget: 1_500_000,
    since: {
        date: null,
        monthly: Monthly.AUGUST,
        year: 2022,
    },
}
const MPMX: Readonly<StockData> = {
    stockName: "MPMX",
    currentUnitPrice: 1000,
    totalLot: 10,
    monthlyInvestTarget: 1_000_000,
    since: {
        date: null,
        monthly: Monthly.AUGUST,
        year: 2022,
    },
}
const TEST: Readonly<StockData> = {
    stockName: "TEST",
    currentUnitPrice: 5650,
    totalLot: 5,
    monthlyInvestTarget: 1_000_000,
    since: {
        date: null,
        monthly: Monthly.JUNE,
        year: 2022,
    },
}

function execute() {
    const stock: VcaCalculator = new VcaCalculator(TEST);
    const monthDifference: number = getMonthDifference(stock.sinceDate, new Date());
    const lotShouldInvest: number = stock?.countLotShouldInvest(stock.monthlyInvestTarget, monthDifference + 1);

    console.log(`saya berniat untuk investasi senilai ${rp(stock.monthlyInvestTarget)} perbulan pada saham ${stock?.stockName}`);
    console.log(`harga saat ini adalah ${rp(stock?.currentLotPrice)}`);
    console.log(`jumlah lot yang saya miliki dari ${(monthDifference)} bulan terakhir: ${stock?.totalLot} lot`);
    console.log(`total investasi yang saya miliki dari ${(monthDifference)} bulan terakhir: ${rp(stock?.totalPrice())}`);
    console.log(`sekarang bulan ke-${monthDifference + 1}`);
    console.log(`maka saya harus investasi sebanyak: ${lotShouldInvest} lot senilai ${rp(lotShouldInvest * stock?.currentLotPrice)}`);
    console.log(`lalu jumlah lot yang akan saya miliki menjadi: ${stock?.buyLot(lotShouldInvest)} lot`);
    console.log(`kemudian total investasi saya akan menjadi ${rp(stock?.totalPrice())}`);
}

execute();
