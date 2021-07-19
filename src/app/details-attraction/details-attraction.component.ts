import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attraction } from '../models/Attraction';
import { ProxyApiService } from '../proxy-api.service';

@Component({
  selector: 'app-details-attraction',
  templateUrl: './details-attraction.component.html',
  styleUrls: ['./details-attraction.component.scss']
})
export class DetailsAttractionComponent implements OnInit {

  detailsAttraction = new Attraction;

  constructor(private api: ProxyApiService, private route: Router) { }

  ngOnInit(): void {
    this.api.getAttracionById(parseInt(location.href.substring(location.href.lastIndexOf('/') + 1))).subscribe(data => {
      this.detailsAttraction = data;
    });
  }

  navigate(){
    this.api.giveFeedBack(); // not yet implemented

    this.route.navigate(['/']);
  }

}
