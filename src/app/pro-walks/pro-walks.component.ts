import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pro-walks',
  templateUrl: './pro-walks.component.html',
  styleUrl: './pro-walks.component.css'
})
export class ProWalksComponent {

  RegionCode = "";





    Code = "";
    Lat  = "";
    Long = "";
    Area = "";
    Name = "";
    Population = ""









  constructor(public httpClient: HttpClient) {

  }

  GetAllRegionsURL = "https://localhost:7148/Regions/GetAllRegions";

  RegionsList: any = []
  ngOnInit(): void {
  }



  isButtonClicked = false;
  GetallRegions() {
    this.isButtonClicked = true;
    this.httpClient.get(this.GetAllRegionsURL).subscribe((data: any) => {
      this.RegionsList = data;
    });
  }

  GetAllRegionID() {
    // console.log(this.RegionCode);
    this.isButtonClicked = true;
    let getregionurlID = `https://localhost:7148/Regions/GetAllRegionsID/${this.RegionCode}`
    this.httpClient.get(getregionurlID).subscribe((data: any) => {
      data; // 1 record  . List of the value
      //       [ 1 record ]   //chat gpt  2 mins.

      var a1 = []; //empty baskst
      a1.push(data); //[1 record]
      this.RegionsList = a1;

      // regionsList i have configured to the ngfor always accept the array of values


      console.log(data);
    });
  }

  //  puublic string Code { get; set; }
  //  public string Name { get; set; }
  //  public double Area { get; set; }
  //  public double Lat { get; set; }
  //  public double Long { get; set; }
  //  public long population { get; set; }


  // "code": "string",
  // "name": "string",
  // "area": 0,
  // "lat": 0,
  // "long": 0,
  // "population": 0

  //https://localhost:7148/Regions/CreateRegions
  

  CreateRegion(){
    // console.log(this.Code); //
    // console.log(this.Population); //
    // console.log(this.Lat); //
    // console.log(this.Area);
    // console.log(this.Long); //
    // console.log(this.Name); // console.log(this.Code); //


    this.httpClient.post("https://localhost:7148/Regions/CreateRegion",{
      "code": this.Code,
      "name": this.Name,
      "area": this.Area,
      "lat": this.Lat,
      "long": this.Long,
      "population": this.Population
    }).subscribe(data=>{
      console.log(data);// "Good"
    })

  }

}

