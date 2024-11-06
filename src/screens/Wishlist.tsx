import Layout from '@/components/Layout';
import { Box } from '@/components/ui/box';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';


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

export default function Wishlist(): React.JSX.Element {
  return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        decelerationRate="fast">
        <Box className="bg-white dark:bg-black min-h-full">
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
            </Layout>
        </Box>
    </ScrollView>
  );
}