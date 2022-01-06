import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector : 'app-bug-edit',
    templateUrl : './bug-edit.component.html',
    styleUrls : ['./bug-edit.component.css']
})
export class BugEditComponent{

    @Output()
    onNewBug : EventEmitter<string> = new EventEmitter<string>();

    onBtnAddNewClick(newBugName : string){
        this.onNewBug.emit(newBugName);
    }
}