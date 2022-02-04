import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  

  constructor(private httpClient: HttpClient) {}
   
  Url=environment.baseUrl

  getAllAddressData(): Observable<any> {
    return this.httpClient.get(this.Url + "/get");
  }

  deleteAddress(id : any): Observable<any> {
    return this.httpClient.delete(this.Url + "/delete/"+id);
  }

  addAddressData(body: any): Observable<any> {
    return this.httpClient.post(this.Url+"/create", body);
  }

  updateAddressData(id: number, value: any): Observable<Object> {
    return this.httpClient.put(this.Url+"/update/"+id,value);
  }
}
