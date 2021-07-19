import { Component, OnInit } from '@angular/core';
import { Attraction } from '../models/Attraction';
import { ProxyApiService } from '../proxy-api.service';

@Component({
  selector: 'app-attractions-list',
  templateUrl: './attractions-list.component.html',
  styleUrls: ['./attractions-list.component.scss']
})
export class AttractionsListComponent implements OnInit {

  attractionsList: Attraction[] = [];

  constructor(private api: ProxyApiService) { }

  ngOnInit(): void {
    this.api.getAttractions().subscribe(data => {
      this.attractionsList = data;
      console.log(this.attractionsList);
    })
  }

}
