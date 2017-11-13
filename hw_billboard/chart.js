var chart1 = bb.generate({
  "bindto": "#LineChart",
  "data": {
    "x": "x",
    "columns": [
        ["x",2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
	      ["data1", 137.5, 139.5,	140.5, 144.4, 142.8, 146.5,	149.0, 150.9,	150.8, 153.0],
	      ["data2", 59.6,	56.5,	52.0,	53.2,	50.7,	51.1,	50.3,	48.2,	48.0,	45.8],
        ["data3", 43.7,	43.4,	45.0,	46.9,	49.8,	52.5,	50.1,	52.3,	55.6,	58.2]
    ],
    colors:{
        "data1": "#DA4E37",
        "data2": "#AABD65",
        "data3": "#EFB82A"
    },
    "names":{
      "data1": "암",
      "data2": "뇌혈관질환",
      "data3": "심장질환"
    }
  }
});

var chart2 = bb.generate({
  "bindto": "#BarChart",
  "data": {
    "x": "x",
    "columns": [
      ["x", 2017.01,	2017.02,	2017.03,	2017.04,	2017.05,	2017.06,	2017.07,	2017.08,	2017.09],
    	["data1",	26698,	27138,	27409,	27751,	27828,	27929,	27879,	27740,	27779],
    	["data2", 25689,	25788,	26267,	26577,	26824,	26860,	26916,	26740,	26844],
      ["data3", 1009,	1350,	1143,	1174,	1003,	1069,	963,	1001,	935]
    ],
    "type": "bar",
    "colors":{
      "data1": "#89B3BA",
      "data2": "#EEBA28",
      "data3": "#DD4C3F"
    },
    "names":{
      "data1": "경제활동인구",
      "data2": "취업자수",
      "data3": "실업자수"
    }
  },
  "bar": {
    "width": {
      "ratio": 0.3
    }
  },
  "axis": {
    "x": {
      "type": "category"
    }
  },
  "interaction": {
    "inputType": {
      "touch": {
        "preventDefault": true
      }
    }
  }
});

var chart3 = bb.generate({
  "bindto": "#AreaChart",
  "data": {
    "columns": [
    	["data1", 438660,	480136,	485806,	514956,	554482,	524420,	562695,	628279,	656265,	664800],
    	["data2", 326769,	373871,	384830,	403961,	427979,	408563,	423228,	463252,	486822,	496877]
    ],
    "names":{
      "data1": "외국인 남자",
      "data2": "외국인 여자"
    },
    "types": {
      "data1": "area-step",
      "data2": "area-step"
    },
    "colors":{
      "data1": "#EBB927",
      "data2": "#DA4E37"
    }
  }
});

var chart5 = bb.generate({
  "data": {
    "columns": [
    	["대도시", 41.2],
    	["서울", 16.6],
      ["광역시", 24.6],
      ["대도시이외", 58.8],
      ["중소도시", 46],
      ["읍면지역", 12.8]
    ],
    "colors":{
      "대도시": "#EFBB25",
      "서울": "#89B6BD",
      "광역시": "#E1A1F9"
    },
    "type": "pie",
    "onclick": function (d, i) { console.log("onclick", d, i); },
    "onover": function (d, i) { console.log("onover", d, i); },
    "onout": function (d, i) { console.log("onout", d, i); }
  },
  "legend": {
    "contents": {
      "bindto": "#legend",
      "template": "<span style='color:#fff; padding:10px; background-color:{=COLOR}' >{=TITLE}</span>"
    }
  },
  "bindto": "#PieChart"
});
// 종로구, 용산구, 성동구, 강북구, 마포구, 관악구, 강남구
// 73663, 107282, 132564, 142274, 169474, 255033, 232980  주민등록 세대수
// 76138, 110897, 150501, 159425, 179685, 254472, 268025  남자 주민 수
// 78965, 118221, 154327, 165949, 196229, 250177, 291482  여자 주민 수
var chart6 = bb.generate({
  "data": {
  //  "x": "x",
    "columns": [
      //["x", 종로구, 용산구, "성동구", "강북구", "마포구", "관악구", "강남구"],
    	["주민등록 세대 수", 73663, 107282, 132564, 142274, 169474, 255033, 232980 ],
    	["남자 주민 수", 76138, 110897, 150501, 159425, 179685, 254472, 268025],
    	["여자 주민 수", 78965, 118221, 154327, 165949, 196229, 250177, 291482]
    ],
    "colors":{
      "주민등록 세대 수": "#DA4E37",
      "남자 주민 수": "#85B6B9",
      "여자 주민 수": "#EFB82A"
    /*  "data5": "#336465",
      "data6": "#EFB82A",
      "data4": "#DA4E37"*/
    },
    "types": {
      "주민등록 세대 수": "spline",
      "남자 주민 수": "bar",
      "여자 주민 수": "bar"
    }
  },
  "axis": {
    "x": {
      "type": "category",
      "categories": [
        "종로구",
        "용산구",
        "성동구",
        "강북구",
        "마포구",
        "관악구",
        "강남구"
      ]
    },
    "rotated": true
  },
  "bindto": "#CombinationChart"
});

setTimeout(function () {
  chart3.unload({
    ids:"data1"
  });
  chart3.unload({
    ids:"data2"
  });
}, 1500);

setTimeout(function () {
  chart3.load({
    columns: [
      ["data1", 765429,	854007,	870636,	918917,	982461,	932983,	985923,	1091531,	1143087,	1161677],
      ["data2", 37560,	36204,	33300,	34235,	29762,	28325,	25963,	23316,	21274,	20591]
    ],
    colors:{
      "data1": "#AABB6A",
      "data2": "#346563"
    },
    names:{
      "data1": "외국인 등록 인구",
      "data2": "국제 결혼 건수"
    }
  });
}, 1700);
