module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        console.log("############################################################################")
		console.log(`#              Ready! Logged in as ${client.user.tag}                      #`);
        console.log("############################################################################")
	},
};

/*
############################################################################
#                    Command Handler v13 Template                          #
#               https://github.com/nilasystem/command-handler-v13/         #
############################################################################
*/