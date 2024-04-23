import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  fileContent = new BehaviorSubject<any>(null);
  fileContent$ = this.fileContent.asObservable();

  constructor(private http: HttpClient) {}

  readFileContent(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const fileContentString = e.target.result;

      try {
        // update the file content
        this.fileContent.next(fileContentString);
      } catch (error) {
        console.error('Error ', error);
      }
    };

    reader.onerror = () => {
      console.error('Error reading file content');
    };

    reader.readAsText(file);
  }

  downloadFile(projectSlug: string, eventName: string) {
    // this.http
    //   .get(`${environment.reportApiUrl}/xlsx/${projectSlug}/${eventName}`, {
    //     responseType: 'blob',
    //   })
    //   .subscribe((blob) => {
    //     // Create a new Blob object using the response data of the file
    //     const a = document.createElement('a');
    //     a.href = URL.createObjectURL(blob);
    //     a.download = `${projectSlug}_${eventName}.xlsx`; // A default filename if none is specified by headers
    //     a.click();
    //     URL.revokeObjectURL(a.href);
    //   });
  }
}
