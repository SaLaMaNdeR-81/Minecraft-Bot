import Mineflyer from 'mineflayer'
import Bot from '../Bot'

module.exports = {

    Name : 'Hello',
    Command : 'Hello',
    Description : "",
    Active: true,

    async Execute(Sender:any,Message:any){

        Bot.chat("Dige chekhabar")
        
    }

}
