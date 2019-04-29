import { Component, OnInit } from '@angular/core';
import { DataUtil } from '../utils/data.util';
import { MathUtil } from '../utils/math.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  display = false;
  errMsgs = '';
  questions = DataUtil.questions;
  scores = DataUtil.scores;
  bodyTypes = DataUtil.bodyTypes;
  typeResults = DataUtil.typeResults;
  constructor() { }

  ngOnInit() {

  }

  getResult() {
    // 计算气虛质 2 3 4 14
    if (!this.questions[1].score
      || !this.questions[2].score
      || !this.questions[3].score
      || !this.questions[13].score) {
      this.errorTips('计算气虚质出现异常，请检查2，3，4，14行是否勾选！');
      return;
    }
    this.bodyTypes[0].score = this.questions[1].score.value
      + this.questions[2].score.value
      + this.questions[3].score.value
      + this.questions[13].score.value;

    // 计算阳虚质 11 12 13 29
    if (!this.questions[10].score
      || !this.questions[11].score
      || !this.questions[12].score
      || !this.questions[28].score) {
      this.errorTips('计算阳虚质出现异常，请检查11，12，13，29行是否勾选！');
      return;
    }
    this.bodyTypes[1].score = this.questions[10].score.value
      + this.questions[11].score.value
      + this.questions[12].score.value
      + this.questions[28].score.value;

    // 计算阴虚质 10 21 26 31
    if (!this.questions[9].score
      || !this.questions[20].score
      || !this.questions[25].score
      || !this.questions[30].score) {
      this.errorTips('计算阴虚质出现异常，请检查10，21，26，31行是否勾选！');
      return;
    }
    this.bodyTypes[2].score = this.questions[9].score.value
      + this.questions[20].score.value
      + this.questions[25].score.value
      + this.questions[30].score.value;

    // 计算痰湿质 9 16 28 32
    if (!this.questions[8].score
      || !this.questions[15].score
      || !this.questions[27].score
      || !this.questions[31].score) {
      this.errorTips('计算痰湿质出现异常，请检查9，16，28，32行是否勾选！');
      return;
    }
    this.bodyTypes[3].score = this.questions[8].score.value
      + this.questions[15].score.value
      + this.questions[27].score.value
      + this.questions[31].score.value;

    // 计算湿热质 23 25 27 30
    if (!this.questions[22].score
      || !this.questions[24].score
      || !this.questions[26].score
      || !this.questions[29].score) {
      this.errorTips('计算湿热质出现异常，请检查23，25，27，30行是否勾选！');
      return;
    }
    this.bodyTypes[4].score = this.questions[22].score.value
      + this.questions[24].score.value
      + this.questions[26].score.value
      + this.questions[29].score.value;

    // 计算血淤质 19 22 24 33
    if (!this.questions[18].score
      || !this.questions[21].score
      || !this.questions[23].score
      || !this.questions[32].score) {
      this.errorTips('计算血淤质出现异常，请检查19，22，24，33行是否勾选！');
      return;
    }
    this.bodyTypes[5].score = this.questions[18].score.value
      + this.questions[21].score.value
      + this.questions[23].score.value
      + this.questions[32].score.value;

    // 计算气郁质 5 6 7 8
    if (!this.questions[4].score
      || !this.questions[5].score
      || !this.questions[6].score
      || !this.questions[7].score) {
      this.errorTips('计算气郁质出现异常，请检查5，6，7，8行是否勾选！');
      return;
    }
    this.bodyTypes[6].score = this.questions[4].score.value
      + this.questions[5].score.value
      + this.questions[6].score.value
      + this.questions[7].score.value;

    // 计算特禀质 15 17 18 20
    if (!this.questions[14].score
      || !this.questions[16].score
      || !this.questions[17].score
      || !this.questions[19].score) {
      this.errorTips('计算特禀质出现异常，请检查15，17，18，20行是否勾选！');
      return;
    }
    this.bodyTypes[7].score = this.questions[14].score.value
      + this.questions[16].score.value
      + this.questions[17].score.value
      + this.questions[19].score.value;

    // 计算平和质 1 2 4 5 13
    if (!this.questions[0].score
      || !this.questions[1].score
      || !this.questions[3].score
      || !this.questions[4].score
      || !this.questions[12].score) {
      this.errorTips('计算平和质出现异常，请检查1，2，4，5, 13行是否勾选！');
      return;
    }
    this.bodyTypes[8].score = this.questions[0].score.value
      - this.questions[1].score.value
      - this.questions[3].score.value
      - this.questions[4].score.value
      - this.questions[12].score.value
      + 24;

    this.bodyTypes.map((item) => {
      if (item.score >= 11) {
        item.result = this.typeResults[0];
      } else if (item.score > 8) {
        item.result = this.typeResults[1];
      } else {
        item.result = this.typeResults[2];
      }
    });
    const r1 = this.bodyTypes[0].score;
    const r2 = this.bodyTypes[1].score;
    const r3 = this.bodyTypes[2].score;
    const r4 = this.bodyTypes[3].score;
    const r5 = this.bodyTypes[4].score;
    const r6 = this.bodyTypes[5].score;
    const r7 = this.bodyTypes[6].score;
    const r8 = this.bodyTypes[7].score;
    const r9 = this.bodyTypes[8].score;

    if (r1 < 8 && r2 < 8 && r3 < 8 && r4 < 8 && r5 < 8 && r6 < 8 && r7 < 8 && r8 < 8 && r9 >= 17) {
      this.bodyTypes[8].result = this.typeResults[0];
    } else if (r1 < 10 && r2 < 10 && r3 < 10 && r4 < 10 && r5 < 10 && r6 < 10 && r7 < 10 && r8 < 10 && r9 >= 17) {
      this.bodyTypes[8].result = this.typeResults[1];
    } else {
      this.bodyTypes[8].result = this.typeResults[2];
    }
  }

  errorTips(message) {
    this.display = true;
    this.errMsgs = message;
  }

  /**
   * 自动勾选每项分数
   */
  backFillData() {
    // 第一步，随机生成各项体质分数，自动回填 体质区间[4, 8][5, 8] 否， (8, 11) 基本是, [11, 20][11, 25] 是
    this.bodyTypes.map((item, index) => {
      const obj = this.returnTypeResult(item, index);
      this.backFillQuestionAndBody(obj, item, index);
      if (item.score >= 11 && index !== 8) {
        item.result = this.typeResults[0];
      } else if (item.score > 8 && index !== 8) {
        item.result = this.typeResults[1];
      } else if (index !== 8) {
        item.result = this.typeResults[2];
      }
    });
  }

  /**
   * 根据选择的结果，自动生成分数
   * @param index
   * @param item
   */
  returnTypeResult(item, index): number {
    if (!this.bodyTypes[8].result) {
      this.display = true;
      this.errMsgs = '请选择平和质结果!';
      return;
    }
    const pingheValue = this.bodyTypes[8].result.value;
    // 如果平和质选择是，那么其余体质均为否
    if (pingheValue === 2) {
      if (index < 8 ) {
        let obj = this.generateObj(index);
        obj = this.generateRandomNumber(index, 4, 8, obj);
        return obj;
      } else {
        let obj = this.generateObj(index);
        obj = this.generateRandomNumber(index, 17, 25, obj);
        return obj;
      }
    } else if (pingheValue === 1) {
      if (index < 8 ) {
        let obj = this.generateObj(index);
        obj = this.generateRandomNumber(index, 8, 10, obj);
        return obj;
      } else {
        let obj = this.generateObj(index);
        obj = this.generateRandomNumber(index, 17, 25, obj);
        return obj;
      }
    } else if (pingheValue === 0) {
      if (index < 8 ) {
        let obj = this.generateObj(index);
        obj = this.generateRandomNumber(index, 10, 20, obj);
        return obj;
      } else {
        let obj = this.generateObj(index);
        obj = this.generateRandomNumber(index, 5, 17, obj);
        return obj;
      }
    }


  }


  generateRandomNumber(index, min, max, obj) {
    const values = Object.values(obj);
    let fixedCount = 0;
    let unFixedCount = 0;
    let fixedValue = 0;

    values.forEach(item => {
      if (item) {
        fixedValue = fixedValue + parseInt(item.toString(), 10);
        fixedCount++;
      }
    });
    unFixedCount = values.length - fixedCount;
    if (unFixedCount === 0 ) {
      return obj;
    }

    if (index !== 8) {
      if ((fixedValue + unFixedCount) > max || (fixedValue >= max && fixedCount < values.length)) {
        this.display = true;
        this.errMsgs = '固定值大于平和体质勾选范围最大值！';
        return obj;
      } else if (fixedValue === max && unFixedCount === 0) {
        return obj;
      } else if ((fixedValue + unFixedCount) === max && unFixedCount > 0) {
        obj = this.valuationObj(obj, 1);
        obj = this.generateRandomNumber(index, min, max, obj);
      } else {
        const modNum = max - fixedValue - unFixedCount;
        const randomNum = MathUtil.randomBoth(1, modNum > 5 ? 5 : modNum);
        obj = this.valuationObj(obj, randomNum);
        obj = this.generateRandomNumber(index, min, max, obj);
      }
    } else {
    //  1 2 4 5 13      9 - 17 17-25
    //  生成第一个数字
      if (!values[0]) {
        const num0 = MathUtil.randomBoth(1, 5);
        obj = this.valuationObj(obj, num0);
        obj = this.generateRandomNumber(index, min, max, obj);
      } else {
        const modNum = -parseInt(values[0].toString(), 10)
          + parseInt((values[1] || '1').toString(), 10)
          + parseInt((values[2] || '1').toString(), 10)
          + parseInt((values[3] || '1').toString(), 10)
          + parseInt((values[4] || '1').toString(), 10)
          + 24 - min;
        const randomNum = MathUtil.randomBoth(1, Math.floor(modNum / unFixedCount) > 5 ? 5 : Math.floor(modNum / unFixedCount));
        obj = this.valuationObj(obj, randomNum);
        obj = this.generateRandomNumber(index, min, max, obj);
      }
    }
    return obj;
  }

  /**
   * 将生成的对象回填到对应的问题调查和体质类型
   * @param obj
   * @param item
   */
  backFillQuestionAndBody(obj, item, index) {
    let totalScore = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        this.questions[parseInt(key, 10)].score = this.scores[obj[key] - 1];
        totalScore += obj[key];
      }
    }
    if (index === 8) {
      const values = Object.values(obj);
      totalScore = parseInt(values[0].toString(), 10)
        - parseInt(values[1].toString(), 10)
        - parseInt(values[2].toString(), 10)
        - parseInt(values[3].toString(), 10)
        - parseInt(values[4].toString(), 10) + 24;
    }
    item.score = totalScore;
  }

  /**
   * 将固定的值生成到对象中
   */
  generateObj(type: number) {
    const obj: any = {};
    switch ( type ) {
      // 气虚质
      case 0:
        if (this.questions[1].isFixed && this.questions[1].isFixed[0] === '1' && this.questions[1].score) {
          obj['1'] = this.questions[1].score.value;
        } else {
          obj['1'] = null;
        }
        if (this.questions[2].isFixed && this.questions[2].isFixed[0]  === '1' && this.questions[2].score) {
          obj['2'] = this.questions[2].score.value;
        } else {
          obj['2'] = null;
        }
        if (this.questions[3].isFixed && this.questions[3].isFixed[0]  === '1' && this.questions[3].score) {
          obj['3'] = this.questions[3].score.value;
        } else {
          obj['3'] = null;
        }
        if (this.questions[13].isFixed && this.questions[13].isFixed[0]  === '1' && this.questions[13].score) {
          obj['13'] = this.questions[13].score.value;
        } else {
          obj['13'] = null;
        }
        break;
      // 计算阳虚质 11 12 13 29
      case 1:
        if (this.questions[10].isFixed && this.questions[10].isFixed[0] === '1' && this.questions[10].score) {
          obj['10'] = this.questions[10].score.value;
        } else {
          obj['10'] = null;
        }
        if (this.questions[11].isFixed && this.questions[11].isFixed[0]  === '1' && this.questions[11].score) {
          obj['11'] = this.questions[11].score.value;
        } else {
          obj['11'] = null;
        }
        if (this.questions[12].isFixed && this.questions[12].isFixed[0]  === '1' && this.questions[12].score) {
          obj['12'] = this.questions[12].score.value;
        } else {
          obj['12'] = null;
        }
        if (this.questions[28].isFixed && this.questions[28].isFixed[0]  === '1' && this.questions[28].score) {
          obj['28'] = this.questions[28].score.value;
        } else {
          obj['28'] = null;
        }
        break;
      // 计算阴虚质 10 21 26 31
      case 2:
        if (this.questions[9].isFixed && this.questions[9].isFixed[0] === '1' && this.questions[9].score) {
          obj['9'] = this.questions[9].score.value;
        } else {
          obj['9'] = null;
        }
        if (this.questions[20].isFixed && this.questions[20].isFixed[0]  === '1' && this.questions[20].score) {
          obj['20'] = this.questions[20].score.value;
        } else {
          obj['20'] = null;
        }
        if (this.questions[25].isFixed && this.questions[25].isFixed[0]  === '1' && this.questions[25].score) {
          obj['25'] = this.questions[25].score.value;
        } else {
          obj['25'] = null;
        }
        if (this.questions[30].isFixed && this.questions[30].isFixed[0]  === '1' && this.questions[30].score) {
          obj['30'] = this.questions[30].score.value;
        } else {
          obj['30'] = null;
        }
        break;
      // 计算痰湿质 9 16 28 32
      case 3:
        if (this.questions[8].isFixed && this.questions[8].isFixed[0] === '1' && this.questions[8].score) {
          obj['8'] = this.questions[8].score.value;
        } else {
          obj['8'] = null;
        }
        if (this.questions[15].isFixed && this.questions[15].isFixed[0]  === '1' && this.questions[15].score) {
          obj['15'] = this.questions[15].score.value;
        } else {
          obj['15'] = null;
        }
        if (this.questions[27].isFixed && this.questions[27].isFixed[0]  === '1' && this.questions[27].score) {
          obj['27'] = this.questions[27].score.value;
        } else {
          obj['27'] = null;
        }
        if (this.questions[31].isFixed && this.questions[31].isFixed[0]  === '1' && this.questions[31].score) {
          obj['31'] = this.questions[31].score.value;
        } else {
          obj['31'] = null;
        }
        break;
      // 计算湿热质 23 25 27 30
      case 4:
        if (this.questions[22].isFixed && this.questions[22].isFixed[0] === '1' && this.questions[22].score) {
          obj['22'] = this.questions[22].score.value;
        } else {
          obj['22'] = null;
        }
        if (this.questions[24].isFixed && this.questions[24].isFixed[0]  === '1' && this.questions[24].score) {
          obj['24'] = this.questions[24].score.value;
        } else {
          obj['24'] = null;
        }
        if (this.questions[26].isFixed && this.questions[26].isFixed[0]  === '1' && this.questions[26].score) {
          obj['26'] = this.questions[26].score.value;
        } else {
          obj['26'] = null;
        }
        if (this.questions[29].isFixed && this.questions[29].isFixed[0]  === '1' && this.questions[29].score) {
          obj['29'] = this.questions[29].score.value;
        } else {
          obj['29'] = null;
        }
        break;
      // 计算血淤质 19 22 24 33
      case 5:
        if (this.questions[18].isFixed && this.questions[18].isFixed[0] === '1' && this.questions[18].score) {
          obj['18'] = this.questions[18].score.value;
        } else {
          obj['18'] = null;
        }
        if (this.questions[21].isFixed && this.questions[21].isFixed[0]  === '1' && this.questions[21].score) {
          obj['21'] = this.questions[21].score.value;
        } else {
          obj['21'] = null;
        }
        if (this.questions[23].isFixed && this.questions[23].isFixed[0]  === '1' && this.questions[23].score) {
          obj['23'] = this.questions[23].score.value;
        } else {
          obj['23'] = null;
        }
        if (this.questions[32].isFixed && this.questions[32].isFixed[0]  === '1' && this.questions[32].score) {
          obj['32'] = this.questions[32].score.value;
        } else {
          obj['32'] = null;
        }
        break;
      // 计算气郁质 5 6 7 8
      case 6:
        if (this.questions[4].isFixed && this.questions[4].isFixed[0] === '1' && this.questions[4].score) {
          obj['4'] = this.questions[4].score.value;
        } else {
          obj['4'] = null;
        }
        if (this.questions[5].isFixed && this.questions[5].isFixed[0]  === '1' && this.questions[5].score) {
          obj['5'] = this.questions[5].score.value;
        } else {
          obj['5'] = null;
        }
        if (this.questions[6].isFixed && this.questions[6].isFixed[0]  === '1' && this.questions[6].score) {
          obj['6'] = this.questions[6].score.value;
        } else {
          obj['6'] = null;
        }
        if (this.questions[7].isFixed && this.questions[7].isFixed[0]  === '1' && this.questions[7].score) {
          obj['7'] = this.questions[7].score.value;
        } else {
          obj['7'] = null;
        }
        break;
      // 计算特禀质 15 17 18 20
      case 7:
        if (this.questions[14].isFixed && this.questions[14].isFixed[0] === '1' && this.questions[14].score) {
          obj['14'] = this.questions[14].score.value;
        } else {
          obj['14'] = null;
        }
        if (this.questions[16].isFixed && this.questions[16].isFixed[0]  === '1' && this.questions[16].score) {
          obj['16'] = this.questions[16].score.value;
        } else {
          obj['16'] = null;
        }
        if (this.questions[17].isFixed && this.questions[17].isFixed[0]  === '1' && this.questions[17].score) {
          obj['17'] = this.questions[17].score.value;
        } else {
          obj['17'] = null;
        }
        if (this.questions[19].isFixed && this.questions[19].isFixed[0]  === '1' && this.questions[19].score) {
          obj['19'] = this.questions[19].score.value;
        } else {
          obj['19'] = null;
        }
        break;
      // 计算平和质 1 2 4 5 13
      case 8:
        if (this.questions[0].isFixed && this.questions[0].isFixed[0] === '1' && this.questions[0].score) {
          obj['0'] = this.questions[0].score.value;
        } else {
          obj['0'] = null;
        }
        if (this.questions[1].isFixed && this.questions[1].isFixed[0]  === '1' && this.questions[1].score) {
          obj['1'] = this.questions[1].score.value;
        } else {
          obj['1'] = null;
        }
        if (this.questions[3].isFixed && this.questions[3].isFixed[0]  === '1' && this.questions[3].score) {
          obj['3'] = this.questions[3].score.value;
        } else {
          obj['3'] = null;
        }
        if (this.questions[4].isFixed && this.questions[4].isFixed[0]  === '1' && this.questions[4].score) {
          obj['4'] = this.questions[4].score.value;
        } else {
          obj['4'] = null;
        }
        if (this.questions[12].isFixed && this.questions[12].isFixed[0]  === '1' && this.questions[12].score) {
          obj['12'] = this.questions[12].score.value;
        } else {
          obj['12'] = null;
        }
        break;
    }
    return obj;
  }

  valuationObj(obj, value): object {
    for (const key in obj) {
      if (!obj[key] && obj.hasOwnProperty(key)) {
        obj[key] = value;
        return obj;
      }
    }
  }

  randomOthersNum(obj: object, value: number) {
    let sum = 0;
    let count = 0;
    const values = Object.values(obj);
    const keys = Object.keys(obj);
    values.forEach(item => {
      if (item) {
        sum += item;
        count++;
      }
    });
    if (value < (sum + values.length - count)) {
      this.display = true;
      this.errMsgs = '固定行数数据过大，和所选择的平和质相悖！';
      return;
    }
    if (values.length === count) {
      return;
    }
    obj = this.randValues(obj, values.length - count, value);
    console.log(obj);
    for (const key in obj) {
      if (!obj[key] && obj.hasOwnProperty(key)) {
        this.questions[parseInt(key, 10)].score = obj[key];
      }
    }
    console.log(this.questions);
  }

  randValues(obj, num, sum) {
    if (num === 1) {
      for (const key in obj) {
        if (!obj[key] && obj.hasOwnProperty(key)) {
          obj[key] = sum;
        }
      }
      return obj;
    }
    if (sum === num * 5) {
      for (const key in obj) {
        if (!obj[key] && obj.hasOwnProperty(key)) {
          obj[key] = 5;
        }
      }
    } else if (sum === num) {
      for (const key in obj) {
        if (!obj[key] && obj.hasOwnProperty(key)) {
          obj[key] = 1;
        }
      }
    } else {
      const randNum = MathUtil.randomBoth(1, 5);
      for (const key in obj) {
        if (!obj[key] && obj.hasOwnProperty(key)) {
          obj[key] = randNum;
          break;
        }
      }
      obj = this.randValues(obj, num - 1, sum - randNum);
    }
  }

}
