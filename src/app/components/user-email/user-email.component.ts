import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-email',
  templateUrl: './user-email.component.html',
  styleUrls: ['./user-email.component.scss']
})
export class UserEmailComponent {

  email: string = "";
  errorMessage: string = "";

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(): void {
    this.http.post('http://localhost:8000/api/get_user_email/', { email: this.email })
      .pipe(
        tap((response: any) => {
          if (!response.success) {
            throw new Error(response.errors.email[0]);
          }
        }),
        catchError((error: any) => {
          this.errorMessage = error.message;
          return throwError(() => new Error(error))
        })
      )
      .subscribe(() => {
        this.router.navigate(['/resume']);
      });
  }

}
