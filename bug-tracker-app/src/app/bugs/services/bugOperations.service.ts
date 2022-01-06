import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { BugStorageService } from "./bugStorage.service";

@Injectable({
    providedIn: 'root'
})
export class BugOperationsService{

    public bugs : Bug[] = [];

    constructor(private bugStorage : BugStorageService){

    }
    
    createNew(newBugName : string) : Bug {
        const newBug : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };
        this.bugStorage.save(newBug)
        this.bugs.push(newBug);
        return newBug;
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

    getClosedCount(): number {
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}