export function rp(val: number) {
    return "Rp" + val?.toLocaleString("id-ID") ?? 0;
}

export function getMonthDifference(startDate: Date, endDate: Date) {
    return (
        endDate.getMonth() -
        startDate.getMonth() +
        12 * (endDate.getFullYear() - startDate.getFullYear())
    );
}

export enum Monthly {
    JANUARY = 1, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER
}

export type LocalDate = {
    readonly date: number | null;
    readonly monthly: Monthly;
    readonly year: number;
}
