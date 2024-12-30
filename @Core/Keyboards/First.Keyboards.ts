import { InlineKeyboardMarkup } from "node-telegram-bot-api";

const MainMenu:InlineKeyboardMarkup = {
inline_keyboard:[
    [
        {text:"Form 1️⃣",callback_data:"First.Keyboard.Form1"},
        {text:"Form 2️⃣",callback_data:"First.Keyboard.Form2"},
        {text:"Form 3️⃣",callback_data:"First.Keyboard.Form3"},
    ],[
        {text:"Form 1️⃣",callback_data:"First.Keyboard.Form1"},
        {text:"Form 2️⃣",callback_data:"First.Keyboard.Form2"},
        {text:"Form 3️⃣",callback_data:"First.Keyboard.Form3"},
    ]
]
}

const Form1:InlineKeyboardMarkup = {
inline_keyboard:[[
    {text:"⬅️Back to Main Menu",callback_data:"First.Keyboard.MainMenu"},
]]
}

const Form2:InlineKeyboardMarkup = {
inline_keyboard:[[
    {text:"⬅️Back to Main Menu",callback_data:"First.Keyboard.MainMenu"},
]]
}

const Form3:InlineKeyboardMarkup = {
inline_keyboard:[[
    {text:"⬅️Back to Main Menu",callback_data:"First.Keyboard.MainMenu"},
]]
}

export default {MainMenu,Form1,Form2,Form3};
// export default Keyboard;