const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Test CMD'),
	async execute(interaction) {
		await interaction.reply(':white_check_mark: Test');
	},
};

/*
############################################################################
#                    Command Handler v13 Template                          #
#               https://github.com/nilasystem/command-handler-v13/         #
############################################################################
*/