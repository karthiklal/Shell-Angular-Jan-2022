import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Bug } from "../models/bug";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BugApiService{

    private serviceEndPoint: string = environment.serviceEndPoint;

    constructor(private http: HttpClient){

    }

    getAll() : Observable<Bug[]> {
        return this.http
            .get<Bug[]>(this.serviceEndPoint)
    }

    save(bugData : Bug) : Observable<Bug> {
        if (bugData.id === 0){
            return this.http
                .post<Bug>(this.serviceEndPoint, bugData)
        } else {
            return this.http
                .put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData)
        }
    }
    remove(bugData: Bug) : Observable<any> {
        return this.http
                .delete<any>(`${this.serviceEndPoint}/${bugData.id}`)
    }
}