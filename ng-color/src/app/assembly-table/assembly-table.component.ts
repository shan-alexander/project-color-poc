import { SkillsService } from './../skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pc-assembly-table',
  templateUrl: './assembly-table.component.html',
  styleUrls: ['./assembly-table.component.css']
})
export class AssemblyTableComponent implements OnInit {
  skills = this._skills.skills;

  constructor( private _skills: SkillsService ) { }
  ngOnInit() {}

}
