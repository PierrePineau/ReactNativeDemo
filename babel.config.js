module.exports = {
    presets: [
        // 'module:@react-native/babel-preset',
        "module:@react-native/babel-preset",
        'nativewind/babel',
    ],
    plugins: [
        ["@babel/plugin-transform-class-properties", { "loose": true }],
        ["@babel/plugin-transform-optional-chaining", { "loose": true }],
        ["@babel/plugin-transform-private-methods", { "loose": true }],
        [
            'module:react-native-dotenv', {
              "moduleName": "@env",
              "path": ".env",
              "safe": false,
              "allowUndefined": true
            }
        ],
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    '@': './src',
                    '@/components': './src/components',
                },
            },
        ]
    ],
};
