import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-school-project',
  templateUrl: './school-project.component.html',
  styleUrls: ['./school-project.component.css']
})
export class SchoolProjectComponent {
  searchControl = new FormControl('');

  constructor(private http: HttpClient) {}

  search() {
    const name = this.searchControl.value;
    this.http.get(`https://api.example.com/users?name=${name}`).subscribe((res) => {
      console.log(res);
    });
  }
}
