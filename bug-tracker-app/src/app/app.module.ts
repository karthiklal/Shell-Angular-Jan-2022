import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.compnent';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';

import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { HttpClientModule } from '@angular/common/http';

import { ProjectsComponent } from './projects/projects.component';
import { BugOperationsService } from './bugs/services/bugOperations.service'
import { BugServerOperationsService } from './bugs/services/bugServerOperations.service';

import { RouterModule, Routes } from '@angular/router';
import { PathNotFoundComponent } from './pathNotFound.component';
import { HomeComponent } from './home.component';
import { BugDetailsComponent } from './bugs/components/bug-details/bug-details.component';
import { LoggedInGuard } from './auth/loggedInGuard';
import { LoginComponent } from './auth/login.component';

let routes : Routes = [
  {path : '', component : HomeComponent},
  {path : 'bugs', component : BugsComponent, canActivate : [LoggedInGuard] },
  {path : 'projects', component : ProjectsComponent},
  {path : 'add', component : BugEditComponent},
  {path : 'details/:id', component : BugDetailsComponent},
  {path : 'login', component : LoginComponent},
  {path : '**', component : PathNotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
    ProjectsComponent,
    PathNotFoundComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    UtilsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
