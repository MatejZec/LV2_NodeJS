var rando = require("./slucajanBroj");
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1');
client.on('connect', function() {
        console.log('Publisher is online!');
        setInterval(function() {
                client.publish('temp', 'Slucajni brojevi: ' + rando.dajSlucajanBroj(10,1000));
                console.log('Message sent!');
        }, 5000);
});