import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AssemblyTableComponent } from './assembly-table/assembly-table.component';
import { ControlPanelComponent } from './assembly-table/control-panel/control-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AssemblyTableComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
