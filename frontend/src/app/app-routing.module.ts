import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskviewComponent } from './pages/taskview/taskview.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReregisterComponent } from './pages/reregister/reregister.component';

const routes: Routes = [
  {
    path: 'list',
    component: TaskviewComponent,
  },

  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'register', component:ReregisterComponent
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
