import Mineflyer from 'mineflayer'
import Bot from '../Bot'

module.exports = {
    Name : 'Look',
    Description : "",
    Active: false,

    async Execute(){

        Bot.on("move", ()=>{
            let Entity = Bot.nearestEntity();
            if (Entity) {
                Bot.lookAt(Entity.position.offset(0, Entity.height, 0));
            }
        });
        
    }
}