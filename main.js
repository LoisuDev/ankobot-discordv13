const Discord = require('discord.js');
const { Intents } = require('discord.js');
var prefix = "%"
const bot = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
        
    ]
});

bot.commands = new Discord.Collection();
const fs = require('fs');

bot.login("YOUR TOKEN HERE.");

bot.on('ready', () => {
    bot.user.setActivity("%help", {
        type: "LISTENING"
    })
    console.log(`${bot.user.tag} is online.`);
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
};

bot.on('messageCreate', async (message) => {
    if(message.author.bot) return;
    if(message.channel.type === "DM") return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase()
    const command = bot.commands.get(commandName)
        || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(!command) return;

    try {
        command.execute(bot, message, args);
    } catch(error) {
        console.error(error);
        message.reply({
            content: 'there was an error trying to execute that command!'
        })
    }
})
