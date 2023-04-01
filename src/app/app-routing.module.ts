import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeUploadSuccessComponent } from './components/resume-upload-success/resume-upload-success.component';
import { ResumeUploadComponent } from './components/resume-upload/resume-upload.component';
import { UserEmailComponent } from './components/user-email/user-email.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'submit-user-email', component: UserEmailComponent },
  { path: 'resume', component: ResumeUploadComponent },
  { path: 'upload-success', component: ResumeUploadSuccessComponent },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
