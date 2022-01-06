import { Pipe, PipeTransform } from "@angular/core";
import { Bug } from "../models/bug";

@Pipe({
    name : 'closedCount',
    pure : false,
})
export class ClosedCountPipe implements PipeTransform {
    transform(list: Bug[], ...args: any[]) {
        return list.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}