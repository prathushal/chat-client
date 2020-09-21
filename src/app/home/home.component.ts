import { Component, OnInit } from '@angular/core';
import { ChatService, AuthenticationService } from '../_services';
import { User } from '../_models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService) { 
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
    this.currentUser = user;
    });
  }

  ngOnInit() {
  }

}
