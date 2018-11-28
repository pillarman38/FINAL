import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from "../users-service.service";
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private userService:UsersServiceService, private router: Router) { }
  
  userForm: FormsModule;
  
  ngOnInit() {
    this.userForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  login() {
    this.userService.doLoggin(this.userForm).subscribe(
      res => console.log(res['success'], res['err'])
    )
  }
}
