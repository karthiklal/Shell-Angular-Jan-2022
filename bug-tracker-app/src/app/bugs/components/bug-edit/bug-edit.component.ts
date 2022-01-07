import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { BugServerOperationsService } from "../../services/bugServerOperations.service";

@Component({
    selector : 'app-bug-edit',
    templateUrl : './bug-edit.component.html',
    styleUrls : ['./bug-edit.component.css']
})
export class BugEditComponent{

    @Output()
    onNewBug : EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private bugServerOperations : BugServerOperationsService,
        private router : Router
        ){

    }

    onBtnAddNewClick(newBugName : string){
        this.bugServerOperations.createNew(newBugName);
        //this.onNewBug.emit(newBugName);
        this.router.navigate(['/bugs']);
    }
}