import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  showChat = false; // Controla la visibilidad del chat

  toggleChat() {
    this.showChat = !this.showChat; // Alterna la visibilidad
  }
}
