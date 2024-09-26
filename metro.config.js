const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro')
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {
    resolver: {
        // On ajoute les chemins d'alias pour @ et @/components qui pointent vers le dossier src
        extraNodeModules : {
            '@': __dirname + '/src',
            '@/components': __dirname + '/src/components',
        },
    },
});

module.exports = withNativeWind(config, { input: './global.css'})
