import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGem } from '@fortawesome/free-regular-svg-icons';
import { faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faGem = faGem;
  faHome = faHome;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faPrint = faPrint;

  constructor() { }

  ngOnInit(): void {
  }

}
