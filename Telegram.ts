import TelegramBot,{Message} from "node-telegram-bot-api";
import {Config} from './Config'

const Bot = new TelegramBot(Config.Telegram_Token, {
    polling: true,
    
});

export default Bot;