const mqtt = require("mqtt");

const cliente = mqtt.connect("mqtt://mqtt-dashboard.com")

cliente.on("connect", () => {
    console.log("conectado");
    cliente.subscribe("eduardo/pratica", (error) => {
        if (error) {
            console.log("erro a se conectar com o topico");
        }
    })

})

cliente.on("message", (topico, mensagem) => {
    console.log(`topico ${topico}`);
    console.log(`mensagem ${mensagem}`)

})