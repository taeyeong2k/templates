// pnpm init 
// change package.json main to src/index.js
// pnpm i discord.js 
// pnpm i dotenv 
// pnpm i -g nodemon
// nodemon src/index.js

const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config();
const client = new Client( {
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

client.on('ready', (c) => {
    console.log(`Logged in as ${c.user.tag}!`);
});

client.login(process.env.DISCORD_BOT_TOKEN);
