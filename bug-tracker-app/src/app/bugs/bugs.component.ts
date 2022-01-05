import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  bugs : Array<Bug> = [
    {id : 10, name : 'Server communication failure', isClosed : false, createdAt : new Date()},
    {id : 11, name : 'User access denied', isClosed : true, createdAt : new Date()},
    {id : 12, name : 'Data integrity checks failed', isClosed : false, createdAt : new Date()},
    {id : 13, name : 'Application not responding', isClosed : true, createdAt : new Date()},
  ];
  
  sortAttr : string = '';
  sortDesc : boolean = false;
  
  private _currentBugId : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onBtnAddNewClick(newBugName : string){
    const newBug : Bug = {
      id : ++this._currentBugId,
      name : newBugName,
      isClosed : false,
      createdAt : new Date()
    };
    this.bugs.push(newBug);
  }

  onBtnRemoveClick(bugToRemove : Bug){
    this.bugs.splice(this.bugs.indexOf(bugToRemove), 1);
  }

  onBugNameClick(bugToToggle : Bug){
    bugToToggle.isClosed = !bugToToggle.isClosed;
  }

  onBtnRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed);
  }

  getClosedCount(): number {
    //return this.bugs.filter(bug => bug.isClosed).length;
    return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
  }
}
