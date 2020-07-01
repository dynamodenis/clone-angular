import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
