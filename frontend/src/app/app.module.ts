import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MenubarModule } from 'primeng/menubar';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './shared/header/header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TaskviewComponent } from './pages/taskview/taskview.component';
import { AppRoutingModule } from './app-routing.module';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReregisterComponent } from './pages/reregister/reregister.component';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,

    TaskviewComponent,
    NewListComponent,
    NewTaskComponent,
    LoginPageComponent,
    ReregisterComponent,
  ],


  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,

    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    MatPasswordStrengthModule,

    MenubarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
