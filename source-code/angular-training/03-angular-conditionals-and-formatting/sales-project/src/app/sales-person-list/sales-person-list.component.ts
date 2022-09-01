import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup","Kumar", "anup.kumar@luv2code.com", 50000),
    new SalesPerson("John","Doe", "john.doe@luv2code.com", 40000),
    new SalesPerson("Claire","Murphy", "claire.murphy@luv2code.com", 90000),
    new SalesPerson("Mai","Truong", "mai.truong@luv2code.com", 60000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
