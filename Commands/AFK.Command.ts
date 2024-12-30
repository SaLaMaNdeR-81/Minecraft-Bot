import { mineflayer as mineflayerViewer } from 'prismarine-viewer';
import Bot from '../Bot'

module.exports = {

    Name : 'AFK',
    Command : 'AFK',
    Description : "",
    Active: true,

    async Execute(Sender:any,Message:any){

        Bot.chat("AFK Mod On.")
        const TimeOut = 2500
        // Bot.lookAt(Entity.position.offset(0, Entity.height, 0));

        const MoveForward = ()=>{
            Bot.setControlState("forward",true)
            setTimeout(()=>{ Bot.setControlState("forward",false);MoveRight() },TimeOut)
        }
        const MoveRight = ()=>{
            Bot.setControlState("right",true)
            setTimeout(()=>{ Bot.setControlState("right",false);MoveBackward() },TimeOut)
        }
        const MoveBackward = ()=>{
            Bot.setControlState("back",true)
            setTimeout(()=>{ Bot.setControlState("back",false);MoveLeft() },TimeOut)
        }
        const MoveLeft = ()=>{
            Bot.setControlState("left",true)
            setTimeout(()=>{ Bot.setControlState("left",false);MoveForward() },TimeOut)
        }
        MoveForward()
        
    }

}
