module.exports = (ctx) => ({
	plugins: [
		require('autoprefixer')(ctx.plugin),
	]
});
