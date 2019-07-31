const BOGOF = ["FR1"];
const MULTIBUY = [{code:"SR1", quantity:3, fullPrice: 5.00, discountedPrice: 4.50}];


export const twoForOne = code => BOGOF.some(x => x === code);


export const multibuyAdd = (code, quantity) => {
    return MULTIBUY[0].code === code && MULTIBUY[0].quantity <= quantity;
}

export const multibuyRemove = (code, quantity) => {
    return MULTIBUY[0].code === code && MULTIBUY[0].quantity > quantity;
}

export const multibuyDiscountedPrice = MULTIBUY[0].discountedPrice;
export const multibuyFullPrice = MULTIBUY[0].fullPrice;