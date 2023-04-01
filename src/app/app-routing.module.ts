import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserEmailComponent } from './components/user-email/user-email.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-email', component: UserEmailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
