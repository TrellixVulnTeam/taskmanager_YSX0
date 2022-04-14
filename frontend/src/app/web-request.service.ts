import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly Root_Url;


  constructor(private http: HttpClient) {

    this.Root_Url = 'http://localhost:5000'

}

  get(uri:string) {

    return this.http.get(`${this.Root_Url}/${uri}`)

  }


  post(uri:string,payload:object) {

    return this.http.post(`${this.Root_Url}/${uri}`,payload)

  }

  put(uri:string,payload:object) {

    return this.http.put(`${this.Root_Url}/${uri}`,payload)

  }

  delete(uri:string) {

    return this.http.delete(`${this.Root_Url}/${uri}`);

  }

  login(email:string,password:string) {
    return this.http.post(`${this.Root_Url}/api/v1/login`, {
      email,
      password
    }, {
      observe:'response'
    });






  }





}

