import React, {useContext} from 'react';

import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {Button, ButtonIcon} from '@/components/ui/button';
import {ButtonText} from '@/components/ui/button';
import Layout from '@/components/Layout';
import {HStack} from '@/components/ui/hstack';
import {Box} from '@/components/ui/box';
import {Heading} from '@/components/ui/heading';
import Category from '@/components/Category';
import Pub from '@/components/Pub';
import ImageSlider from '@/components/ImageSlider';

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

const DATA = [
    {
        id: '1',
        active: false,
    },
    {
        id: '2',
        active: true,
    },
    {
        id: '3',
        active: false,
    },
    {
        id: '4',
        active: false,
    },
    {
        id: '5',
        active: false,
    },
];

export default function Home(): React.JSX.Element {

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" decelerationRate="fast">
            <Box className='bg-white dark:bg-black'>
                <ImageSlider />
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

                    <Category title="Marvel studios" filters={{
                        'genres' : [28],
                    }} />
                    <Category title="Best Movies" filters={{
                        "sort_by": "vote_average.desc",
                        "showStars" : true,
                    }} />
                    <Pub
                        image={require('@/assets/images/pub_black_friday.png')}
                        title="Black friday is here!"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Viverra sociis pulvinar auctor nibh nibh iaculis id."
                    />
                </Layout>
            </Box>
        </ScrollView>
    );
}
