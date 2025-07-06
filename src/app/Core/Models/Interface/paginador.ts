import { IProduct } from "./product";

export interface IPaginator {
    pagina:  number;
    tomados: number;
    total:   number;
    datos:   any[];
}
