module.exports = {
	"parser": "babel-eslint", // https://github.com/eslint/eslint/issues/4683#issuecomment-284146481
	"extends": "airbnb",
	"rules": {
		"react/jsx-filename-extension": [0],
		"react/prefer-stateless-function": [0],
		"react/react-in-jsx-scope": [0],
		"global-require": [0],
		"comma-dangle": [0],
		"no-param-reassign": [0],
		"no-underscore-dangle": [0],
		"max-len": ["error", 120, {
			"ignorePattern": "\\s*<" //jsx hack https://twitter.com/timtyrrell/status/689912501165658112
		}]
	}
};
