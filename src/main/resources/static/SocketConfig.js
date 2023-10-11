
var stompClient = null;

function connect(){
    var socket = new SockJS('/stomp-endpoint');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame){
        stompClient.subscribe('/topic/chat', function (message){
            console.log(message);
        });
    });
}
function sendMessage(){
    stompClient.send('app/hello',{},'hello')
}