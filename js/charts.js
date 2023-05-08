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
        show: true
      }
    },
    grid: {
      show: true,
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
    tooltip: {
      shared: true,
      intersect: false
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      },
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
    colors: ['#F96D29'],
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
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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

// Answer Chart Comparison

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
    colors: ['#F96C2A', 'rgba(154, 159, 165, .3)'],
    series: [{
      name: '牛鍋 吉田家 東京都',
      data: [84, 23, 49, 94, 58, 83, 40]
      }, {
      name: '全店舗平均',
      data: [68, 57, 42, 67, 42, 73, 68]
    }],
    chart: {
      height: '100%',
      type: 'bar',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
    tooltip: {
      shared: true,
      intersect: false,
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      }
    }
  };
  var chart = document.querySelector('#answer-chart-compare');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Answer Chart Comparison Store

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
    colors: ['#F96C2A', 'rgba(154, 159, 165, .3)'],
    series: [{
      name: '牛鍋 吉田家 八丁堀店',
      data: [84, 23, 49, 94, 58, 83, 40]
      }, {
      name: '全店舗平均',
      data: [68, 57, 42, 67, 42, 73, 68]
    }],
    chart: {
      height: '100%',
      type: 'bar',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
    tooltip: {
      shared: true,
      intersect: false,
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      }
    }
  };
  var chart = document.querySelector('#answer-chart-compare-store');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Answer Chart Comparison Brand

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
    colors: ['#F96C2A', 'rgba(154, 159, 165, .3)'],
    series: [{
      name: '牛鍋 吉田家',
      data: [84, 23, 49, 94, 58, 83, 40]
      }, {
      name: '全店舗平均',
      data: [68, 57, 42, 67, 42, 73, 68]
    }],
    chart: {
      height: '100%',
      type: 'bar',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
    tooltip: {
      shared: true,
      intersect: false,
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      }
    }
  };
  var chart = document.querySelector('#answer-chart-compare-brand');

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
    colors: ['#FF507C'],
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
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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

