import { Component, OnInit } from '@angular/core';
import { ChatService, AuthenticationService } from '../_services';
import { User } from '../_models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string;
  messages: string[] = [];
  name: string;
  currentUser: User;
  currentUserSubscription: Subscription;
  
  constructor(private chatService: ChatService,  private authenticationService: AuthenticationService) { 
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.sendUser(this.currentUser.firstName);
    this.chatService
    .getUser()
    .subscribe((message: string) => {
      this.messages.push(message);
    });
  
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
      message["date"] = this.getDate();
      this.messages.push(message);
    });
    console.dir(this.messages);
  }
  
  sendUser(name: string) {
    this.chatService.sendUser(name);
    this.message = '';
  }
  
  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
  
  getDate() {
    return Date.now();
  }
  
}

