import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TakeNoteComponent } from './components/take-note/take-note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { NoteComponent } from './components/note/note.component';
import { IconComponent } from './components/icon/icon.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { SearchComponent } from './components/search/search.component'
import { SearchPipe } from './pipe/search.pipe';
import { EditLabelComponent } from './components/edit-label/edit-label.component';
import { CropimageComponent } from './components/cropimage/cropimage.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { JwtModule } from "@auth0/angular-jwt";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { ResetPasswordComponent } from './components/reset-password/reset-password.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    TakeNoteComponent,
    DisplayNoteComponent,
    NoteComponent,
    IconComponent,
    UpdateNoteComponent,
    ArchiveComponent,
    TrashComponent,
    SearchComponent,
    SearchPipe,
    EditLabelComponent,
    CropimageComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule, FlexLayoutModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
    MatSnackBarModule, MatIconModule, MatMenuModule, MatDividerModule, MatSidenavModule,
    MatListModule, MatTooltipModule, MatDialogModule, MatAutocompleteModule,
    ImageCropperModule, MatDatepickerModule ,MatNativeDateModule,DragDropModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("token");
        }
      }
    })
    
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [UpdateNoteComponent, EditLabelComponent, CropimageComponent]
})
export class AppModule { }
