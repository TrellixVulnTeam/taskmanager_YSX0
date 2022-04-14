import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute,Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewListComponent } from '../new-list/new-list.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css']
})
export class TaskviewComponent implements OnInit {
  list:any
  task:any
  id:any


  constructor(private taskService:TaskService, private route:ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('listId')

    this.route.params.subscribe(
      (params:Params) => {
        console.log(params);
        this.taskService.getTasks(this.id).subscribe((task) => {
          this.task = task
          console.log(task)
        })
      }
    )
    this.allTask()
    this.allList()


  }

  openDialog() {
    const dailogRef = this.dialog.open(NewListComponent);

    dailogRef.afterClosed().subscribe(result => {
      console.log(`The dailog box Closed`)
      // this.taskService.getList().subscribe((list:any) => {
      //   this.list = list


      //  })
      this.allTask()


    })


  }


  allTask() {
      this.taskService.getList().subscribe((list:any) => {
      this.list = list


     })

  }


  allList() {
    this.taskService.getTasks(this.id).subscribe((task:any) => {
      this.task = task
      console.log()
    })
  }


  openTask() {
    const dailogRef = this.dialog.open(NewTaskComponent);

  }



}
