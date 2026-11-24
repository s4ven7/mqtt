//importa a biblioteca e todas as funções em uma const
const mqtt = require("mqtt")

//faz a conecção do broker
const client = mqtt.connect("mqtt://mqtt-dashboard.com")

//executa quando conecta
client.on("connect",()=>{
    console.log("Conectado ao Broke")

    //envia um pedido de sub ao topico   
    client.subscribe("teste/eduardo",(error)=>{
        // se erro for "nulo" a assinatura foi feita
        if (!error){
            console.log("Inscrito no topico: teste/eduardo");
        }else{
            console.log("verifique a url");
        }
    })
})
//recebe iformações do topico inscrito
client.on("message",(topic,message)=>{
    console.log(`mensagem recebida no topico ${topic}:`);
    console.log(message.toString());
    
    
})