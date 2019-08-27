import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteComponent } from './components/note/note.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { SearchComponent } from './components/search/search.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service'
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

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
    path : 'resetPassword/:token',
    component : ResetPasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: 'note',
        pathMatch: 'full',
        canActivateChild:[AuthGuard]
      },
      {
        path: 'note',
        component: NoteComponent,
        canActivateChild:[AuthGuard]
      },
      {
        path: 'archive',
        component: ArchiveComponent,
        canActivateChild:[AuthGuard]
      },
      {
        path: 'trash',
        component: TrashComponent,
        canActivateChild:[AuthGuard]
      },
      {
        path: 'search',
        component: SearchComponent,
        canActivateChild:[AuthGuard]
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
