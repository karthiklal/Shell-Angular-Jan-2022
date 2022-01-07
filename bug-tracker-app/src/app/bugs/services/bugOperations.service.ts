import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { BugStorageService } from "./bugStorage.service";
import { BugOperationsInterface } from './bugOperationsInterface';

@Injectable({
    providedIn: 'root'
})
//Using the BugStorage service (sync)
export class BugOperationsService implements BugOperationsInterface {

    public bugs : Bug[] = [];

    constructor(private bugStorage : BugStorageService){

    }
    
    createNew(newBugName : string)   {
        const newBug : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };
        this.bugStorage.save(newBug)
        this.bugs.push(newBug);
    }

    toggle(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
        this.bugStorage.save(bugToToggle);
    }

    remove(bug : Bug){
        this.bugStorage.remove(bug);
        this.bugs.splice(this.bugs.indexOf(bug), 1);
    }

    removeClosed(){
        for(let index = this.bugs.length-1; index >= 0; index--){
            let bug = this.bugs[index];
            if (bug.isClosed){
                this.bugStorage.remove(bug)
                this.bugs.splice(index, 1);
            }
        }
    }

    load(){
        this.bugs = this.bugStorage.getAll()
    }

}