import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChatService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public sendUser(name:string) {
        this.socket.emit('new-user', name);
    }

    public getUser = () => {
        return Observable.create((observer) => {
            this.socket.on('user-connected', (message) => {
                observer.next(message);
            });
        });
    }

    public sendMessage(message) {
        this.socket.emit('send-message', message);
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('message', (message) => {
                observer.next(message);
            });
        });
    }
}