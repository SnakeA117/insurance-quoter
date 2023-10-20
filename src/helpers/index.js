export function obtainDifferenceYear(year) {
        return new Date().getFullYear() - year;
}

export function calculateBrand(brand) {
    let increase;

    switch(brand) {
        case "1":
            increase = 1.3;
            break;

        case "2":
            increase = 1.15;
            break;

        case "3":
            increase = 1.05;
            break;

    }

    return increase
}

export function calculatePlan(plan){
    return (plan === "1") ? 1.2 : 1.5;
}

export function formatAmount(amount) {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: "USD",
    })
}