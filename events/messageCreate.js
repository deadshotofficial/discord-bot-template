const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(client, message) {
		if (message.author.bot || !message.guild) return;

        if (!client.application?.owner) await client.application?.fetch();

        if (message.content === '!deploy' && message.author.id === client.application?.owner?.id) {

            await message.guild.commands.set(client.commands).then(() => {
                message.reply('Commands Deployed.');
            }).catch(err => {
                message.reply('Could not deploy commands. Make sure the bot has the application.commands permission.');
                console.error(err);
            });

        }
	},
};