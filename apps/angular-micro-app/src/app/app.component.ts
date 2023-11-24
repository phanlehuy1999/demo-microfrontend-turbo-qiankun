import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as JSZip from 'jszip';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-micro-app';

  constructor(private http: HttpClient) {
    this.http
      .get('http://localhost:4200/assets/test.json.zip', {
        responseType: 'blob',
      })
      .pipe(
        switchMap((blob) => new JSZip().loadAsync(blob) as any),
        switchMap((zipFile: any) => {
          const entry = zipFile.file('test.json');
          console.log(entry?.async('string'));
          // Crash after this line, async function fail
          return entry?.async('string');
        }),
        map((content: any) => JSON.parse(content)),
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
