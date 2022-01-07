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
@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    UtilsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
