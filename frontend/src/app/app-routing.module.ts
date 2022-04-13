import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskviewComponent } from './pages/taskview/taskview.component';

const routes: Routes = [
  {
    path: 'list',
    component: TaskviewComponent,
  },

  {
    path: '',
    component: TaskviewComponent,
  },

  {
    path: 'new-list',
    component: NewListComponent,
  },

  {
    path: 'list/:listId',
    component: TaskviewComponent,
  },

  {
    path:'list/:listId/new-task', component:NewTaskComponent
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
