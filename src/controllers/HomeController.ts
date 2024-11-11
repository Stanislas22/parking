
import { Context } from 'hono'



class HomeController{
    public static getHome(c:Context){
        return c.text ("Bienvenue dans l'application de gestion de parkings !");
    }
}



export default HomeController;

