import { Component, OnInit } from '@angular/core';
import { ColonyService } from '../../services/colony.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  colonies: any;
  wings : any;
  wingCol : any;
  homes : any;
  dispColonies : boolean;
  dispWings : boolean;
  dispHomes : boolean;

  constructor(private colonyService: ColonyService, private homeService: HomeService) {
    this.colonyService.getColonies().subscribe(doc =>{
      this.colonies = doc.colonies;
    });
    this.dispColonies = true;
    this.dispWings = false;
    this.dispHomes = false;
   }

  ngOnInit(): void { }

  showWings(id){
    let req = {id: id}
    this.colonyService.getColonybyId(req).subscribe(doc => {
      this.wings = doc.colony.wings;
      this.wingCol = doc.colony.name;
    });
    this.dispWings = true;
    this.dispColonies = false;
  }

  showHomes(name, wing){
    let req = {colony: name, wing: wing}
    this.homeService.getHomesByColonyIdAndWing(req).subscribe(doc =>{
      this.homes = doc.homes;
    });
    this.dispHomes = true;
    this.dispWings = false;
  }

  goBack(){
    if(this.dispWings){
      this.dispColonies = !this.dispColonies;
      this.dispWings = !this.dispWings;  
    }
    else{
      this.dispWings=!this.dispWings;
      this.dispHomes=!this.dispHomes;
    }
  }
}

