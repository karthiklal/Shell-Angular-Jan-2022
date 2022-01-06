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

  bugs : Array<Bug> = [];
  
  sortAttr : string = '';
  sortDesc : boolean = false;
  
  constructor(
    private bugOperations : BugOperationsService
    ) {

  }

  ngOnInit(): void {
    this.bugOperations.load();
  }

  onBtnAddNewClick(newBugName : string){
    this.bugOperations.createNew(newBugName);
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

  getClosedCount(): number {
    return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
  }
}
