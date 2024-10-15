module.exports = {
    presets: [
        // 'module:@react-native/babel-preset',
        'module:metro-react-native-babel-preset',
        'nativewind/babel',
    ],
    plugins: [
        "@babel/plugin-transform-class-properties",
        "@babel/plugin-transform-optional-chaining",
        "@babel/plugin-transform-private-methods",
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    '@': './src',
                    '@/components': './src/components',
                },
            },
        ],
    ],
};