// NPS Chart Comparison

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
    colors: ['#FF507C', 'rgba(154, 159, 165, .3)'],
    series: [{
      name: '牛鍋 吉田家 東京都',
      data: [8.5, 8.7, 8.2, 9.5, 9.1, 8.7, 8.9]
      }, {
      name: '全店舗平均',
      data: [8.2, 9.0, 8.7, 9.0, 8.7, 7.9, 8.5]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#nps-chart-compare');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// NPS Chart Comparison Store

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
    colors: ['#FF507C', 'rgba(154, 159, 165, .3)'],
    series: [{
      name: '牛鍋 吉田家 八丁堀店',
      data: [8.5, 8.7, 8.2, 9.5, 9.1, 8.7, 8.9]
      }, {
      name: '全店舗平均',
      data: [8.2, 9.0, 8.7, 9.0, 8.7, 7.9, 8.5]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#nps-chart-compare-store');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// NPS Chart Comparison Brand

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
    colors: ['#FF507C', 'rgba(154, 159, 165, .3)'],
    series: [{
      name: '牛鍋 吉田家',
      data: [8.5, 8.7, 8.2, 9.5, 9.1, 8.7, 8.9]
      }, {
      name: '全店舗平均',
      data: [8.2, 9.0, 8.7, 9.0, 8.7, 7.9, 8.5]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#nps-chart-compare-brand');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Score Chart

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
    colors: ['#FFA50E'],
    series: [{
      name: '総合スコア',
      data: [92, 85, 81, 90, 94, 86, 91]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#score-chart');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Score Chart Comparison

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
    colors: ['#FFA50E', 'rgba(154, 159, 165, .3)'],
    series: [{
      name: '牛鍋 吉田家 東京都',
      data: [92, 85, 81, 90, 94, 86, 91]
      }, {
      name: '全店舗平均',
      data: [88, 89, 84, 85, 90, 83, 84]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#score-chart-compare');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Score Chart Comparison Store

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
    colors: ['#FFA50E', 'rgba(154, 159, 165, .3)'],
    series: [{
      name: '牛鍋 吉田家 八丁堀店',
      data: [92, 85, 81, 90, 94, 86, 91]
      }, {
      name: '全店舗平均',
      data: [88, 89, 84, 85, 90, 83, 84]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#score-chart-compare-store');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Select Chart Comparison Store

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
    colors: ['#C63CC6', 'rgba(154, 159, 165, .3)'],
    series: [{
      name: '牛鍋 吉田家 八丁堀店',
      data: [94, 81, 82, 75, 94, 76, 92]
      }, {
      name: '全店舗平均',
      data: [88, 89, 84, 85, 90, 83, 84]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#select-chart-compare-store');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Score Chart Comparison Brand

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
    colors: ['#FFA50E', 'rgba(154, 159, 165, .3)'],
    series: [{
      name: '牛鍋 吉田家',
      data: [92, 85, 81, 90, 94, 86, 91]
      }, {
      name: '全店舗平均',
      data: [88, 89, 84, 85, 90, 83, 84]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#score-chart-compare-brand');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// number of visits

(function() {
  var options = {
    series: [340, 120, 41, 21],
    chart: {
      type: 'donut',
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
    labels: ['初めて', '2-3回目', '4回以上', '覚えていない'],
    colors: ['#C63DC6', '#F96D29', '#FFA50E', '#A8ADB1'],
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

// last visit

(function() {
  var options = {
    series: [292, 19, 48, 172, 30, 4],
    chart: {
      type: 'donut',
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
    labels: ['初めて', '1週間以内', '1ヶ月以内', '1年以内', '1年以上前', '覚えていない'],
    colors: ['#C63DC6', '#F96D29', '#FFA50E', "#FF4F7C", '#10C268', '#A8ADB1'],
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
  var chart = document.querySelector('#last-chart');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// address prefecture

(function() {
  var options = {
    series: [23, 20, 249, 123, 93, 130, 32, 49],
    chart: {
      type: 'donut',
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
    labels: ['埼玉県', '千葉県', '東京都', '神奈川県', '京都府', '大阪府', '兵庫県', '奈良県'],
    theme: {
      palette: 'palette1'
    },
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
  var chart = document.querySelector('#address-chart');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// address city

(function() {
  var options = {
    series: [23, 20, 249, 123, 93, 130, 32, 49],
    chart: {
      type: 'donut',
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
    labels: ['港区', '豊島区', '江東区', '町田市', '新宿区', '千代田区', '品川区', '北区'],
    theme: {
      palette: 'palette1'
    },
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
  var chart = document.querySelector('#address-city-chart');

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
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
      type: 'donut',
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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

// NPS chart group comparison

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
      show: true,
      position: 'right',
    },
    colors: ['rgba(154, 159, 165, .6)', '#FF507C', '#FF507C', '#FF507C', '#FF507C', '#FF507C', '#FF507C'],
    series: [{
      name: '全グループ平均',
      data: [6.5, 5.7, 6.2, 7.5, 8.1, 6.7, 5.9]
      }, {
      name: '牛鍋 吉田屋 - 東京都',
      data: [6.5, 6.7, 5.2, 3.5, 6.1, 9.7, 4.9]
      }, {
      name: '牛鍋 吉田屋 - 京都府',
      data: [8.5, 8.7, 8.2, 9.5, 9.1, 8.7, 8.9]
      }, {
      name: '牛鍋 吉田屋 - 大阪府',
      data: [5.5, 7.7, 9.2, 5.5, 5.1, 4.7, 6.9]
      }, {
      name: '万吉スープカレー - 東京都',
      data: [7.5, 6.7, 8.2, 6.5, 7.1, 5.7, 9.9]
      }, {
      name: '万吉スープカレー - 京都府',
      data: [4.5, 5.7, 3.2, 6.5, 6.1, 7.7, 7.9]
      }, {
      name: '万吉スープカレー - 大阪府',
      data: [7.5, 6.7, 5.2, 4.5, 3.1, 4.7, 5.9]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#nps-comp-group');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Score chart group comparison

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
      show: true,
      position: 'right',
    },
    colors: ['rgba(154, 159, 165, .6)', '#FFA50E', '#FFA50E', '#FFA50E', '#FFA50E', '#FFA50E', '#FFA50E'],
    series: [{
      name: '全グループ平均',
      data: [85, 77, 72, 75, 81, 87, 69]
      }, {
      name: '牛鍋 吉田屋 - 東京都',
      data: [65, 67, 72, 65, 81, 87, 79]
      }, {
      name: '牛鍋 吉田屋 - 京都府',
      data: [85, 87, 82, 95, 91, 87, 89]
      }, {
      name: '牛鍋 吉田屋 - 大阪府',
      data: [75, 77, 92, 55, 71, 67, 69]
      }, {
      name: '万吉スープカレー - 東京都',
      data: [75, 67, 82, 65, 71, 77, 99]
      }, {
      name: '万吉スープカレー - 京都府',
      data: [65, 57, 62, 65, 81, 77, 79]
      }, {
      name: '万吉スープカレー - 大阪府',
      data: [71, 87, 52, 85, 58, 83, 70]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#score-comp-group');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Reviews chart group comparison

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
      show: true,
      position: 'right',
    },
    colors: ['rgba(154, 159, 165, .6)', '#F96D29', '#F96D29', '#F96D29', '#F96D29', '#F96D29', '#F96D29'],
    series: [{
      name: '全グループ平均',
      data: [84, 57, 62, 75, 81, 67, 59]
      }, {
      name: '牛鍋 吉田屋 - 東京都',
      data: [65, 67, 52, 35, 61, 97, 49]
      }, {
      name: '牛鍋 吉田屋 - 京都府',
      data: [85, 87, 82, 95, 91, 87, 89]
      }, {
      name: '牛鍋 吉田屋 - 大阪府',
      data: [55, 77, 92, 55, 51, 47, 69]
      }, {
      name: '万吉スープカレー - 東京都',
      data: [75, 67, 82, 65, 71, 57, 99]
      }, {
      name: '万吉スープカレー - 京都府',
      data: [45, 57, 32, 65, 61, 77, 79]
      }, {
      name: '万吉スープカレー - 大阪府',
      data: [75, 67, 52, 45, 31, 47, 59]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#reviews-comp-group');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// NPS chart store comparison

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
      show: true,
      position: 'right',
    },
    colors: ['rgba(154, 159, 165, .6)', '#FF507C', '#FF507C', '#FF507C', '#FF507C', '#FF507C', '#FF507C', '#FF507C', '#FF507C', '#FF507C'],
    series: [{
      name: '全店舗平均',
      data: [8.5, 7.7, 7.2, 7.5, 8.1, 8.7, 6.9]
      }, {
      name: '牛鍋 吉田屋 八丁堀店',
      data: [6.5, 6.7, 7.2, 6.5, 8.1, 8.7, 7.9]
      }, {
      name: '牛鍋 吉田屋 青山店',
      data: [8.2, 8.7, 8.2, 9.5, 5.9, 9.5, 8.9]
      }, {
      name: '牛鍋 吉田屋 池袋店',
      data: [7.5, 7.7, 9.2, 5.5, 7.1, 6.7, 6.9]
      }, {
      name: '牛鍋 吉田屋 丸の内店',
      data: [6.5, 6.7, 8.2, 9.6, 8.1, 8.7, 5.8]
      }, {
      name: '牛鍋 吉田屋 代々木店',
      data: [6.5, 9.7, 8.2, 5.9, 8.1, 8.4, 7.9]
      }, {
      name: '牛鍋 吉田屋 北新地店',
      data: [7.3, 7.9, 6.2, 6.5, 8.2, 9.7, 8.7]
      }, {
      name: '万吉スープカレー 心斎橋店',
      data: [8.5, 8.7, 8.2, 9.5, 9.1, 8.7, 8.9]
      }, {
      name: '万吉スープカレー 梅田店',
      data: [6.9, 7.3, 6.2, 8.2, 8.3, 7.4, 5.9]
      }, {
      name: '万吉スープカレー 京都駅前店',
      data: [9.2, 8.7, 9.2, 9.5, 9.1, 8.7, 6.9]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#nps-comp-store');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Score chart store comparison

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
      show: true,
      position: 'right',
    },
    colors: ['rgba(154, 159, 165, .6)', '#FFA50E', '#FFA50E', '#FFA50E', '#FFA50E', '#FFA50E', '#FFA50E', '#FFA50E', '#FFA50E', '#FFA50E'],
    series: [{
      name: '全店舗平均',
      data: [85, 77, 72, 75, 81, 87, 69]
      }, {
      name: '牛鍋 吉田屋 八丁堀店',
      data: [65, 67, 72, 65, 81, 87, 79]
      }, {
      name: '牛鍋 吉田屋 青山店',
      data: [82, 87, 82, 95, 59, 95, 89]
      }, {
      name: '牛鍋 吉田屋 池袋店',
      data: [75, 77, 92, 55, 71, 67, 69]
      }, {
      name: '牛鍋 吉田屋 丸の内店',
      data: [65, 67, 82, 96, 81, 87, 58]
      }, {
      name: '牛鍋 吉田屋 代々木店',
      data: [65, 97, 82, 59, 81, 84, 79]
      }, {
      name: '牛鍋 吉田屋 北新地店',
      data: [73, 79, 62, 65, 82, 97, 87]
      }, {
      name: '万吉スープカレー 心斎橋店',
      data: [85, 87, 82, 95, 91, 87, 89]
      }, {
      name: '万吉スープカレー 梅田店',
      data: [69, 73, 62, 82, 83, 74, 59]
      }, {
      name: '万吉スープカレー 京都駅前店',
      data: [92, 87, 92, 95, 91, 87, 69]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#score-comp-store');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Reviews chart store comparison

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
      show: true,
      position: 'right',
    },
    colors: ['rgba(154, 159, 165, .6)', '#F96D29', '#F96D29', '#F96D29', '#F96D29', '#F96D29', '#F96D29', '#F96D29', '#F96D29', '#F96D29'],
    series: [{
      name: '全店舗平均',
      data: [85, 77, 72, 75, 81, 87, 69]
      }, {
      name: '牛鍋 吉田屋 八丁堀店',
      data: [65, 67, 72, 65, 81, 87, 79]
      }, {
      name: '牛鍋 吉田屋 青山店',
      data: [82, 87, 82, 95, 59, 95, 89]
      }, {
      name: '牛鍋 吉田屋 池袋店',
      data: [75, 77, 92, 55, 71, 67, 69]
      }, {
      name: '牛鍋 吉田屋 丸の内店',
      data: [65, 67, 82, 96, 81, 87, 58]
      }, {
      name: '牛鍋 吉田屋 代々木店',
      data: [65, 97, 82, 59, 81, 84, 79]
      }, {
      name: '牛鍋 吉田屋 北新地店',
      data: [73, 79, 62, 65, 82, 97, 87]
      }, {
      name: '万吉スープカレー 心斎橋店',
      data: [85, 87, 82, 95, 91, 87, 89]
      }, {
      name: '万吉スープカレー 梅田店',
      data: [69, 73, 62, 82, 83, 74, 59]
      }, {
      name: '万吉スープカレー 京都駅前店',
      data: [92, 87, 92, 95, 91, 87, 69]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#reviews-comp-store');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// Select chart store comparison

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
      show: true,
      position: 'right',
    },
    colors: ['rgba(154, 159, 165, .6)', '#C63CC6', '#C63CC6', '#C63CC6', '#C63CC6', '#C63CC6', '#C63CC6', '#C63CC6', '#C63CC6', '#C63CC6'],
    series: [{
      name: '全店舗平均',
      data: [85, 77, 72, 75, 81, 87, 69]
      }, {
      name: '牛鍋 吉田屋 八丁堀店',
      data: [65, 67, 72, 65, 81, 87, 79]
      }, {
      name: '牛鍋 吉田屋 青山店',
      data: [82, 87, 82, 95, 59, 95, 89]
      }, {
      name: '牛鍋 吉田屋 池袋店',
      data: [75, 77, 92, 55, 71, 67, 69]
      }, {
      name: '牛鍋 吉田屋 丸の内店',
      data: [65, 67, 82, 96, 81, 87, 58]
      }, {
      name: '牛鍋 吉田屋 代々木店',
      data: [65, 97, 82, 59, 81, 84, 79]
      }, {
      name: '牛鍋 吉田屋 北新地店',
      data: [73, 79, 62, 65, 82, 97, 87]
      }, {
      name: '万吉スープカレー 心斎橋店',
      data: [85, 87, 82, 95, 91, 87, 89]
      }, {
      name: '万吉スープカレー 梅田店',
      data: [69, 73, 62, 82, 83, 74, 59]
      }, {
      name: '万吉スープカレー 京都駅前店',
      data: [92, 87, 92, 95, 91, 87, 69]
    }],
    chart: {
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'MADEOkineSans, Noto Sans Japanese, Sans-Serif'
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
  var chart = document.querySelector('#select-comp-store');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})(); 

// evaluation-score-group

(function() {
  var options = {
    series: [{
      name: '牛鍋 吉田家 - 東京都',
      data: [58, 94, 85, 42, 95, 83, 74, 90, 93, 72, 82, 84, 90, 79, 83, 68, 78, 92]
    }, {
      name: '牛鍋 吉田家 - ブランド平均',
    data: [73, 74, 85, 71, 82, 91, 75, 83, 89, 73, 82, 74, 82, 89, 73, 88, 83, 72]
    }],
    chart: {
      type: 'bar',
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
    colors: ['#FFA50E', 'rgba(154, 159, 165, .3)'],
    dataLabels: {
      enabled: false
    },
    legend: {
        show: true,
        position: 'top',
        offsetY: 0
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
        show: true
      }
    },
    grid: {
      show: true,
      strokeDashArray: 0,
      padding: {
        top: 0,
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
    tooltip: {
      shared: true,
      intersect: false
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      },
    }
  };
  var chart = document.querySelector('#evaluation-score-group');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();

// evaluation-score-store

(function() {
  var options = {
    series: [{
      name: '牛鍋 吉田屋 八丁堀店',
      data: [58, 94, 85, 42, 95, 83, 74, 90, 93, 72, 82, 84, 90, 79, 83, 68, 78, 92]
    }, {
      name: '全店舗平均',
    data: [73, 74, 85, 71, 82, 91, 75, 83, 89, 73, 82, 74, 82, 89, 73, 88, 83, 72]
    }],
    chart: {
      type: 'bar',
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
    colors: ['#FFA50E', 'rgba(154, 159, 165, .3)'],
    dataLabels: {
      enabled: false
    },
    legend: {
        show: true,
        position: 'top',
        offsetY: 0
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
    tooltip: {
      shared: true,
      intersect: false
    },
    events: {
      dataPointSelection: function(event, chartContext, config) {
        console.log(config.dataPointIndex)
      },
    }
  };
  var chart = document.querySelector('#evaluation-score-store');

  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();