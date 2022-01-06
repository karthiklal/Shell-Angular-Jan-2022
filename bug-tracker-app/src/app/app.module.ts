import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.compnent';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';

/* import { SortPipe } from './bugs/pipes/sort.pipe';
import { TrimTextPipe } from './bugs/pipes/trimText.pipe'; */
import { TrimTextPipe, SortPipe } from './bugs/pipes';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe,
    SortPipe,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
