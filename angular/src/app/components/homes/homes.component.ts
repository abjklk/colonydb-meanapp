import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ColonyService } from '../../services/colony.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  hno: String;
  owner: String;
  wing: String;
  floor: Number;
  size: Number;
  contact: String;
  
  status: String;
  colony: any;
  colonies: Array<Object>;
  
  constructor(private homeService: HomeService, private colonyService: ColonyService) {
    this.colonyService.getColonies().subscribe(doc =>{
      this.colonies = doc.colonies;
    });
    this.colony=[];
    this.wing="";
  }

  ngOnInit(): void {
  }


  addHome(){
      let home = {
        hno: this.hno,
        owner: this.owner,
        colony: this.colony.name,
        wing: this.wing,
        floor: this.floor,
        size: this.size,
        contact: this.contact,
      } 

      this.homeService.insertHome(home).subscribe(data =>{
        this.status = data.msg;
      });
    }
  }
