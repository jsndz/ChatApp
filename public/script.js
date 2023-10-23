var socket = io();

var btn = document.getElementById('btn');
var inputmsg = document.getElementById('newmsg');
var msglist = document.getElementById('limsg')


btn.onclick = function exec(){
    socket.emit('msg_send',{
        msg:inputmsg.value
    });
}

socket.on('allsend',(data)=>{
    let limsg = document.createElement('li')
    msglist.innerText = data.msg;
    msglist.appendChild(limsg)
})
