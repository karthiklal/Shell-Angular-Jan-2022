import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//ES6 Modules
/* 
import * as calculator from './calc';
console.log(calculator); 
*/

/* 
import * as calculator from './calc';
console.log(calculator.add(100,200)) 
*/

/* 
import * as calculator from './calc';
const add = calculator.add;
console.log(add(100,200)); 
*/

/* 
import * as calculator from './calc';
const { add } = calculator;
console.log(add(100,200));  
*/


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
