import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import{NoteComponent} from './components/note/note.component';
import{ArchiveComponent} from './components/archive/archive.component';
import {TrashComponent} from './components/trash/trash.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: "",
        redirectTo:'note',
        pathMatch:'full'
      },
      {
        path:'note',
        component: NoteComponent
      },
      {
        path:'archive',
        component : ArchiveComponent
      },
      {
        path:'trash',
        component : TrashComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
