import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-ang-component',
  templateUrl: './ang-component.component.html',
  styleUrls: ['./ang-component.component.scss']
})
export class AngComponent implements OnInit {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient, private localStorage: LocalStorage) {}

  getApiData() {
  this.http.get(this.apiUrl).subscribe((response: any) => {
    console.log(response);
    // Store the response data in local storage
    this.localStorage.setItem('apiData', response).subscribe(() => {
      console.log('Data stored in local storage.');
    });
  });
}

  
ngOnInit() {
  // Get the data from local storage
  this.localStorage.getItem('apiData').subscribe((data: any) => {
    console.log(data);
  });
}

  
  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      console.log(data);
    });
  }

  postData() {
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    this.http.post('https://jsonplaceholder.typicode.com/posts', data).subscribe(data => {
      console.log(data);
    });
  }

  deleteData() {
    const id = 1;

    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe(data => {
      console.log(data);
    });
  }

}
