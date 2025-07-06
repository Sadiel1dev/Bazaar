import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Core/Constant/Constant';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-errortest',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './errortest.component.html',
  styleUrl: './errortest.component.css'
})
export class ErrortestComponent {
/**
 *
 */
constructor(private http:HttpClient) {
}

error500(){
  return this.http.get(Constants.API_URL+"/api/error/500");
}
error400(){
  return this.http.get(Constants.API_URL+"/api/error/400");
}
error404(){
  return this.http.get(Constants.API_URL+"/api/error/404");
}

}
