import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { BugApiService } from "./bugApi.service";
import { BugOperationsInterface } from "./bugOperationsInterface";

@Injectable({
    providedIn: 'root'
})
//Using the BugApi service (async)
export class BugServerOperationsService implements BugOperationsInterface{

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