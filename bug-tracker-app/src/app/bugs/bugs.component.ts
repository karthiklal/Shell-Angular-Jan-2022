import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bugOperations.service';
import { BugStorageService } from './services/bugStorage.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

 
  
  sortAttr : string = '';
  sortDesc : boolean = false;
  
  constructor(
    public bugOperations : BugOperationsService
    ) {

  }

  ngOnInit(): void {
    this.bugOperations.load();
  }

  onNewBugCreated(){
    console.log('a new bug is being created');
  }

  onBtnRemoveClick(bugToRemove : Bug){
    this.bugOperations.remove(bugToRemove);
  }

  onBugNameClick(bugToToggle : Bug){
    this.bugOperations.toggle(bugToToggle);
  }

  onBtnRemoveClosedClick(){
    this.bugOperations.removeClosed()
  }

  
}
