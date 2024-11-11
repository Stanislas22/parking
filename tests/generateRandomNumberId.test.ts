
import { generateRandomNumberId } from "../src/utils/generateRandomNumberId";


describe ("generateRandomNumberId",()=>{
    test("génère un nombre entier positif",()=>{
        const id = generateRandomNumberId();
        expect(id).toBeGreaterThan(0);
    });

    test("génère un nombre à 6 chiffres",()=>{
        const id = generateRandomNumberId();

        expect(id).toBeGreaterThanOrEqual(100000);
        expect(id).toBeLessThanOrEqual(999999);
    });

    test ("génère des nombres différents à chaque excécution",()=>{
        const id1 = generateRandomNumberId();
        const id2 = generateRandomNumberId();

        expect(id1).not.toBe(id2)
       
    });
});