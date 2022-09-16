import {LocalDate} from "./Helper";

export type StockData = {
    readonly stockName: string;
    readonly currentUnitPrice: number;
    readonly totalLot: number;
    readonly monthlyInvestTarget: number;
    readonly since: LocalDate;
}

export class VcaCalculator {
    readonly stockName: string;
    readonly sinceDate: Date;
    currentLotPrice: number;
    totalLot: number;
    monthlyInvestTarget: number;

    constructor(stockData: StockData) {
        this.stockName = stockData.stockName;
        this.currentLotPrice = stockData.currentUnitPrice * 100;
        this.totalLot = stockData.totalLot;
        this.monthlyInvestTarget = stockData.monthlyInvestTarget;
        this.sinceDate = new Date(`${stockData.since.year}-${stockData.since.monthly}-${stockData.since.date ?? 1}`);
    }

    buyLot(lot: number): number {
        this.totalLot += lot;
        return this.totalLot;
    }

    updateUnitPrice(newUnitPrice: number) {
        this.currentLotPrice = newUnitPrice * 100;
        return this.currentLotPrice;
    }

    totalPrice(): number {
        return this.currentLotPrice * this.totalLot;
    }

    countLotShouldInvest(budget: number, monthTotal: number): number {
        return Math.round(((budget * monthTotal) - this.totalPrice()) / this.currentLotPrice);
    }

}
