import {Box} from './ui/box';
import React, {useState, useRef} from 'react';
import {View, FlatList, Dimensions, Text, StyleSheet} from 'react-native';
import {Image} from './ui/image';
import { Heading } from './ui/heading';
import { HStack } from './ui/hstack';
import { Button, ButtonIcon, ButtonText } from './ui/button';
import LinearGradient from 'react-native-linear-gradient';
import { AddIcon } from './ui/icon';

const {width} = Dimensions.get('window'); // Récupérer la largeur de l'écran pour dimensionner chaque slide

const images = [
    {id: 1, src: require('@/assets/images/slider/slide_1.png')}, // Exemple d'images locales
    {id: 2, src: require('@/assets/images/slider/slide_2.png')},
    {id: 3, src: require('@/assets/images/slider/slide_3.png')},
];

const ImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Index actif de l'image
    const flatListRef = useRef(null);

    // Fonction pour gérer le changement de slide
    const onScrollEnd = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width); // Calcule l'index de l'image active
        setActiveIndex(currentIndex);
    };

    return (
        <Box className="w-full h-[400px] relative">
            {/* FlatList pour afficher les images */}
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

            <Box className='absolute z-20 bottom-0 w-full px-4 flex flex-col gap-8 mb-8'>
                <HStack reversed={false} className="flex">
                    <Box className="w-1/2 flex items-end pr-2">
                        <Heading>My List</Heading>
                    </Box>
                    <Box className="w-1/2 flex pl-2">
                        <Heading>Discover</Heading>
                    </Box>
                </HStack>

                <HStack reversed={false} className="flex z-10">
                    <Box className="w-1/2 pr-2">
                        <Button
                            className="btn flex-grow h-auto rounded-lg gap-4"
                            size="lg"
                            action="secondary">
                            <ButtonIcon as={AddIcon} className="dark:text-white" />
                            <ButtonText className="dark:text-white">
                                Wishlist
                            </ButtonText>
                        </Button>
                    </Box>
                    <Box className="w-1/2 pl-2">
                        <Button
                            className="btn flex-grow h-auto rounded-lg"
                            size="lg">
                            <ButtonText className='text-secondary-500'>Details</ButtonText>
                        </Button>
                    </Box>
                </HStack>

                {/* Pagination / Indicateur */}
                <HStack space="md" className='flex justify-center items-center w-full mx-auto'>
                    {images.map((_, index) => (
                        <Box
                            key={index}
                            className={ activeIndex === index ? 'h-2 w-2 rounded-full bg-primary-500' : 'h-2 w-2 rounded-full bg-white'}
                        />
                    ))}
                </HStack>
            </Box>
            <Box className='absolute bottom-0 z-10 w-full h-40'>
                <LinearGradient
                    colors={['transparent', 'black']} // Gradient from transparent to black
                    style={styles.gradient}
                    start={{ x: 0.5, y: 0 }} // Start of the gradient (center top)
                    end={{ x: 0.5, y: 0.6 }}   // End of the gradient (center bottom)
                >                    
                </LinearGradient>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width, // Prend la largeur de l'écran
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300, // Hauteur de l'image (modifiable selon vos besoins)
        resizeMode: 'cover',
    },
    pagination: {
        flexDirection: 'row',
        bottom: 10, // Positionne la pagination en bas
        alignSelf: 'center',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});

export default ImageSlider;