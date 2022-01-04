import { Component } from "@angular/core";

@Component({
    selector : 'app-spinner',
    templateUrl : 'spinner.component.html',
})
export class SpinnerComponent{
    value : number = 0;
    delta : string = '';

    onBtnDecrementClick(){
        this.value = this.value - parseInt(this.delta);
    }

    onBtnIncrementClick(){
        this.value = this.value + parseInt(this.delta);
    }
}