/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */
(function (io) {
  // as soon as this file is loaded, connect automatically, 
  var socket = io.connect();
  if (typeof console !== 'undefined') {
    log('Connecting to Sails.js...');
  }

  socket.on('connect', function socketConnected() {

    // Listen for Comet messages from Sails
    socket.on('message', function messageReceived(message) {

      //messageを受け取ったらビューのdiv(message_list)にメッセージの
      //リストを追加
      addMessage(message.data.message);
      ///////////////////////////////////////////////////////////
      // Replace the following with your own custom logic
      // to run when a new message arrives from the Sails.js
      // server.
      ///////////////////////////////////////////////////////////
      log('New comet message received :: ', message);
      //////////////////////////////////////////////////////

    });
    ///////////////////////////////////////////////////////////
    // Here's where you'll want to add any custom logic for
    // when the browser establishes its socket connection to 
    // the Sails.js server.
    ///////////////////////////////////////////////////////////
    log(
        'Socket is now connected and globally accessible as `socket`.\n' + 
        'e.g. to send a GET request to Sails, try \n' + 
        '`socket.get("/", function (response) ' +
        '{ console.log(response); })`'
     );
    ///////////////////////////////////////////////////////////

    //メッセージ送信時のアクション呼出し
    $('#send').click(function(){
          socket.post('/message', {'message':$('#message').val()},function(res){});
          $('#message').val('');
    });
  });

  //getでメッセージの一覧を取得して表示
  socket.get('/message',{},function(res){
    $.each(res,function(){addMessage(this.message);});
  });

  // Expose connected `socket` instance globally so that it's easy
  // to experiment with from the browser console while prototyping.
  window.socket = socket;
  // Simple log function to keep the example simple
  function log () {
    if (typeof console !== 'undefined') {
      console.log.apply(console, arguments);
    }
  }

  function addMessage(message){
     var chatMsg = '<li>'+escapeMessage(message)+'</li>';
     $('#message_list').append(chatMsg);
  }

  function escapeMessage(msg){
    return $('<div/>').text(msg).html();
  }
})(
  // In case you're wrapping socket.io to prevent pollution of the global namespace,
  // you can replace `window.io` with your own `io` here:
  window.io
);