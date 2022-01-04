import { Component } from "@angular/core";

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html',
    styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
    message : string = '[Default greet message]';

    onBtnGreetClick(){
        this.message = 'greet button clicked';
    }
}