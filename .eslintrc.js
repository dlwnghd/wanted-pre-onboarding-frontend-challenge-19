module.exports = {
	rules: {
		semi: ['error', 'always'],
	},
	env: {
		browser: true,
		es6: true,
	},
	parserOptions: {
		ecmaFeatures: {
			modules: true,
			tsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/jsx-uses-vars': 'error',
		'react/jsx-uses-react': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'ignore',
				named: 'never',
				asyncArrow: 'always',
			},
		],
	},
}
