import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
    transform(value: any, maxLength : number = 30) {
        return value.length <= maxLength ? value : value.substr(0,maxLength) + '...';
    }
}