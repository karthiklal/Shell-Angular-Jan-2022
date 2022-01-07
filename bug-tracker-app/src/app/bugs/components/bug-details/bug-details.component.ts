import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'app-bug-details',
    templateUrl : './bug-details.component.html'
})
export class BugDetailsComponent implements OnInit {
    message : string = '';

    constructor(private router : ActivatedRoute){

    }
    ngOnInit(): void {
        this.router
            .params
            .subscribe(params => {
                this.message = `Bug details for bug [#${params['id']}] will be displayed here!`
                /* TODO : get the data from the server and display */
            })
    }


}