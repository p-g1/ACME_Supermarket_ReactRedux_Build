const BOGOF = ["FR1"];
const MULTIBUY = [{code:"SR1", quantity:3, discountedPrice: 4.50}];


export const twoForOne = code => BOGOF.some(x => x === code);


export const multibuy = (code, quantity) => {
    return MULTIBUY[0].code === code && MULTIBUY[0].quantity <= quantity;
}

export const discountedPrice = MULTIBUY[0].discountedPrice;