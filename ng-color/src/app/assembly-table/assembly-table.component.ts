import { SkillsService } from './../skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pc-assembly-table',
  templateUrl: './assembly-table.component.html',
  styleUrls: ['./assembly-table.component.css']
})
export class AssemblyTableComponent implements OnInit {
  skills = this.generateRandomScenario(this._skills.skills);

  constructor( private _skills: SkillsService ) { }
  ngOnInit() {
  }

  generateRandomScenario(skillsArr) {
    for (let i = 0; i < skillsArr.length; i++) {
      const currentSkill = skillsArr[i];
      currentSkill.pipeline = Math.random() * (Math.random() * 1300);
      currentSkill.notAssigned = currentSkill.pipeline - (currentSkill.pipeline * Math.random()) / 2;
      currentSkill.assigned = currentSkill.pipeline - (currentSkill.pipeline * Math.random()) / 2;
      // generate random numbers and conver to strings, ensure formatting
      let mm: any = Math.round(Math.random() * 60);
      (mm < 10) ? mm = '0' + mm : mm = '' + mm;
      currentSkill.longestWaitingTime = '00:' + mm;

      let hh: any = Math.round(Math.random() * 24);
      (hh < 10) ? hh = '0' + hh : hh = '' + hh;
      mm = Math.round(Math.random() * 60);
      (mm < 10) ? mm = '0' + mm : mm = '' + mm;
      currentSkill.nextDeadline = '' + hh + ':' + mm;

      const sortingArraySplit = currentSkill.nextDeadline.split(':');
      hh = parseInt(sortingArraySplit[0], 10) - Math.round(parseInt(sortingArraySplit[0], 10) * Math.random());
      (hh < 10) ? hh = '0' + hh : hh = '' + hh;
      currentSkill.sorting = '' + hh + ':' + Math.round(Math.random() * 60);

      currentSkill.editors = Math.round(Math.random() * 20);
    }
    return skillsArr;
  }

}
