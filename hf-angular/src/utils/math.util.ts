/**
 * @license
 * Copyright 2018 CFETSIT 测试工具组
 * @author
 * JacksonTxl
 * @time
 * 2019-04-28 16:09
 */
export class MathUtil {
  /**
   * 生成指定区间数字，包含min和max
   * @param min
   * @param max
   */
  static randomBoth(min, max) {
    const range = max - min;
    const rand = Math.random();
    return min + Math.round(range * rand);
  }

  /**
   * 生成指定区间数字，包含min不包含max
   * @param min
   * @param max
   */
  static randomExceptMax(min, max) {
    const range = max - min;
    const rand = Math.random();
    return min + Math.floor(range * rand);
  }

  /**
   * 生成指定区间数字，不包含min包含max
   * @param min
   * @param max
   */
  static randomExceptMin(min, max) {
    const range = max - min;
    const rand = Math.random();
    const num = Math.round(range * rand)
    if ( num === 0) {
      return min + 1;
    }
    return min + num;
  }

  /**
   * 生成指定区间数字，不包含min不包含max
   * @param min
   * @param max
   */
  static randomExceptBoth(min, max) {
    const range = max - min;
    const rand = Math.random();
    const num = Math.round(range * rand);
    if (num === 0) {
      return min + 1;
    } else if (num === max) {
      return num - 1;
    }
    return min + num;
  }
}
