import { SkillsService } from './../skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pc-assembly-table',
  templateUrl: './assembly-table.component.html',
  styleUrls: ['./assembly-table.component.css']
})
export class AssemblyTableComponent implements OnInit {
  previousGeneratedBottleNeck: Array<string> = [];
  selectedSkill;

  zeSkills = this.generateRandomScenario(this._skills.skills);
  skills = this.generateRandomEditorDeficiencyBottleneck(this.zeSkills);


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

      mm = parseInt(sortingArraySplit[0], 10) - Math.round(parseInt(sortingArraySplit[0], 10) * Math.random());
      (mm < 10) ? mm = '0' + mm : mm = '' + mm;
      currentSkill.sorting = '' + hh + ':' + mm;

      currentSkill.editors = Math.round(Math.random() * 40);

      // currentSkill.potential = ( (Math.random() * 10) > 9 ) ? 0 : ( ((Math.random() * 10) > 8) ? currentSkill.editors +
      // Math.round(Math.random() * 0) : currentSkill.editors/2 + Math.round(Math.random() * 0) );
      currentSkill.forced = (Math.round(Math.random() * 100) > 5) ? 0 : Math.round(Math.random() * 10);
      currentSkill.idle = (Math.round(Math.random() * 100) > 10) ? 0 : Math.round(Math.random() * 10);
      // hours randomizing below
      // currentSkill.zeroHours = ((Math.random() * 100 > 10) ? 0 : Math.round(Math.random() * 50));
      currentSkill.twoHours = (Math.random() * 100 > 10) ?
        currentSkill.zeroHours : (currentSkill.zeroHours + (Math.round(Math.random() * 30)));
      currentSkill.fourHours = (Math.random() * 100 > 10) ?
        currentSkill.twoHours : (currentSkill.twoHours + (Math.round(Math.random() * 30)));
      currentSkill.eightHours = (Math.random() * 100 > 30) ?
        currentSkill.fourHours : (currentSkill.fourHours + (Math.round(Math.random() * 30)));
      currentSkill.twelveHours = (Math.random() * 100 > 75) ?
        currentSkill.eightHours : (currentSkill.eightHours + (Math.round(Math.random() * 150)));
      currentSkill.sixteenHours = (Math.random() * 100 > 75) ?
        currentSkill.twelveHours : (currentSkill.twelveHours + (Math.round(Math.random() * 150)));
      currentSkill.twentyFourHours = (Math.random() * 100 > 50) ?
        currentSkill.sixteenHours : (currentSkill.sixteenHours + (Math.round(Math.random() * 1000)));
      currentSkill.fourtyEightHours = (Math.random() * 100 > 50) ?
        currentSkill.twentyFourHours : (currentSkill.twentyFourHours + (Math.round(Math.random() * 1000)));
      currentSkill.seventyTwoHours = (Math.random() * 100 > 20) ?
        currentSkill.fourtyEightHours : (currentSkill.fourtyEightHours + (Math.round(Math.random() * 555)));
      currentSkill.timeInFutureSteps = 123 * Math.round(Math.random() * 10);
      }
    console.log('Skills array: ', skillsArr);
    return skillsArr;
  }

  generateRandomEditorDeficiencyBottleneck(skillsArr, selectedSkill?) {
    let randoSkill;
    if (!selectedSkill) {
      const rando = Math.floor(Math.random() * skillsArr.length);
      randoSkill = skillsArr[rando];
    } else {
      for (let i = 0; i < skillsArr.length; i++) {
        if (skillsArr[i].name === selectedSkill) {
          randoSkill = skillsArr[i];
          break;
        }
      }
    }
    console.log('Bottleneck generated on ' + randoSkill.name);
    this.setPreviousGeneratedBottleNeck(randoSkill.name);

    randoSkill.editors = Math.round(Math.random() * 10);
    randoSkill.assigned = Math.round(randoSkill.editors * (1.2 + Math.random()) );

    let hh: any = Math.round(Math.random() * 2.7);
      (hh < 10) ? hh = '0' + hh : hh = '' + hh;

    let mm: any = Math.round(Math.random() * 60);
      (mm < 10) ? mm = '0' + mm : mm = '' + mm;

    randoSkill.nextDeadline = '' + hh + ':' + mm;
    randoSkill.sorting = '-0' + (Math.round(Math.random() * 3)) + ':' + ( (mm > 10 && mm < 50) ?
      parseInt(mm, 10) + Math.round(Math.random() * 10) : mm);
    randoSkill.zeroHours = Math.round(Math.random() * 500);
    randoSkill.twoHours = randoSkill.zeroHours + Math.round(Math.random() * 300);
    randoSkill.fourHours = randoSkill.twoHours + Math.round(Math.random() * 300);
    randoSkill.eightHours = randoSkill.fourHours;
    randoSkill.twelveHours = randoSkill.eightHours;
    randoSkill.sixteenHours = randoSkill.twelveHours + Math.round(Math.random() * 200);
    randoSkill.twentyFourHours = randoSkill.sixteenHours;
    randoSkill.fourtyEightHours = randoSkill.sixteenHours;
    randoSkill.seventyTwoHours = randoSkill.sixteenHours + Math.round(Math.random() * 333);
    randoSkill.notAssigned = randoSkill.eightHours - randoSkill.assigned;
    randoSkill.pipeline = randoSkill.seventyTwoHours - randoSkill.assigned;
    console.log(randoSkill);
    return skillsArr;
  }

  setPreviousGeneratedBottleNeck(skillname) {
    this.previousGeneratedBottleNeck.push(skillname);
  }

  genNewBottleneck(name) {
    console.log(name);
    this.generateRandomEditorDeficiencyBottleneck(this.skills, name);
  }

  ui_sortIsRed(sortingString) {
    if (sortingString[0] === '-') {
      return true;
    } else {
      return false;
    }
  }
  ui_getBottleneckColor(skill, whichCol) {
    if (skill.name === 'Gender Detection') { console.log('Running bottleneck checker for ' + skill.name)}
    const val = skill[whichCol];
    const timeNeededForOnePe = val * (1 + skill.avgRej) * skill.avgIpt;
    const timeNeededForStep = timeNeededForOnePe / skill.editors;
    // first, check to see if timeNeededForStep
    const nextDeadlineSecs = this.convertTimeStringToSeconds(skill.nextDeadline);
    if (timeNeededForStep > nextDeadlineSecs) {
      // color orange -- legit bottleneck
      console.log('Strong Bottleneck on: ' + skill.name);
      return 'darkorange';
    } else if ( (timeNeededForStep / skill.potential) > nextDeadlineSecs) {
      // color red -- severe bottleneck
      console.log('Severe Bottleneck on: ' + skill.name);
      return 'red';
    }
    // then, check whichCol hour column
    const timeNeededPlusFutureSteps = timeNeededForStep + skill.timeNeededInFutureSteps;
    if (timeNeededPlusFutureSteps > nextDeadlineSecs) {
      // possible bottleneck: color yellow
      return 'gold';
    } else if (timeNeededPlusFutureSteps / skill.potential > nextDeadlineSecs) {
      // possible severe bottleneck: color dark yellow
      return 'goldenrod';
    }

  }

  convertTimeStringToSeconds(timeString) {
    if (timeString[0] === '-') {
      timeString.splice(0, 1);
    }
    let time = timeString.split(':');
    let hh = time[0];
    let mm = time[1];
    hh = hh * 60 * 60;
    mm = mm * 60;
    time = hh + mm;
    return time;
  }

  simulateHoursImageTemplates(skillsArr) {
    for (const skill of skillsArr) {
      skill.zeroHoursTemplate = skill.templates[(Math.floor(Math.random() * skill.templates.length))];
      let timeInFutureSteps = 0;
      const indexOfSkill = skill.zeroHoursTemplate.indexOf(skill.name);
      for (let i = (indexOfSkill + 1); i < skill.zeroHoursTemplate.length; i++) {
        const futureStep = skill.zeroHoursTemplate[i];
        const futureStepIpt = (skillsArr.find(obj => obj.name === skill.name)).avgIpt;
        timeInFutureSteps = timeInFutureSteps + futureStepIpt;
      }
      skill.zeroHoursTimeInFutureSteps = timeInFutureSteps;
    }
    console.log(skillsArr[0].zeroHoursTimeInFutureSteps);
  }

  // if editors and potential == 0, then potential is red

  highlightRowYellow(skillsArr) {
    for (let i = 0; i < skillsArr.length; i++) {
      const currentSkill = skillsArr[i];
      let val = currentSkill.zeroHours * (1 + currentSkill.avgRej) * currentSkill.avgIpt / currentSkill.editors;
      val = val * 2; // remove this line
    }
  }


}
