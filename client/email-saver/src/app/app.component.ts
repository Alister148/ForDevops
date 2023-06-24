import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'email-saver';
  fg = new FormGroup({
    email: new FormControl(['no value at the moment']),
  });
  constructor(private http: HttpClient) {
    this.http
      .get('http://localhost:80/getemailplaceholder')
      .subscribe((val) => {
        console.log(val);
        this.fg.patchValue({
          email: (val as any).email,
        });
      });
  }

  saveMyEMailIDToDB() {}
}
