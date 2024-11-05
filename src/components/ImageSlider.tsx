import React, {useState, useRef} from 'react';
import {View, FlatList, Dimensions, StyleSheet} from 'react-native';
import {Box} from './ui/box';
import {Image} from './ui/image';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const images = [
    {id: 1, src: require('@/assets/images/slider/slide_1.png')},
    {id: 2, src: require('@/assets/images/slider/slide_2.png')},
    {id: 3, src: require('@/assets/images/slider/slide_3.png')},
];

const ImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const onScrollEnd = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setActiveIndex(currentIndex);
    };

    return (
        <Box className="w-full h-[400px] relative">
            <FlatList
                data={images}
                renderItem={({item}) => (
                    <View style={styles.imageContainer}>
                        <Image
                            size="md"
                            source={item.src}
                            alt="image"
                            className="w-full h-[400px] object-cover object-center"
                        />
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={onScrollEnd}
                ref={flatListRef}
                decelerationRate="fast"
                scrollEventThrottle={16}
            />
            <Box className='absolute bottom-0 z-10 w-full h-40'>
                <LinearGradient
                    colors={['transparent', 'black']}
                    style={styles.gradient}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 0.6 }}
                />
            </Box>
        </Box>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ImageSlider;
