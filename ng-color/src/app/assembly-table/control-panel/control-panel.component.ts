import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'pc-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  @Input()
  skills: Array<object> = [];

  @Input()
  previouslyGeneratedBottleneck;

  @Output()
  selectedSkill: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectNewSkill(str) {
    this.previouslyGeneratedBottleneck = str;
    this.selectedSkill.emit(this.previouslyGeneratedBottleneck);
  }

}
