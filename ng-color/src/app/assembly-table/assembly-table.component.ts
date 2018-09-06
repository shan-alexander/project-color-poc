import { SkillsService } from './../skills.service';
import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pc-assembly-table',
  templateUrl: './assembly-table.component.html',
  styleUrls: ['./assembly-table.component.css']
})
export class AssemblyTableComponent implements OnInit {
  previousGeneratedBottleNeck: Array<string> = [];
  selectedSkill;

  skills = this.generateRandomEditorDeficiencyBottleneck(this.generateRandomScenario(this._skills.skills));
  editorsInputArrBool: Array<number>;
  buffer = 1.20;


  constructor( private _skills: SkillsService, private _ref: ChangeDetectorRef ) { }
  ngOnInit() {
      const arr: Array<number> = [];
      for (let i = 0; i < this.skills.length; i++) {
        arr.push(0);
      }
      this.editorsInputArrBool = arr;
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

      currentSkill.potential = ( (Math.random() * 10) > 9 ) ? 1 : ( ((Math.random() * 10) > 8) ? currentSkill.editors +
      Math.round(Math.random() * 0) : currentSkill.editors / 2 + Math.round(Math.random() * 0) );

      currentSkill.forced = (Math.round(Math.random() * 100) > 5) ? 0 : Math.round(Math.random() * 10);
      currentSkill.idle = (Math.round(Math.random() * 100) > 10) ? 0 : Math.round(Math.random() * 10);
      // hours randomizing below
      currentSkill.zeroHours = ((Math.random() * 100 > 10) ? 0 : Math.round(Math.random() * 50));
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
    console.log('generating bottleneck on: ' + name);
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
    const val = skill[whichCol];
    if (val) {
      const timeNeededForOnePe = val * (1 + skill.avgRej) * skill.avgIpt * this.buffer;
      const timeNeededForStep = timeNeededForOnePe / skill.editors;
      const colDeadlineSecs = this.convertColNameToSecs(whichCol); // example: "<4hr column" = 4 * 60 * 60
      if (timeNeededForStep > colDeadlineSecs) {
        return {
          'color': 'red',
          'fontWeight': 400
          };
      } else if ( skill.potential > 0 && (timeNeededForStep / skill.potential) > colDeadlineSecs) {
        return {
          'color': 'red',
          'fontWeight': 700
          };
      }
      const timeNeededPlusFutureSteps = timeNeededForStep + skill.timeNeededInFutureSteps;
      if (timeNeededPlusFutureSteps > colDeadlineSecs) {
        return {
          'color': 'darkorange',
          'fontWeight': 400
          };
      } else if (timeNeededPlusFutureSteps / skill.potential > colDeadlineSecs) {
        return {
          'color': 'darkorange',
          'fontWeight': 700
          };
      }
    }
  }

  convertColNameToSecs(colName) {
    let secs;
    if (colName === 'zeroHours') { secs = 1;
    } else if (colName === 'twoHours') {
      secs = 2 * 60 * 60;
    } else if (colName === 'fourHours') {
      secs = 4 * 60 * 60;
    } else if (colName === 'eightHours') {
      secs = 8 * 60 * 60;
    } else if (colName === 'twelveHours') {
      secs = 12 * 60 * 60;
    } else if (colName === 'sixteenHours') {
      secs = 16 * 60 * 60;
    } else if (colName === 'twentyFourHours') {
      secs = 24 * 60 * 60;
    } else if (colName === 'fourtyEightHours') {
      secs = 48 * 60 * 60;
    } else if (colName === 'seventyTwoHours') {
      secs = 72 * 60 * 60;
    }
    return secs;
  }

  ui_getEditorsNeeded(skill, whichCol) {
    const val = skill[whichCol];
    const timeNeededForOnePe = val * (1 + skill.avgRej) * skill.avgIpt;
    const editorsNeeded = Math.ceil(
      timeNeededForOnePe /
      this.convertColNameToSecs(whichCol)
    );
    return 'Estimated editors needed: ' + editorsNeeded;
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

  editEditors(index) {
    this.editorsInputArrBool[index] = 1;
  }
  saveEditors(index) {
    this.editorsInputArrBool[index] = 0;
    console.log('clicked save');
  }

  ui_startQueue() {
    const arr: Array<number> = [];
      for (let i = 0; i < this.skills.length; i++) {
        arr.push(0);
      }
      this.editorsInputArrBool = arr;
  }

  ui_resetQueue() {
    this.skills = this.generateRandomScenario(this.skills);
    this.previousGeneratedBottleNeck = [];
    console.log('reset');
  }
  ui_changeBuffer(val) {
    this.buffer = 1 + parseFloat(val);
    console.log('Buffer is now: ' + this.buffer);
  }

}
