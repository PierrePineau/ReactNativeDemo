import React, {useContext, useState} from 'react';

import {
    FlatList,
    ScrollView,
    Animated,
    Dimensions
} from 'react-native';

import Layout from '@/components/Layout';
import {Box} from '@/components/ui/box';
import Category from '@/components/Category';
import Pub from '@/components/Pub';
import ImageSlider from '@/components/ImageSlider';
import { Button, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { BlurView } from "@react-native-community/blur";
import { useSharedValue } from 'react-native-reanimated';

const indicatorPosition = new Animated.Value(0);

const tabs = [
    {id: 'all', title: 'All'},
    {id: 'romance', title: 'Romance'},
    {id: 'sport', title: 'Sport'},
    {id: 'kids', title: 'Kids'},
    {id: 'horror', title: 'Horror'},
];

export default function Home(): React.JSX.Element {

    // const activeTab = useSharedValue<number>(0);
    const [activeTab, setActiveTab] = useState<number>(0);

    const isActiveTab = (index : number) => {
        return activeTab === index;
    }

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" decelerationRate="fast">
            <Box className='bg-white dark:bg-black'>
                <Box className="absolute z-20 my-4 left-0 right-0 flex items-center">
                    <HStack className='relative rounded-full mx-4 flex p-1 overflow-hidden'>
                        {/* <BlurView
                            style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, opacity: 0.6}}
                            blurType="light"
                            blurAmount={10}
                            reducedTransparencyFallbackColor="white"
                        /> */}
                        <Box className='absolute z-10 left-0 right-0 top-0 bottom-0 bg-secondary-500 opacity-60' />
                        <Box className='relative z-20'>
                            <FlatList
                                data={tabs}
                                horizontal
                                keyExtractor={item => item.id}
                                scrollEnabled={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <Button
                                    className={`rounded-full mx-1 transition-all hover:bg-white focus:bg-white ` + (isActiveTab(index) ? 'dark:bg-white' : 'bg-transparent')}
                                    size="sm"
                                    action="secondary"
                                    onPress={() => {
                                        setActiveTab(index);
                                    }}
                                    >
                                        <ButtonText className={isActiveTab(index) ? 'text-secondary-500 ' : 'dark:text-white'}>
                                            {item.title}
                                        </ButtonText>
                                    </Button>
                                )}
                                />
                             
                        </Box>
                    </HStack>
                </Box>
                <ImageSlider />
                <Layout>
                    <Category title="Marvel studios" filters={{
                        'genres' : [28],
                    }} />
                    <Category title="Best Movies" filters={{
                        "sort_by": "vote_average.asc",
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
