import {Box} from './ui/box';
import {Heading} from './ui/heading';
import {HStack} from './ui/hstack';
import {Text} from './ui/text';
import ApiManager from '../hooks/ApiManager';
import {useEffect, useRef, useState} from 'react';
import {Image} from './ui/image';
import {FlatList} from 'react-native';
import {StyleSheet} from 'nativewind';
import { VStack } from './ui/vstack';

const Category = ({title, filters}: any) => {
    const [movies, setMovies] = useState<any>([]);
    const flatListRef = useRef(null);
    // const [showStars, setShowStars] = useState<boolean>(false);

    // setShowStars(filters.showStars ? filters.showStars : false);

    useEffect(() => {
        const fetchMovies = async () => {
            const api = ApiManager();
            const data = await api.getMovies({filters});
            setMovies(data.results);
        };

        if (movies.length === 0) {
            fetchMovies();
        }
    }, []);

    return (
        <Box>
            <HStack
                reversed={false}
                className="flex justify-between items-center mb-8">
                <Box className="">
                    <Heading size="xl" className="dark:text-white">
                        {title}
                    </Heading>
                </Box>
                <Box className="">
                    <Text className="text-primary-500 text-lg">See more</Text>
                </Box>
            </HStack>

            <FlatList
                data={movies}
                renderItem={({item}) => (
                    <VStack className="w-40 mr-4" space='md'>
                        <Box className="w-full h-52 overflow-hidden rounded-lg bg-slate-900">
                            <Image
                                size="md"
                                source={{
                                    uri:
                                        'https://image.tmdb.org/t/p/w300_and_h450_bestv2' +
                                        item.backdrop_path,
                                }}
                                alt={item.original_title}
                                className="w-full h-full object-cover object-center"
                            />
                        </Box>
                        <Heading className="text-base truncate w-full dark:text-white">
                            <Text>{item.original_title}</Text>
                        </Heading>
                    </VStack>
                )}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                ref={flatListRef}
                decelerationRate="fast"
                scrollEventThrottle={16}
                style={styles.list}
                maxToRenderPerBatch={3} // Add this line to limit the number of items rendered per batch
            />
        </Box>
    );
};

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        gap: 4,
    },
});

export default Category;
