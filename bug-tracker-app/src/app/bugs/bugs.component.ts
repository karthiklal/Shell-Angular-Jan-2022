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
    private bugOperations : BugOperationsService,
    private bugStorage : BugStorageService
    ) {

  }

  ngOnInit(): void {
    this.bugs = this.bugStorage.getAll();
  }

  onBtnAddNewClick(newBugName : string){
    const newBug = this.bugOperations.createNew(newBugName);
    this.bugStorage.save(newBug);
    this.bugs.push(newBug);
  }

  onBtnRemoveClick(bugToRemove : Bug){
    this.bugStorage.remove(bugToRemove);
    this.bugs.splice(this.bugs.indexOf(bugToRemove), 1);
  }

  onBugNameClick(bugToToggle : Bug){
    this.bugOperations.toggle(bugToToggle);
    this.bugStorage.save(bugToToggle);
  }

  onBtnRemoveClosedClick(){
    const closedBugs = this.bugs.filter(bug => bug.isClosed);
    closedBugs.forEach(bug => {
      this.bugStorage.remove(bug);
      this.bugs.splice(this.bugs.indexOf(bug), 1);
    });
  }

  getClosedCount(): number {
    return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
  }
}
