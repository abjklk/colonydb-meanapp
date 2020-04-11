import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ColonyService } from '../../services/colony.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  hno: number;
  owner: String;
  wing: String;
  floor: number;
  size: number;
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
    if (typeof this.owner == 'undefined' || typeof this.owner == 'undefined' || typeof this.owner == 'undefined' ||this.colony.length==0||this.wing==""||typeof this.contact == "undefined") {
      this.status = "Enter All Fields";
    }
    else if (isNaN(this.hno)){
      this.status = "X Improper House No.";
    }
    else if (isNaN(this.floor)){
      this.status = "X Improper Floor No.";
    }
    else if (isNaN(this.size)){
      this.status = "X Improper Size";
    }
    else{
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
  }
