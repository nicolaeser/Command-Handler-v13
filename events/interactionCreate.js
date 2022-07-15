module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};

/*
############################################################################
#                    Command Handler v13 Template                          #
#               https://github.com/nilasystem/command-handler-v13/         #
############################################################################
*/