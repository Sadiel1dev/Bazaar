import { ICarrito, IItem } from "../Interface/carrito";
import { v4 as uuidv4 } from 'uuid';
export class Carrito implements ICarrito {
    
    id: string = uuidv4();
    items: IItem[] = [];

    /**
     *
     */
    constructor() {
    }
    
}


