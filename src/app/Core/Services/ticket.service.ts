import { Injectable } from '@angular/core';
import { Constants } from '../Constant/Constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  
    private baseUrlGetAll : string=Constants.API_URL_TICKET;
    constructor(private http: HttpClient) { } 
  
  createTicket(formData: FormData) {
    return this.http.post(this.baseUrlGetAll+'/api/Ticket',formData)
  }


}
