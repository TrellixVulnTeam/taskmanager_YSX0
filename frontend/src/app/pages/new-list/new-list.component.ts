import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  list:any

  constructor(private task:TaskService, private dailogRef:MatDialogRef<NewListComponent>) { }

  ngOnInit(): void {
    
  }

  createNewList(title:string) {
    this.task.createList(title).subscribe((response:any) => {
       console.log(response)
    })
    this.task.getList().subscribe((list:any) => {
      this.list = list



     })
    this.dailogRef.close()

  }


}
