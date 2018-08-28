import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AssemblyTableComponent } from './assembly-table/assembly-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AssemblyTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
