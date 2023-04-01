import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      .subscribe(
        response => {
          if (response.success) {
            this.router.navigate(['/success']);
          } else {
            this.errorMessage = response.errors.file[0];
          }
        },
        error => {
          this.errorMessage = 'An error occurred while uploading your resume.';
        }
      );
  }
}