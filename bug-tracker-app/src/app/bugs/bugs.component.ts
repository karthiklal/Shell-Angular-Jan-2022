import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bugOperations.service';
import { BugOperationsFactoryService, StorageType } from './services/bugOperationsFactory.service';
import { BugOperationsInterface } from './services/bugOperationsInterface';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  sortAttr : string = '';
  sortDesc : boolean = false;
  bugOperations : BugOperationsInterface;
  bugStorageType = StorageType;

  constructor(
    public bugOperationsFactory : BugOperationsFactoryService
    ) {
      this.bugOperations = this.bugOperationsFactory.getService(StorageType.Server)
  }

  ngOnInit(): void {
    
    this.bugOperations.load();
  }

  onBtnChangeSource(storageType : StorageType){
    this.bugOperations = this.bugOperationsFactory.getService(storageType);
    this.bugOperations.load();
  }
  onNewBugCreated(newBugName : string){
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

  
}
