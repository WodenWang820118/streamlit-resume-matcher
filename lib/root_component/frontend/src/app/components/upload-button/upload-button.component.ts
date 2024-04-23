import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FileService } from '../../services/file.service';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-upload-button',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <button
      type="button"
      mat-raised-button
      style="margin-bottom: 1rem"
      (click)="fileInput.click()"
    >
      Upload
    </button>
    <input hidden (change)="onFileSelected($event)" #fileInput type="file" />
  `,
})
export class UploadButtonComponent {
  constructor(private fileService: FileService) {}
  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File | null = target.files?.[0] || null;
    if (file) {
      this.fileService.readFileContent(file);

      // TODO: should be dealing with different file types
      this.fileService.fileContent$
        .pipe(
          take(1),
          tap((data) => {
            if (data) {
              console.log('File content:', data);
            }
          })
        )
        .subscribe();
    }
  }
}
