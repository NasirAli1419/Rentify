import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentifyService } from 'src/app/services/rentify.service';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 0;
  properties: Array<IProperty>;

  constructor(private route:ActivatedRoute,private rentifyService:RentifyService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=1;
    }
    this.rentifyService.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
    },error=>{
      console.log(error);
    }
    );
  }

}
