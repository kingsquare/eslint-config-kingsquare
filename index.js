module.exports = {
	"parser": "babel-eslint", // https://github.com/eslint/eslint/issues/4683#issuecomment-284146481
	"extends": "airbnb",
	"rules": {
		"react/jsx-filename-extension": [0],
		"react/prefer-stateless-function": [0],
		"react/react-in-jsx-scope": [0],
		"global-require": [1],
		"comma-dangle": [0],
		"no-param-reassign": [0], // e.g. reduce array to object
		"no-underscore-dangle": [0],
		"default-case": [0], // no default case in a switch is fine...
		"max-len": ["error", 120, {
			"ignoreTemplateLiterals": true,
			"ignorePattern": "\\s*<" //jsx hack https://twitter.com/timtyrrell/status/689912501165658112
		}],
        "import/no-extraneous-dependencies": [
            "error",
            { "devDependencies": true, "optionalDependencies": true, "peerDependencies": true }
        ],
        'import/extensions': ['error', 'always', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }]
	},
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
            }
        },
        react: {
            pragma: 'React',
            version: '16.0'
        }
    }
};
