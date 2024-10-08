import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //title = 'Growton_AngularHttp';

  constructor(public httpClient: HttpClient) {

  }

  bookmyShowUrl  = "https://in.bookmyshow.com/api/explore/v1/discover/regions";
  jsonplaceholderURL = "https://jsonplaceholder.typicode.com/posts";

  //Its automatically exectus when you load the component.
  output:any[] = [];
  ngOnInit(): void {
    this.httpClient.get(this.jsonplaceholderURL).subscribe((data: any) => {
      console.log("Madan" , data);
      this.output = data;  //array of objects
    });



    this.httpClient.get(this.bookmyShowUrl).subscribe((data: any) => {
      console.log("Keerthi-BookMyshow" , data);
      //this.output = data;  //array of objects
    });

  }



}
