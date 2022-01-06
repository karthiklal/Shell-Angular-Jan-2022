import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';


interface Project{
    id : number,
    name : string
}


@Component({
    selector : 'app-projects',
    templateUrl : './projects.component.html'
})
export class ProjectsComponent implements OnInit {

    projects : Project[] = [];

    ngOnInit(): void {
        const project$ = this.httpClient
            .get<Project[]>('http://localhost:3000/projects');
        
        project$.subscribe(data => this.projects = data);
    }

    constructor(private httpClient : HttpClient){

    }

    onBtnAddNewClick(newProjectName : string){
        const newProjectData : Project = {
            id : 0,
            name : newProjectName
        };
        const newProject$ = this.httpClient
            .post<Project>('http://localhost:3000/projects', newProjectData);

        newProject$
            .subscribe(newProject => this.projects.push(newProject));
    }

    onBtnRemoveClick(projectToRemove : Project){
        const deleteProject$ = this.httpClient
            .delete(`http://localhost:3000/projects/${projectToRemove.id}`);
            
        deleteProject$.subscribe(() => this.projects.splice(this.projects.indexOf(projectToRemove), 1))
    }

}