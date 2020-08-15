import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  costs=[600,500,400,300,200,100];
  rating=[5,4,3,2,1];
  categories=["DryFruits","Vegetables","Fruits","Pulses"];
  products=[{"img":"../../../assets/beverages.jpg","name":"Beverages","cost":"200$","offer":"No","stock":"plenty"},
  {"img":"../../../assets/beverages.jpg","name":"Beverages","cost":"200$","offer":"No","stock":"plenty"},
  {"img":"../../../assets/beverages.jpg","name":"Beverages","cost":"200$","offer":"No","stock":"plenty"},
  {"img":"../../../assets/beverages.jpg","name":"Beverages","cost":"200$","offer":"No","stock":"plenty"}]
  selected = 'option2';
  foods: Food[] = [
    {value: 'Vegetables-0', viewValue: 'Vegetables'},
    {value: 'Fruits-1', viewValue: 'Fruits'},
    {value: 'Pulses-2', viewValue: 'Pulses'}
  ];
}
