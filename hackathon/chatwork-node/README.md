#Chatwork API & node-cron

Sample for regularly chatwork post
(定期的にチャットワークに投稿するサンプル)

#How to Use
* API KEY: Chatwork API KEY (チャットワークのAPIキー)
* cronTime: CronSetting like crontab (cronの設定, crontabみたいに書ける)
* room_id: Using chatroom id (投稿先のチャットルームID)

```
var message = 'SampleText';
var room_id = '----------------------';
var cronTime = "* * * * * *";

module.exports = {
	'cw':{
		'API_KEY': '-------------------------',
		'room_id': room_id,
		'message': message
	},
	'cronTime': cronTime
};
```