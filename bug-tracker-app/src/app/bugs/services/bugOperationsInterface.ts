import { Bug } from "../models/bug";

export interface BugOperationsInterface {
    bugs : Bug[]
    createNew(bugName : string) : void
    load() : void
    removeClosed() : void
    toggle(bug : Bug) : void
    remove(bug : Bug) : void
}