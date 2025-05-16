import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule,MessagesComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // imports: [CommonModule, RouterModule, MessagesComponent],
})
export class AppComponent {
  title = 'Tour of Heroes';
}