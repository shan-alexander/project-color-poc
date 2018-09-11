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
  orangeFormula = false;


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

      currentSkill.editors = Math.round(Math.random() * 40);

      currentSkill.potential = ( (Math.random() * 10) > 9 ) ? 1 : ( ((Math.random() * 10) > 8) ? currentSkill.editors +
      Math.round(Math.random() * 0) : currentSkill.editors / 2 + Math.round(Math.random() * 0) );

      currentSkill.forced = (Math.round(Math.random() * 100) > 5) ? 0 : Math.round(Math.random() * 10);
      currentSkill.idle = (Math.round(Math.random() * 100) > 10) ? 0 : Math.round(Math.random() * 10);
      // hours randomizing below
      currentSkill.zeroHours = ((Math.random() * 100 > 2) ? 0 : Math.round(Math.random() * 50));
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
      if (currentSkill.seventyTwoHours === 0) {currentSkill.seventyTwoHours = Math.round(Math.random() * 500 ); }
      currentSkill.timeInFutureSteps = 123 * Math.round(Math.random() * 10);

      let lowerBound = null;
      let upperBound = null;

      if (currentSkill.zeroHours > 0 ) {lowerBound = 0; upperBound = 10; }
      else if ( currentSkill.twoHours > 0 ) { lowerBound = 0; upperBound = 2; }
      else if ( currentSkill.fourHours > 0 ) { lowerBound = 2; upperBound = 4; }
      else if ( currentSkill.eightHours > 0 ) { lowerBound = 4; upperBound = 8; }
      else if ( currentSkill.twelveHours > 0 ) { lowerBound = 8; upperBound = 12; }
      else if ( currentSkill.sixteenHours > 0 ) { lowerBound = 12; upperBound = 16; }
      else if ( currentSkill.twentyFourHours > 0 ) { lowerBound = 16; upperBound = 24; }
      else if ( currentSkill.fourtyEightHours > 0 ) { lowerBound = 24; upperBound = 48; }
      else if ( currentSkill.seventyTwoHours > 0 ) { lowerBound = 48; upperBound =  72; }

      let hh: any;
      hh = Math.round((Math.random() * (upperBound - lowerBound)) + lowerBound);
      (hh < 10) ? hh = '0' + hh : hh = '' + hh;
      mm = Math.round(Math.random() * 60);
      (mm < 10) ? mm = '0' + mm : mm = '' + mm;
      currentSkill.nextDeadline = '' + hh + ':' + mm;
      if (currentSkill.zeroHours > 0) {currentSkill.nextDeadline = '-' + currentSkill.nextDeadline; }

      const sortingArraySplit = currentSkill.nextDeadline.split(':');
      if (sortingArraySplit[0].charAt(0) === '-') {
        hh = Math.abs(parseInt(sortingArraySplit[0], 10)) + Math.round(Math.abs(parseInt(sortingArraySplit[0], 10)) * Math.random());
        (hh < 10) ? hh = '0' + hh : hh = '' + hh;
        hh = '-' + hh;
        mm = parseInt(sortingArraySplit[1], 10) + Math.round(parseInt(sortingArraySplit[1], 10) * Math.random());
        if (mm > 60) { mm = 59; }
        (mm < 10) ? mm = '0' + mm : mm = '' + mm;
      } else {
        hh = parseInt(sortingArraySplit[0], 10) - Math.round(parseInt(sortingArraySplit[0], 10) * Math.random());
        (hh < 10) ? hh = '0' + hh : hh = '' + hh;
        mm = parseInt(sortingArraySplit[1], 10) - Math.round(parseInt(sortingArraySplit[1], 10) * Math.random());
        (mm < 10) ? mm = '0' + mm : mm = '' + mm;
      }
        currentSkill.sorting = '' + hh + ':' + mm;
        currentSkill.notAssigned = currentSkill.seventyTwoHours * Math.random() * 0.5;
        currentSkill.assigned = (Math.random() > 0.9)
          ? currentSkill.editors * (Math.random() + 1) : currentSkill.editors * ((Math.random() + 1) * 3);
        currentSkill.pipeline = currentSkill.seventyTwoHours - (currentSkill.notAssigned + currentSkill.assigned);
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

  ui_timeStringIsRed(timeString) {
    if (timeString[0] === '-') {
      return true;
    } else {
      return false;
    }
  }

  ui_getBottleneckColor(skill, whichCol) {
    const val = skill[whichCol];
    if (val) {
      const timeNeededForOnePe = val * (1 + skill.avgRej) * skill.avgIpt * skill.skillBuffer;
      const timeNeededForStep = timeNeededForOnePe / skill.editors;
      const colDeadlineSecs = this.convertColNameToSecs(whichCol); // example: "<4hr column" = 4 * 60 * 60
      const timeNeededPlusFutureSteps = timeNeededForStep + skill.timeNeededInFutureSteps;
      let fontw = 400;
      if (timeNeededForStep > colDeadlineSecs) {
        if ( skill.potential > 0 && (timeNeededForStep / skill.potential) > colDeadlineSecs ) {
          fontw = 700;
        }
      return {
        'color': 'red',
        'fontWeight': fontw
        };
      } else if ( this.orangeFormula && timeNeededPlusFutureSteps > colDeadlineSecs) {
        if (timeNeededPlusFutureSteps / skill.potential > colDeadlineSecs) {
          fontw = 700;
        }
        return {
          'color': 'darkorange',
          'fontWeight': fontw
          };
      }
    }
  }

  convertColNameToSecs(colName) {
    let secs;
    if (colName === 'zeroHours') {
      secs = 1;
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
    const timeNeededForOnePe = val * (1 + skill.avgRej) * skill.avgIpt * skill.skillBuffer;
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

}
