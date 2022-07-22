import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  headers = ["EmpID", "Name", "Designation", "Gender", "Country"];

  rows = [
    {
      "EmpID" : "10456",
      "Name" : "Krishna",
      "Designation":"Clerk",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "EmpID" : "10457",
      "Name" : "Rachael",
      "Designation":"Analyst",
      "Gender" : "Female",
      "Country" : "London"
    },
    {
      "EmpID" : "10458",
      "Name" : "Adhithya",
      "Designation":"Manager",
      "Gender" : "Male",
      "Country" : "France"
    },
    {
      "EmpID" : "10459",
      "Name" : "Dhruv",
      "Designation":"Clerk",
      "Gender" : "Male",
      "Country" : "Belgium"
    },
    {
      "EmpID" : "10460",
      "Name" : "Mary",
      "Designation":"Programmer",
      "Gender" : "Female",
      "Country" : "Malaysia"
    },
    {
      "EmpID" : "10461",
      "Name" : "Kannan",
      "Designation":"Analyst",
      "Gender" : "Male",
      "Country" : "Switzerland"
    }
    
  ]


}
