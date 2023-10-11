var stompClient = null;

function connect() {
    var socket = new SockJS('/stomp-endpoint');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/chat', function (message) {
            showMessage(JSON.parse(message.body))
        });
    });
}
function showMessage(message){
    $("#messages").append("<tr><td>" + message.owner +":"+"</td><td>"+message.message+"</td></tr>");}

function sendMessage(){
    var name = document.getElementById('nameInput').value;
    var message = document.getElementById('messageInput').value;
    stompClient.send('/app/hello', {}, JSON.stringify({
        owner: name,
        message: message
    }))
}