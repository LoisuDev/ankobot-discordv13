const Discord = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['aide'],
    description: 'A list of my commands!',
    usage: '%help (<command>)',

    execute(bot, message, args) {
        
        const data = [];
        const { commands } = message.client;

        if(!args.length) {
            return message.channel.send({
                embeds: [
                    {
                        color: 'e410d3',
                        title: 'Anko - Command list',
                        description: `You can type %help <command> to get more infos for a specific command!\n\`\`${commands.map(command => command.name).join('\n')}\`\``,
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/avatars/828715499894079488/71d8f1618cc050090428b7a63988f88e.png'
                        },
                        footer: {
                            name: 'help'
                        },
                        image: {
                            url: 'https://cdn.discordapp.com/attachments/897825034431762442/899739161974693888/ezgif.com-gif-maker_5.png'
                        }
                    }
                ]
            })
        };
        
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
        if(!command) {
            return message.channel.send({
                content: 'That is not a valid command!'
            })
        }

        if(!command.aliases) command.aliases = 'None';
        if(!command.description) command.description = 'None';
        if(!command.usage) command.usage = 'None';

        message.channel.send({
            content: `**Name:** ${command.name}\n**Aliases:** ${command.aliases.join(', ')}\n**Description:** ${command.description}\n**Usage:** ${command.usage}`
        })

       // data.push(`**Name:** ${command.name}`);

       // if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
       // if (command.description) data.push(`**Description:** ${command.description}`);
       // if (command.usage) data.push(`**Usage:** ${command.usage}`);
        
        

    }
}