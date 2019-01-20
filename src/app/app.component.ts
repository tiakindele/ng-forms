import { Component } from '@angular/core';
import {formatDate } from '@angular/common';
import { Validators } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-forms';
  today = new Date();
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss', 'en-US');
  }

  userModel = new User(0, 8000, "5678BYNH", 2);
}
