export function toSlug(chaine: String) : String{
    return chaine.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g,"")
            .replace(/[^a-z0-9\s-]/g,"")
            .trim()
            .replace(/\s+/g,"-")
            .replace(/-+/g,"-")
            .replace(/^-|-$/g, '');
    
}



