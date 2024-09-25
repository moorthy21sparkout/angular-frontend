import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { single } from 'rxjs';
import { Message } from '../message/message.module';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  /**
   * The chat messages using the signal
   */
  // private messageSignal = single<Message[]>([]);


  // getMessage(){
  //   return this.messageSignal;
  // }

  // addMessage(message: Message){
  //   this.messageSignal.mutate((messages) =>{
  //     messages.push(message)
  //   } );
  // }
}
