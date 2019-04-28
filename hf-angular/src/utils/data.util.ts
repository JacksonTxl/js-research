/**
 * @license
 * Copyright 2018 CFETSIT 测试工具组
 * @author
 * JacksonTxl
 * @time
 * 2019-04-28 11:26
 */
export class DataUtil {
  static questions = [
    {id: 1, score: null, isFixed: null, question: '您精力充沛吗?(指精神头足,乐于做事)'},
    {id: 2, score: null, isFixed: null, question: '您容易疲乏吗?(指体力如何,是否稍微活动一下或做一点家务劳动就感到累)'},
    {id: 3, score: null, isFixed: null, question: '您容易气短,呼吸短促,接不上气吗?'},
    {id: 4, score: null, isFixed: null, question: '您说话声音低弱无力吗?(指说话没有力气)'},
    {id: 5, score: null, isFixed: null, question: '您感到闷闷不乐、情绪低沉吗?(指心情不愉快,情绪低落)'},
    {id: 6, score: null, isFixed: null, question: '您容易精神紧张、焦虑不安吗?(指遇事是否心情紧张)'},
    {id: 7, score: null, isFixed: null, question: '您因为生活状态改变而感到孤独、失落吗?'},
    {id: 8, score: null, isFixed: null, question: '您容易感到害怕或受到惊吓吗?'},
    {id: 9, score: null, isFixed: null, question: '您感到身体超重不轻松吗?(感觉身体沉重)   BM指数=体重(kg)/身高2(m)]'},
    {id: 10, score: null, isFixed: null, question: '您眼睛干涩吗?'},
    {id: 11, score: null, isFixed: null, question: '您手脚发凉吗?(不包含因周围温度低或穿的少导致的手脚发冷)'},
    {id: 12, score: null, isFixed: null, question: '您胃脘部、背部或腰膝部怕冷吗?(指上腹部)'},
    {id: 13, score: null, isFixed: null, question: '您比一般人耐受不了寒冷吗?(指比别人容易害怕冬天或是夏天的冷空调、电扇等)'},
    {id: 14, score: null, isFixed: null, question: '您容易患感冒吗?(指每年感冒的次数)'},
    {id: 15, score: null, isFixed: null, question: '您没有感冒时也会鼻塞、流鼻涕吗?'},
    {id: 16, score: null, isFixed: null, question: '您有口粘口腻,或睡眠打鼾吗?'},
    {id: 17, score: null, isFixed: null, question: '您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时)吗?'},
    {id: 18, score: null, isFixed: null, question: '您的皮肤容易起麻疹吗?(包括风团、风疹块、风疙瘩)'},
    {id: 19, score: null, isFixed: null, question: '您的皮肤在不知不觉中会出现青紫擦斑、皮下出血吗?(指皮肤在没有外伤的情况下出现青一块紫一块的情况)'},
    {id: 20, score: null, isFixed: null, question: '您的皮肤一抓就红,并出现抓痕吗?(指被指甲或钝物划过后皮肤的反应)'},
    {id: 21, score: null, isFixed: null, question: '您皮肤或口唇干吗?'},
    {id: 22, score: null, isFixed: null, question: '您有肢体麻木或固定部位疼痛的感觉吗?'},
    {id: 23, score: null, isFixed: null, question: '您面部或鼻部有油腻感或者油亮发光吗?(指脸上或鼻子)'},
    {id: 24, score: null, isFixed: null, question: '您面色或目眶晦黯,或出现褐色斑块/斑点吗?'},
    {id: 25, score: null, isFixed: null, question: '您有皮肤湿疹、疮疖吗?'},
    {id: 26, score: null, isFixed: null, question: '您感到口干咽燥、总想喝水吗?'},
    {id: 27, score: null, isFixed: null, question: '您感到口苦或嘴里有异味吗?(指口苦或口臭)'},
    {id: 28, score: null, isFixed: null, question: '您腹部肥大吗?(指腹部脂肪肥厚)'},
    {id: 29, score: null, isFixed: null, question: '您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗?(指不喜欢吃凉的食物,或吃了凉的食物后会不舒服)'},
    {id: 30, score: null, isFixed: null, question: '您有大便黏滞不爽、解不尽的感觉吗?(大便容易粘在马桶或便坑壁上)'},
    {id: 31, score: null, isFixed: null, question: '您容易大便干燥吗?'},
    {id: 32, score: null, isFixed: null, question: '您舌苔厚膩或有舌苔厚厚的感觉吗?(如果自我感觉不清楚可由调查员观察后填写)'},
    {id: 33, score: null, isFixed: null, question: '您舌下静脉瘀紫或增粗吗?(可由调查员辅助观察后填写)'},
  ];
  static scores = [
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 3, value: 3},
    {label: 4, value: 4},
    {label: 5, value: 5},
  ];
  static typeResults = [
    {label: '是', value: 2},
    {label: '基本是', value: 1},
    {label: '否', value: 0},
  ];
  static bodyTypes = [
    {label: '气虛质', score: 0, result: null},
    {label: '阳虚质', score: 0, result: null},
    {label: '阴虚质', score: 0, result: null},
    {label: '痰湿质', score: 0, result: null},
    {label: '湿热质', score: 0, result: null},
    {label: '血淤质', score: 0, result: null},
    {label: '气郁质', score: 0, result: null},
    {label: '特禀质', score: 0, result: null},
    {label: '平和质', score: 0, result: null},
  ];
}
