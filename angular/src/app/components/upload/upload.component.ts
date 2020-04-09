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

  constructor(private colonyService: ColonyService) { 
    this.sports = false;
    this.phc = false;
    this.pool = false;
  }

  ngOnInit(): void {
  }

  addColony(){
    if(isNaN(this.distance)){
      this.status = "X Improper Distance";
    }
    else{
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
