import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  bugs : Array<Bug> = [];
  
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
}
