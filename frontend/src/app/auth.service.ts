import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private webService:WebRequestService, private router: Router) { }

  login(email:string,password:string) {
    this.webService.login(email,password).pipe(
      shareReplay(),
      tap((res:HttpResponse<any>) => {

        this.setSession(res.body._id)

      })
    )
  }


  private setSession(userId:string) {
    localStorage.setItem('user-id',userId)
  }
}
