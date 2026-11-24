const mqtt = require("mqtt")
const topico = "casa-eduardo/sala/lampada"
const client = mqtt.connect("mqtt://mqtt-dashboard.com")

client.on("connect", () => {
    console.log("conectado com o broker");

    client.subscribe(topico, (error) => {
        if(!error){
            console.log(`conectado a ${topico}`);
        }else{
            console.log("verifique a url");
        }
    })
    client.on("message",(topico,mensagem)=>{
        console.log(`mensagem do topico ${topico}`)
        console.log(mensagem.toString());
        
    })
})