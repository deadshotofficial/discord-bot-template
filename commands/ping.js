module.exports = {
    name: 'ping',
    description: 'Sends The Client Ping.',
    async execute(interaction, client) {
        await interaction.reply({ content: 'Pinging...' });
		const msg = await interaction.fetchReply();
		const latency = msg.createdTimestamp - interaction.createdTimestamp;
		interaction.editReply({ content: `**Latency**: \`${latency}ms\` | **Ping**: \`${Math.round(client.ws.ping)}ms\`` });
    }
}