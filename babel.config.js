module.exports = {
    presets: [
        // 'module:@react-native/babel-preset',
        'module:metro-react-native-babel-preset',
        'nativewind/babel',
    ],
    plugins: [
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
