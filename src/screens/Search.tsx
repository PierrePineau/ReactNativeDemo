import Layout from '@/components/Layout';
import { Box } from '@/components/ui/box';
import React, {Component, PropsWithChildren, useContext} from 'react';
import {
    ScrollView,
} from 'react-native';

export default function Search(): React.JSX.Element {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            decelerationRate="fast">
            <Box className="bg-white dark:bg-black min-h-full">
                <Layout>
                </Layout>
            </Box>
        </ScrollView>
    );
}
