import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.scss']
})
export class ResumeUploadComponent {

  resumeFile: File | null = null;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onFileSelected(event: any) {
    this.resumeFile = event.target.files[0];
  }

  onUpload() {
    const formData = new FormData();
    formData.append('resume', this.resumeFile!);

    this.http.post<{ success: boolean, errors: { file: string[] } }>('http://localhost:8000/api/upload_resume/', formData)
      .pipe(
        tap((response: any) => {
          if (!response.success) {
            throw new Error(response.errors.resumeFile[0]);
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
