const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')
module.exports = {
    name: "invite",
    run: async (client, message, args) => {
        let btn = new MessageButton()
            .setLabel('Invite Me!');
            .setStyle('url')
            .setURL('-yourbotinvitelink-')
            .setID('click_me');

        await message.channel.send('Want to Invite Me?', btn);

    }
}
