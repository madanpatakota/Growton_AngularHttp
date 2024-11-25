import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pro-walks',
  templateUrl: './pro-walks.component.html',
  styleUrl: './pro-walks.component.css'
})
export class ProWalksComponent {

  constructor(public httpClient: HttpClient) {

  }
  
  GetAllRegionsURL = "https://localhost:7148/Regions/GetAllRegions";

  RegionsList:any = []
  ngOnInit(): void {
  }



  isButtonClicked = false;
  GetallRegions(){
    this.isButtonClicked = true;
    this.httpClient.get(this.GetAllRegionsURL).subscribe((data: any) => {
      this.RegionsList = data;
    });
  }

}
