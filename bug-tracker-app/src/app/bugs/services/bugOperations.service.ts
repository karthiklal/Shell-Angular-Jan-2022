import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { BugStorageService } from "./bugStorage.service";
import { BugApiService } from './bugApi.service';

@Injectable({
    providedIn: 'root'
})
//Using the BugApi service (async)
export class BugOperationsService{

    public bugs : Bug[] = [];

    constructor(private bugApi : BugApiService){

    }
    
    createNew(newBugName : string) {
        const newBugData : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };
        this.bugApi
            .save(newBugData)
            .subscribe(newBug => {
                this.bugs.push(newBug);
            })        
    }

    toggle(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
        this.bugApi
            .save(bugToToggle)
            .subscribe(toggledBug => {
                this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
            })
    }

    remove(bugToRemove : Bug){
        this.bugApi
            .remove(bugToRemove)
            .subscribe(() => {
                this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id )
            })
        
    }

    removeClosed(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.remove(closedBug))
    }

    load(){
        //this.bugs = this.bugStorage.getAll()
        this.bugApi
            .getAll()
            .subscribe(bugs => this.bugs = bugs);
    }

}

//Using the BugStorage service (sync)
/* export class BugOperationsService{

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

} */