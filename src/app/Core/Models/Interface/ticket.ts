
export interface TicketCreateDto {
  titulo: string;
  descripcion: string;
  email:string;
  telefono:string;
  imagenes?: File[];
}