module.exports = {
	// database: 'mongodb+srv://abjklk:colonydb@cluster0-wcdm9.gcp.mongodb.net/colonydb?retryWrites=true&w=majority',
	database: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/colonydb',
	secret: 'gaurav',
}