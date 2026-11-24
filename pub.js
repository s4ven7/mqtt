const mqtt = require("mqtt")

const client = mqtt.connect("mqtt://mqtt-dashboard.com")

client.on("connect",()=>{
    const payload = JSON.stringify("ligar")

    client.publish("casa-eduardo/sala/lampada",payload,()=>{
        console.log("Mensagem enviada: ",payload);
        
        client.end()
    })
})