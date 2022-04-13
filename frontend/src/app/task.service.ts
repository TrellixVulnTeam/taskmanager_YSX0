import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/taskModels';

@Injectable({
  providedIn: 'root'
})



export class TaskService {


  constructor(private webService: WebRequestService) { }

  createList(title:string) {

    return this.webService.post('api/v1/list',{title})

  }

  getList(){
    return this.webService.get('api/v1/list')
  }

  getTasks(listId:string) {
    return this.webService.get(`api/v1/list/${listId}/task`)



  }

  createTasks(title:string,listId:string){
    return this.webService.post(`api/v1/list/${listId}/task`,{title})

  }
}
