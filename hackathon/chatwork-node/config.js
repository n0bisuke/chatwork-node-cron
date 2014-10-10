//投稿メッセージ
var message = '＝＝＝【集中タイムがはじまります】＝＝＝';
var room_id = '*********';
//投稿する時間
var h = 11;
h = h - 9;
var cronTime = "0 30 "+h+" * * 1-5"; //平日11:30に投稿
//var cronTime = "* * * * * *"; //毎秒

module.exports = {
	'cw':{
		'API_KEY': '**************************',
		'room_id': room_id,
		'message': message
	},
	'cronTime': cronTime
};