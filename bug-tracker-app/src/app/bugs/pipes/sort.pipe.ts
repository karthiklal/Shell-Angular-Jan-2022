import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform {
    transform(list: Array<any>, attrName : string, isDesc : boolean = false) : Array<any> {
        if (!list || !list.length || !attrName) return list;
        const reverse = isDesc ? -1 : 1;
        list.sort((item1 : any, item2 : any) : number => {
            if (item1[attrName] === item2[attrName]) return 0;
            return (item1[attrName] < item2[attrName] ? -1 : 1) * reverse;
        });
        return list;
    }
}