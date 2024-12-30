import Mineflyer from 'mineflayer'
import * as pathfinder from "mineflayer-pathfinder";
const { GoalNear, GoalXZ ,GoalNearXZ } = pathfinder.goals;
import Bot from '../Bot'


module.exports = {

    Name : 'Test',
    Command : 'test',
    Description : "",
    Active: false,

    async Execute(Sender:any,Message:any){

        // if (!Bot.players[Sender] || Sender === Bot.username) return; // The player doesn't exist
    //   if(Sender !== 'momahi') return;

      if (Message.startsWith("goto")) {
        Bot.pathfinder.setGoal(null);

        const args = Message.trim().split(/ +/g).slice(1);
        if(args.length === 0) return Bot.chat('You need to specify a player or coordinates.');

        if (args.length === 1) {
          let target = Bot.players[args[0]]?.entity;
          if (!target)
            return Bot.chat(
              `${args[0]} is not online or out of my render distance.`
            );
          //if(target.Sender === Bot.Sender) return Bot.chat(`I am already at my own position.`);

          Bot.chat(
            `Going to "${args[0]}", they are ${Math.round(
              Bot.entity.position.distanceTo(target.position)
            )} blocks away.`
          );

          let pos = target.position;
          await Bot.pathfinder.setGoal(new GoalNear(pos.x, pos.y, pos.z, 1), true); // true for dynamic..

          return Bot.chat(`Arrived at desination.`) //${target.Sender} (At ${Math.round(pos.x)}, ${Math.round(pos.y)}, ${Math.round(pos.z)})`)

        }

        if (args.length === 3) {
          var pos = {
            x: parseInt(args[0]),
            y: parseInt(args[1]),
            z: parseInt(args[2]),
          };

          var goal:any = isNaN(pos.y)
            ? new GoalNearXZ(pos.x, pos.z, 2)
            : new GoalNear(pos.x, pos.y, pos.z, 2);

          if (!isNaN(pos.y)) {
            goal = new GoalXZ(pos.x, pos.z);
          }

          Bot.chat(`Trying to go to ${pos.x}, ${pos.y}, ${pos.z}`);

          await Bot.pathfinder.setGoal(goal, false);

          return Bot.chat(`I have arrived at ${Math.round(pos.x)}, ${Math.round(pos.y)}, ${Math.round(pos.z)}`)

        }
      }
        
    }

}
