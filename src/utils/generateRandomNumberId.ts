export function generateRandomNumberId(): number{
    const n = 100000 + Math.random()*900000;
    return Math.floor(n);
 }