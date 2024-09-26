import React, { useContext } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';
import { AuthContext } from '@/providers/AuthProvider';

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 0,
        paddingHorizontal: 0,
        width: '100%',
        flex: 1,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default function Home(): React.JSX.Element {
    const { logout } = useContext(AuthContext);

    return (
        <View>
            {/* // On va chercher une image en local  */}
            <Image
                size="md"
                source={require('@/assets/images/home.png')}
                alt="image"
                className='w-full h-96 object-cover object-center'
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <Button
                    className="btn mt-8 h-auto"
                    size="lg"
                    onPress={logout}>
                    <ButtonText>Logout</ButtonText>
                </Button>
            </ScrollView>
        </View>
    );
}
