export type StockData = {
    stockName: string;
    currentPrice: number;
    totalLot: number;
}

export class StockCalculator {
    readonly stockData: StockData;
    readonly stockName: string;
    readonly currentPrice: number;
    readonly totalLot: number;

    constructor(stockData: StockData) {
        this.stockData = stockData;
        this.stockName = stockData.stockName;
        this.currentPrice = stockData.currentPrice;
        this.totalLot = stockData.totalLot;
    }

    buyLot(lot: number): number {
        this.stockData.totalLot += lot;
        // console.log("you bought " + lot + " lots for " + rp(lot * this.currentPrice));
        return this.stockData.totalLot;
    }

    updatePrice(newPriceInLot: number) {
        this.stockData.currentPrice = newPriceInLot;
        // console.log("new price = " + rp(newPriceInLot));
        return this.stockData.currentPrice;
    }

    totalPrice(): number {
        return this.stockData.currentPrice * 100 * this.stockData.totalLot;
    }

    countLotShouldInvest(budget: number, monthVal: number): number {
        return Math.round(((budget * monthVal) - this.totalPrice()) / (this.stockData.currentPrice * 100));
    }

}
