import { mineflayer as mineflayerViewer } from 'prismarine-viewer';
import Bot from '../Bot'

module.exports = {
    Name : 'WebSocket',
    Description : "",
    Active: true,

    async Execute(){

        Bot.once('spawn', () => {
            mineflayerViewer(Bot, { port: 3007, firstPerson: true });
            console.log('Viewer is running at http://localhost:3007');
        });
        
    }
}