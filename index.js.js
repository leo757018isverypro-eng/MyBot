const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds] 
});

// When the bot is ready, run this code
client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});

// Log in to Discord with your token
// Ensure you have a process.env.TOKEN set on your host!
client.login(process.env.TOKEN);