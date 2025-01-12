require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Bot ${client.user.tag} está online!`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('Pong!');
    }

    if (message.content.toLowerCase() === 'sexo') {
        message.reply('BONK!');
    }

    if (message.content === '!queroamorreciproco') {
        message.reply('Infelizmente não faço milagres');
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
