import TelegramBot,{Message} from "node-telegram-bot-api";
import Mineflayer from 'mineflayer'
import path from 'path'
import fs from 'fs'

import Bot from './Bot'
// import TBot from './Telegram'

Bot.once('spawn',()=>{
    Bot.chat("Hello everyone! :)")
    // Bot.setControlState('forward', true);
    // setTimeout(() => {
    //   Bot.setControlState('forward', false);
    //   console.log('Bot moved 1 block forward!');
    // }, 1000);
})

var walking = false;
Bot.on("entityHurt", (entity)=>{
    if (entity != Bot.entity) return;
    walking = !walking;
    Bot.setControlState("forward", walking);
});

Bot.on('death',()=>{
    Bot.respawn()
})

// =============              =============
//              ==============
//              EventHandler
//              ==============
// =============              =============

const EventsFiles = fs.readdirSync(path.join('./Events')).filter(file=>file.endsWith('.Event.ts'))
let EventsList = []

for(const EventFile of EventsFiles){
    const FixEventFile = EventFile.slice(0,-3)
    const Event =  require(`./Events/${FixEventFile}`);
    EventsList.push(Event)
}

console.log("");
console.log(`Total : ${EventsList.length}`);
console.log(`Active Events :`);
console.table(EventsList)

EventsList.forEach((Event)=>{
    if(!Event.Active) return
    Event.Execute()
})

// =============              =============
//              ==============
//              CommandHandler
//              ==============
// =============              =============

const CommandsFiles = fs.readdirSync(path.join('./Commands')).filter(file=>file.endsWith('.Command.ts'))
let CommandsList = []

for(const CommandFile of CommandsFiles){
    const FixCommandFile = CommandFile.slice(0,-3)
    const Command =  require(`./Commands/${FixCommandFile}`);
    CommandsList.push(Command)
}

console.log("");
console.log(`Total : ${CommandsList.length}`);
console.log(`Active Commands :`);
console.table(CommandsList)

Bot.on('chat',(Sender,Message)=>{
    if (Sender === Bot.username) return
    const FoundCmd = CommandsList.find(Cmd=>Cmd.Command == Message)
    if (!FoundCmd) return 
    FoundCmd.Execute(Sender,Message)
})