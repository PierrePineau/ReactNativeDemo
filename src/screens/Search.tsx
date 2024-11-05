import Layout from '@/components/Layout';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { AuthContext } from '@/providers/AuthProvider';
import React, {Component, PropsWithChildren, useContext} from 'react';
import {
    ScrollView,
} from 'react-native';

export default function Search(): React.JSX.Element {
    const {logout} = useContext(AuthContext);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            decelerationRate="fast">
            <Box className="bg-white dark:bg-black">
                <Layout>
                    {/* // On va chercher une image en local  */}

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
