import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  skills = [
    {
      name: 'Gender Detection',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 3.17,
      avgRej: 0.0000
    },
    {
      name: 'Background Detection',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 23.91,
      avgRej: 0.0043
    },
    {
      name: 'Contrast Against Background',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 39.38,
      avgRej: 0.0041
    },
    {
      name: 'Model Detection',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 11.88,
      avgRej: 0.0012
    },
    {
      name: 'Model Skin Area',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 20.23,
      avgRej: 0.0016
    },
    {
      name: 'Complexity Score',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 35.82,
      avgRej: 0.0065
    },
    {
      name: 'Mirror Detection',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 23.14,
      avgRej: 0.0031
    },
    {
      name: 'Hanger Detection',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 15.26,
      avgRej: 0.0008
    },
    {
      name: 'Props Detection',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 29.56,
      avgRej: 0.0028
    },
    {
      name: 'Rotate',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 35.64,
      avgRej: 0.0061
    },
    {
      name: 'Crop & Scale',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 58.80,
      avgRej: 0.0128
    },
    {
      name: 'Preparation',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 177.97,
      avgRej: 0.0488
    },
    {
      name: 'General Retouch',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 158.34,
      avgRej: 0.0434
    },
    {
      name: 'Generic Retouch',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 152.55,
      avgRej: 0.0552
    },
    {
      name: 'Retouch: Shape',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 163.71,
      avgRej: 0.0460
    },
    {
      name: 'Retouch: 3D',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 236.45,
      avgRej: 0.0580
    },
    {
      name: 'Retouch: Garments 1',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 134.29,
      avgRej: 0.0421
    },
    {
      name: 'Retouch: Garments 2',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 143.65,
      avgRej: 0.0487
    },
    {
      name: 'Retouch: Garments 3',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 208.92,
      avgRej: 0.0695
    },
    {
      name: 'Retouch: Footwear',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 231.28,
      avgRej: 0.0509
    },
    {
      name: 'Retouch: Jewelry',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 186.33,
      avgRej: 0.0743
    },
    {
      name: 'Retouch: Furniture',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 170.99,
      avgRej: 0.0426
    },
    {
      name: 'Retouch: Accessories',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 145.60,
      avgRej: 0.0418
    },
    {
      name: 'Retouch: Cosmetics',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 172.92,
      avgRej: 0.0544
    },
    {
      name: 'Retouch: Model',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 150.48,
      avgRej: 0.0456
    },
    {
      name: 'Retouch: Model Advanced',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 27,
      avgRej: 0.0000
    },
    {
      name: 'Qualification',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 264.29,
      avgRej: 0.0901
    },
    {
      name: 'Texture Replacement',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 458.56,
      avgRej: 0.0471
    },
    {
      name: 'Color Change',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 312.52,
      avgRej: 0.0801
    },
    {
      name: 'Dobby',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 389.64,
      avgRej: 0.1338
    },
    {
      name: 'New Path',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 336.57,
      avgRej: 0.0635
    },
    {
      name: 'Apply Path',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 63.06,
      avgRej: 0.0241
    },
    {
      name: 'Advanced Path',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 231.52,
      avgRej: 0.0660
    },
    {
      name: 'Trimap',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 92.42,
      avgRej: 0.0194
    },
    {
      name: 'New Layer Mask',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 336.57,
      avgRej: 0.0635
    },
    {
      name: 'AI Mask',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 266.30,
      avgRej: 0.0621
    },
    {
      name: 'Apply Layer Mask',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 124.03,
      avgRej: 0.0332
    },
    {
      name: 'Path & Mask',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 283.19,
      avgRej: 0.0644
    },
    {
      name: 'Apply Path & Mask',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 128.11,
      avgRej: 0.0309
    },
    { //Next in Line
      name: 'Advanced Mask',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Color Adjustment',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Background Retouch',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Dumbledore',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Snape',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Potter',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Weasley',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Granger',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Stack',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Duplicate and Flip',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'VPE Auto Stencil',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Stencil Manual',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Background Extension',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Hagrid',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Replace Object',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Shadow: Drop',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Shadow: Reflection',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Shadow: Natural',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Shadow: Cast',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Captain Hook',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Bumblebee',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Optimus',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'McQueen',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Mater',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Batman',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'The Flash',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Cyborg',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Automotive blending',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Divergence',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Burberry',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'PSS',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'Finalize',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
    {
      name: 'VPE Finalize',
      pipeline: 0,
      notAssigned: 1,
      assigned: 16,
      longestWaitingTime: '00:02',
      nextDeadline: '11:26',
      sorting: '08:45',
      editors: 1,
      potential: 19,
      forced: 0,
      idle: 0,
      freelancer: 0,
      zeroHours: 0,
      twoHours: 0,
      fourHours: 0,
      eightHours: 0,
      twelveHours: 161,
      sixteenHours: 161,
      twentyFourHours: 174,
      fourtyEightHours: 174,
      seventyTwoHours: 174,
      avgIpt: 93,
      avgRej: 0.0083
    },
  ];
}
