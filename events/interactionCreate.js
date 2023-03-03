const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction, client) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`[WARNING] No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction, client);
		} catch (error) {
			console.error(`[WARNING] Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};