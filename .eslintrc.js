module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'prettier/react',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars-experimental': 0,
		'space-before-function-paren': 0,
		'react/prop-types': 0,
		'react/jsx-handler-names': 0,
		'react/jsx-fragments': 0,
		'react/react-in-jsx-scope': 'off',
		'react/no-unused-prop-types': 0,
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true,
			},
		],
		'import/export': 0,
	},
}
