import {rp} from "./Helper";

const nettSalary = 15_000_000;
const totalBalance = 316_934_690;
const totalRdn = 35_116_531;
const stockInvestedValueInYear = 66_204_789;

const investValue = countInvestValue();
const mutualFund = investValue / 3;
const stockValue = investValue - mutualFund;
const shouldInvest = remainingYearlyStock(totalBalance, totalRdn, stockInvestedValueInYear);

function remainingYearlyStock(allDana: number, totalRdn: number, stockInvestedValueInYear: number): number {
    let allDanaWithoutRdn = allDana - totalRdn;
    let totalShouldInvestInYear = (allDanaWithoutRdn + stockInvestedValueInYear) * 20 / 100;
    return totalShouldInvestInYear - stockInvestedValueInYear;
}

function countInvestValue(): number {
    return nettSalary * 20 / 100;
}

function countStockInvestedByMonth(val: number, monthVal: number): number {
    return val * monthVal;
}

function execute() {
    console.log("gaji saya sebulan = " + rp(nettSalary));
    console.log("saya perbulan harus investasi senilai " + rp(investValue));
    console.log("untuk bayar reksadana = " + rp(mutualFund));
    console.log("untuk bayar saham = " + rp(stockValue));
    console.log("sisa dana yang harus diinvestasikan = " + rp(shouldInvest));
}

