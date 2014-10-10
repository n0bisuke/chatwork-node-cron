var cronJob = require('cron').CronJob;
var cw = require('./cw');
var cronTime = require('./config.js').cronTime;

var job = new cronJob({
  cronTime: cronTime,
  onTick: function(){ //指定時に実行したい関数
    console.log('onTick!', new Date());
    cw();
  },
  onComplete: function() { //ジョブの完了または停止時に実行する関数
    console.log('onComplete!');
  },
  start: false, // コンストラクタを終する前にジョブを開始するかどうか
  timeZone: "Japan/Tokyo" //タイムゾーン
});
 
job.start();