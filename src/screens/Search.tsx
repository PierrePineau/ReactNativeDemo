import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
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

export default function Search(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        {/* <View
              style={{
                  backgroundColor: isDarkMode ? Colors.black : Colors.white,
              }}>
              <Section title="Step Lorem">
                  Edit oqiyuybzbruf <Text style={styles.highlight}>App.tsx</Text> to
                  change this screen and then come back to see your edits.
              </Section>
              <Section title="See Your Changes">
                  <ReloadInstructions />
              </Section>
              <Section title="Debug">
                  <DebugInstructions />
              </Section>
              <Section title="Learn More">
                  Read the docs to discover what to do next:
              </Section>
              <LearnMoreLinks />
              </View> */}
          </ScrollView>
    </View>
  );
}
