export class ProductParams {
    sort: string='priceAsc';
    skip: number=0;
    take: number=12;
    name: string | undefined;
    typeid: number | undefined;
}