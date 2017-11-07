import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    AuthenticationService
  ]
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService = authenticationService;
  }

  authenticate(): void {
    this.authenticationService.authenticate('pthelusma', 'terasuma1')
      .subscribe(result => {
        if (result === true) {
          console.log('Token', localStorage.getItem('currentUser'));
        } else {
          console.log('Token', 'Unavailable');
        }
      });
  }

  ngOnInit() {
    this.authenticate();
  }

}
