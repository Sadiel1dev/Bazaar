export interface ICarrito {
    id:    string;
    items: IItem[];
}

export interface IItem {
    id:             number;
    name:           string;
    description:    string;
    price:          number;
    pictureUrl:     string;
    cantidad:       number;
    productTypeId:  number;
    productBrandId: number;
}
