import { Component, OnInit } from '@angular/core';
import { ColonyService } from '../../services/colony.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  name: String;
  wings: Array<String>;
  distance: number;
  secretary: String;
  contact: String;
  sports: Boolean;
  pool: Boolean;
  phc: Boolean;
  
  status : String;
  wingNum : number;

  constructor(private colonyService: ColonyService) { 
    this.sports = false;
    this.phc = false;
    this.pool = false;
    this.wings=[];
  }

  ngOnInit(): void {
  }

  addColony(){
    if (typeof this.name == 'undefined' || typeof this.wingNum == 'undefined' || typeof this.secretary == 'undefined'){
      this.status = "X Enter All Fields";
    }
    else if (isNaN(this.wingNum) || this.wingNum>26){
      this.status = "X Improper Wing #";
    }
    else if(isNaN(this.distance)){
      this.status = "X Improper Distance";
    }
    else{
      for (var i = 0; i < this.wingNum; i++) {
        this.wings.push((i+10).toString(36).toUpperCase());     
      }
      let colony = {
        name: this.name,
        wings: this.wings,
        distance: this.distance,
        secretary: this.secretary,
        contact: this.contact,
        sports: this.sports,
        pool: this.pool,
        phc: this.phc
      } 
      this.colonyService.insertColony(colony).subscribe(data =>{
        this.status = data.msg; 
      });
    }
  }
}
