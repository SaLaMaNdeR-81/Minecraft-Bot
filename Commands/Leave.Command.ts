import Mineflyer from 'mineflayer'
import Bot from '../Bot'

import { BotConfig } from '../Config'

module.exports = {

    Name : 'ByBy',
    Command : 'byby',
    Description : "",
    Active: true,

    async Execute(Sender:any,Message:any){

        await Bot.chat("!GoodBy Darling. :)")
        await Bot.end()
        
    }

}
