import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


//Angular basics - ngFor

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //title = 'Growton_AngularHttp';

  //http verbs  get , post , put , patch , delete // Main verbs

  constructor(public httpClient: HttpClient) {

  }

  bookmyShowUrl  = "https://in.bookmyshow.com/api/explore/v1/discover/regions";
  jsonplaceholderURL = "https://jsonplaceholder.typicode.com/posts";
  postsUrl = "http://localhost:3000/posts";


  studentsUrl = "http://localhost:5171/Students/GetStudentsAll";


  //did you test the api? postman then you will get the idea 

  //1 hour i come you are 


  //2nd person gives the api to the karthi




  //i will create my own end point....
  //i can get , create , update , delete


  //full stack developer

  //front+backend+db ==> fullstack

  //frontend developer

  //Its automatically exectus when you load the component.
  output:any[] = [];

  database:any[] = []
  ngOnInit(): void {

    //jsonplaceholder server
    // this.httpClient.get(this.jsonplaceholderURL).subscribe((data: any) => {
    //   console.log("Madan" , data);
    //   this.output = data;  //array of objects
    // });

    //bookmyshow
    // this.httpClient.get(this.bookmyShowUrl).subscribe((data: any) => {
    //   console.log("Keerthi-BookMyshow" , data);
    //   //this.output = data;  //array of objects
    // });

    // companylogo , role

    //http interceptor -->
    //own
    this.httpClient.get(this.postsUrl, {
      // headers : {
      //   'UserName1' : "Shashank",
      //   'UserName2' : "Siva",
      //   'Authorization' : "asfdbauifaiufgaufbnaksbfahsdbfasbdfiasfbasdbasb"
      // },
      // params : {
      //    'UserName1RoleID' : 'Admin',
      //    'UserName2RoleID' : 'Sales',
      // }
    }).subscribe((data: any) => {
      console.log("posts data....." , data);
      this.database = data;
      //this.output = data;  //array of objects
    });

  }



  // I want to create the new post(News)
  // YOu need to give the information

  btnCreate(){
    this.httpClient.post(this.postsUrl ,
        { "title": "Football Related News", "views": 20 }).subscribe((data: any) => {
      console.log("posts data....." , data);
      this.database = data;
      //this.output = data;  //array of objects
    });
  }

  updateUrl = "http://localhost:3000/posts/1";

  // post and put 

  // update(all) - patch(few)  patchwork(limited)

  // pan --> all the details wrong yourname

  btnUpdate(){
    this.httpClient.put(this.updateUrl,
      { "title": "Educational News", "views": 20 }).subscribe((data: any) => {
    console.log("posts data....." , data);
    this.database = data;
    //this.output = data;  //array of objects
  });

  }


//patch
  btnPatch(){
    this.httpClient.patch(this.updateUrl,
      { "title": "Political News" }).subscribe((data: any) => {
    console.log("posts data....." , data);
    this.database = data;
    //this.output = data;  //array of objects
  });

  }


//take the textbox enter the value

//Delete
deletedUrl = "http://localhost:3000/posts/5fd7"; //Dot' worry
btnDelete(){
  this.httpClient.delete(this.deletedUrl).subscribe((data: any) => {
  console.log("posts data....." , data);
  this.database = data;
  //this.output = data;  //array of objects
});
}

//Website


}
