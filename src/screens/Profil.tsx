import Layout from '@/components/Layout';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { AuthContext } from '@/providers/AuthProvider';
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

export default function Profil(): React.JSX.Element {

    const {logout} = useContext(AuthContext);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            decelerationRate="fast">
            <Box className="bg-white dark:bg-black">
                <Layout>
                    {/* // On va chercher une image en local  */}
                    {/* <Splide aria-label="My Favorite Images">
                        <SplideSlide>
                            <Image
                                size="md"
                                source={require('@/assets/images/home.png')}
                                alt="image"
                                className="w-full h-96 object-cover object-center"
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <Image
                                size="md"
                                source={require('@/assets/images/home.png')}
                                alt="image"
                                className="w-full h-96 object-cover object-center"
                            />
                        </SplideSlide>
                    </Splide> */}

                    
                    <Button
                        className="btn mt-8 h-auto rounded-lg"
                        size="lg"
                        onPress={logout}>
                        <ButtonText>Logout</ButtonText>
                    </Button>
                </Layout>
            </Box>
        </ScrollView>
    );
}
