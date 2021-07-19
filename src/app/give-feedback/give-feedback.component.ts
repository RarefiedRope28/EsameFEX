import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProxyApiService } from '../proxy-api.service';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.scss']
})
export class GiveFeedbackComponent implements OnInit {

  constructor(private api: ProxyApiService, private route: Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.api.giveFeedBack(); // not yet implemented

    this.route.navigate(['/']);
  }

}
