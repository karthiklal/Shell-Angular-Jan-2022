import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  bugs : Array<Bug> = [];
  
  sortAttr : string = '';
  sortDesc : boolean = false;
  
  private storage : Storage = window.localStorage;

  private _currentBugId : number = 0;

  constructor() { }

  ngOnInit(): void {
    for(let index=0; index < this.storage.length; index++){
      let key = this.storage.key(index) || '',
        data = this.storage.getItem(key) || '',
        bug = JSON.parse(data);
        this.bugs.push(bug);
        this._currentBugId = this._currentBugId > bug.id ? this._currentBugId : bug.id;
    }
  }

  onBtnAddNewClick(newBugName : string){
    const newBug : Bug = {
      id : ++this._currentBugId,
      name : newBugName,
      isClosed : false,
      createdAt : new Date()
    };
    this.storage.setItem(newBug.id.toString(), JSON.stringify(newBug));
    this.bugs.push(newBug);
  }

  onBtnRemoveClick(bugToRemove : Bug){
    this.storage.removeItem(bugToRemove.id.toString());
    this.bugs.splice(this.bugs.indexOf(bugToRemove), 1);
  }

  onBugNameClick(bugToToggle : Bug){
    bugToToggle.isClosed = !bugToToggle.isClosed;
    this.storage.setItem(bugToToggle.id.toString(), JSON.stringify(bugToToggle));
  }

  onBtnRemoveClosedClick(){
    const closedBugs = this.bugs.filter(bug => bug.isClosed);
    closedBugs.forEach(bug => {
      this.storage.removeItem(bug.id.toString())
      this.bugs.splice(this.bugs.indexOf(bug), 1);
    });
  }

  getClosedCount(): number {
    //return this.bugs.filter(bug => bug.isClosed).length;
    return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
  }
}
