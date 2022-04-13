import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {

  constructor(
    private taskservice: TaskService,
    private route: ActivatedRoute,
  ) {}
  listId!:string



  ngOnInit(): void {
 
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];

    });
  }

  createNewTask(title: string) {
    this.taskservice.createTasks(this.listId, title).subscribe((response:any) => {
            console.log(response)
    })
  }
}
