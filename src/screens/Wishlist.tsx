import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

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
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            decelerationRate="fast">
            <Box className="bg-white dark:bg-black min-h-full">
                {/* <Layout>
                </Layout> */}
            </Box>
        </ScrollView>
  );
}