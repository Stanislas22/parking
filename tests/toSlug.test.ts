import { toSlug } from "../src/utils/toSlug";


describe("toSlug",() =>{
    test("convertit une chaîne de caractère en slug",()=>{
        expect (toSlug("je suis un cas d'école")).toBe("je-suis-un-cas-decole");
    });

    test ("supprime les accents et les caractères spéciaux",()=>{
        expect (toSlug("Ecole de la vie !")).toBe("ecole-de-la-vie");
    });

    test("remplace les espaces par des tirets",()=>{
        expect(toSlug("Bonjour tout le monde")).toBe("bonjour-tout-le-monde");

    });
    
});