/**
 * Game Theme Generator
 *
 * Generate a theme for your next game!
 *
 * Note: It works out-of-the-box as a module or CLI
 * Example:
 *			var theme = require('game-theme');
 *			console.log('Theme: ', theme);
 *
 * author: Jonas Hartmann <jonas.hartmann@ymail.com>
 * license: MIT
 */
(function() {
	'use strict';

	var gameThemeModule = {

		/**
		 * Generate (:D) a new game theme
		 */
		generateTheme: function () {
			var gameThemes = this.readThemes('./themes.json');

			var themeIndex = randomInt(0, gameThemes.length);
			var gameTheme = gameThemes[themeIndex];

			return gameTheme;
		},

		/**
		 * Returns true if this file was run using "node filename.js"
		 */
		isMainModule: function () {
			return require.main === module;
		},

		/**
		 * Read themes from a json file
		 */
		readThemes: function (filename) {
			var themeGroups = require(filename);

			var gameThemes = [];
			for (var group in themeGroups) {
				gameThemes = gameThemes.concat(themeGroups[group]);
			}

			return gameThemes;
		},

		displayTheme: function (theme) {
			var colors = require('colors/safe');
			console.log(
				colors.dim.cyan('Theme chosen:'),
				colors.bold.green(gameTheme)
			);
		}
	};

	// ---------
	// Utilities
	//
	var randomInt = function randomInt(low, high) {
		return Math.floor(Math.random() * (high - low) + low);
	};

	// ---------
	// Main
	//
	var gameTheme = gameThemeModule.generateTheme();
	if (gameThemeModule.isMainModule()) {
		gameThemeModule.displayTheme(gameTheme);
	} else {
		module.exports = gameTheme;
	}
})();
