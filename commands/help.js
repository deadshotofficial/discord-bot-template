const Discord = require('discord.js');
const { MessageMenuOption, MessageMenu } = require("discord-buttons");

module.exports = {
    name: "help",
    aliases: ["helpmenu", "commands"],
    
    run: async (client, message, args) => {
    
//====================================================================================SOME EMBEDS=============================================================================================
    
        const embed = new Discord.MessageEmbed()
        .setTitle('Text Goes Here!')
        .setDescription('Some Good Description!');
        
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Text Goes Here!');
        
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Text Goes Here!');
        
//====================================================================================OPTIONS FOR MENU=============================================================================================        
        
        let option1 = new MessageMenuOption()
        .setLabel('Option1')
        .setEmoji('Emoji_id')
        .setValue('option1')
        .setDescription('Description')
        
        let option2 = new MessageMenuOption()
        .setLabel('Option2')
        .setEmoji('Emoji_id')
        .setValue('option2')
        .setDescription('Description')
        
        let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Click to View the Select Help Menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2)
        
//====================================================================================PROCESS=============================================================================================

        const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === msg.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }
        
        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit("<:redCross:796258564640866374> | Uh, Oh! The Help Menu Expired, Retype the Command to View Again")
    })

    }
};
