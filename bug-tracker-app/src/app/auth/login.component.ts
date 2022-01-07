import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./user.service";

@Component({
    selector : 'app-login',
    template : `
        <h3>Login</h3>
        <button (click)="login()">Login</button>
    `
})
export class LoginComponent{

    constructor(private userService : UserService, private router : Router){
        
    }
    login(){
        this.userService.login();
        this.router.navigate(['/bugs']);
    }
}