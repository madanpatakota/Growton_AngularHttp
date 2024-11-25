import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studetns-controller',
  templateUrl: './studetns-controller.component.html',
  styleUrl: './studetns-controller.component.css'
})
export class StudetnsControllerComponent implements OnInit {

  constructor(public httpClient: HttpClient) {

  }

  // 70%

  studentsUrl = "http://localhost:5171/Students/GetStudentsAll";

  skillsset    = "http://localhost:5171/Developer/GetSkillSet";

  students = [];
  skilsarray = []

  ngOnInit(): void {
    //bookmyshow
    this.httpClient.get(this.studentsUrl).subscribe((data: any) => {
      console.log("Students...." , data);
      this.students = data;
    });

    this.httpClient.get(this.skillsset).subscribe((data: any) => {
      console.log("Students....", data);
      this.skilsarray = data;
    });
  }

  

}
