"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


// evaluation-analysis

(function() {
  var options = {
    series: [{
      name: 'ポジティブ',
      data: [20, 60, 45, 16, 20, 115, 25, 23, 93, 32, 32, 54, 20, 29, 23, 48, 38, 12]
    }, {
      name: 'ネガティブ',
      data: [-3, -4, -5, -1, -2, -11, -5, -3, -19, -3, -2, -4, -2, -9, -3, -8, -3, -2]
    }],
    chart: {
      type: 'bar',
      stacked: true,
      height: '100%',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: '75%'
      }
    },
    colors: ['#FFA50E', '#9A9FA5'],
    dataLabels: {
      enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
      categories: ["雰囲気#雰囲気･装飾", "雰囲気#音楽･ノイズ", "雰囲気#清潔感", "雰囲気#店内･席", "料理#見た目", "料理#分量", "料理#おすすめできるか", "料理#味", "立地#都心･繁華街にあるか", "立地#見つけやすいか", "立地#アクセスの良さ", "価格#コストパフォーマンス", "価格#割引について", "価格#水準", "サービス#接客", "サービス#駐車場の利便性", "サービス#入店までの待ち時間", "サービス#料理の提供時間"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      show: false,
      strokeDashArray: 0,
      padding: {
        top: -20,
        right: 0,
        bottom: 20,
        left: 50
      }
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.6
        }
      }
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      }
    }
  };
  var chart = document.querySelector('#evaluation-analysis');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();


// Answer Chart

(function() {
  var options = {
    grid: {
      strokeDashArray: 0,
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
        left: 10
      }
    },
    legend: {
      show: false
    },
    colors: ['#FF507C'],
    series: [{
      name: '回答数',
      data: [84, 23, 49, 94, 58, 83, 40]
    }],
    chart: {
      height: '100%',
      type: 'bar',
      toolbar: {
        show: false
      },
      fontFamily: 'Inter, sans-serif'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 0
    },
    xaxis: {
      type: 'category',
      categories: ["3/15", "3/16", "3/17", "3/18", "3/19", "3/20", "3/21"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      }
    }
  };
  var chart = document.querySelector('#answer-chart');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// NPS Chart

(function() {
  var options = {
    grid: {
      strokeDashArray: 0,
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
        left: 10
      }
    },
    legend: {
      show: false
    },
    colors: ['#F96D29'],
    series: [{
      name: 'NPS',
      data: [8.5, 8.7, 8.2, 9.5, 9.1, 8.7, 8.9]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'Inter, sans-serif'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 4
    },
    xaxis: {
      type: 'category',
      categories: ["3/15", "3/16", "3/17", "3/18", "3/19", "3/20", "3/21"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      }
    }
  };
  var chart = document.querySelector('#nps-chart');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// number of visits

(function() {
  var options = {
    series: [340, 120, 41, 21],
    chart: {
      type: 'donut'
    },
    legend: {
      show: true,
      onItemClick: {
        toggleDataSeries: true
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '54%'
        }
      }
    },
    labels: ['はじめて', '2-3回目', '4回以上', '覚えていない'],
    colors: ['#C63DC6', '#F96D29', '#FFA50E', '#FF507C'],
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.8
        }
      }
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      }
    }
  };
  var chart = document.querySelector('#visits-chart');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// age

(function() {
  var options = {
    series: [94, 120, 79, 28, 2],
    chart: {
      type: 'donut',
    },
    legend: {
      show: true,
      onItemClick: {
        toggleDataSeries: true
      },
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '54%'
        }
      }
    },
    labels: ['10-24歳', '25-39歳', '40-54歳', '55-69歳', '70歳-'],
    colors: ['#C63DC6', '#F96D29', '#FFA50E', '#FF507C', '#10C268'],
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.8
        }
      }
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      }
    }
  };
  var chart = document.querySelector('#age-chart');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// gender

(function() {
  var options = {
    series: [263, 239, 4],
    chart: {
      type: 'donut'
    },
    legend: {
      show: true,
      onItemClick: {
        toggleDataSeries: true
      },
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '54%'
        }
      }
    },
    labels: ['男性', '女性', '無回答'],
    colors: ['#F96D29', '#FF507C', '#A8ADB1'],
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.8
        }
      }
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      }
    }
  };
  var chart = document.querySelector('#gender-chart');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// occupation

(function() {
  var options = {
    series: [94, 34, 45, 49, 28, 2],
    chart: {
      type: 'donut',
    },
    legend: {
      show: true,
      onItemClick: {
        toggleDataSeries: true
      },
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '54%'
        }
      }
    },
    labels: ['会社員', '会社役員･自営業', 'パート･アルバイト', '学生', '専業主婦･主夫', '無職'],
    colors: ['#C63DC6', '#F96D29', '#FFA50E', '#FF507C', '#10C268', '#A8ADB1'],
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.8
        }
      }
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
       console.log(config.dataPointIndex)
      }
    }
  };
  var chart = document.querySelector('#occupation-chart');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 
