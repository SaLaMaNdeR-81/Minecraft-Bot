import { createBot, Bot } from 'mineflayer';
import { mineflayer as mineflayerViewer } from 'prismarine-viewer';

import { BotConfig } from './Config';

const Bot: Bot = createBot(BotConfig);

export default Bot;