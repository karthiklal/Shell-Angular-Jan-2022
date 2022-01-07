import { Injectable } from "@angular/core";
import { BugOperationsService } from "./bugOperations.service";
import { BugOperationsInterface } from "./bugOperationsInterface";
import { BugServerOperationsService } from "./bugServerOperations.service";

export enum StorageType {
    Local,
    Server
}

@Injectable({
    providedIn: "root"
})
export class BugOperationsFactoryService{
    constructor(
        private bugOperations : BugOperationsService, 
        private bugServerOperations : BugServerOperationsService){
    }
    getService(storageType : StorageType) : BugOperationsInterface{
        if (storageType === StorageType.Local){
            return this.bugOperations;
        } else {
            return this.bugServerOperations;
        }
    }
}