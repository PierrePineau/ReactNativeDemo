import { NavigationContainer, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {Component, PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Profil',
    stack: 'Profil',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Notifications',
    stack: 'Notification',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Confidentialité',
    stack: 'Confidentialité',
  },
];

const Stack = createNativeStackNavigator();

type ItemProps = {
    title: string,
    stack: string,
};

function Item({title, stack}: ItemProps) {
    const navigationRef = useNavigation();
    return (
        <View style={styles.item}>
            <Button
                title={title}
                onPress={() => navigationRef.navigate(stack as never)}
            />
        </View>
    );
};

function SettingStack() {
    return (
        <View style={[styles.sectionContainer, ]}>
            <Section title="Setting">
                <Text style={styles.color}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                </Text>
            </Section>
            <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item title={item.title} stack={item.stack} />}
                    keyExtractor={item => item.id}
                    style={styles.list}
                />
        </View>
    );
}

function ProfilStack() {
    return (
        <View style={[styles.sectionContainer]}>
            <Text>Profil info Screen lorem ipsum</Text>
        </View>
    );
}
function PrivateStack() {
    return (
        <View style={[styles.sectionContainer]}>
            <Text>Private stack</Text>
        </View>
    );
}
function NotificationStack() {
    return (
        <View style={[styles.sectionContainer]}>
            <Text>Notification stcak</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  color: {
  },
  sectionContainer: {
    padding: 12,
    flex: 1,
  },
  sectionTitle: {
    color: '#333',
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    color: '#333',
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  list: {},
  item: {
    // backgroundColor: '#FFFFFF15',
    marginVertical: 8,    
    // marginTop: 6,
    // marginBottom: 6,
  },
  title: {
    fontSize: 18,
  },
});

export default function Setting(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    return (
      <SafeAreaView style={[styles.sectionContainer, backgroundStyle]}>
            <Stack.Navigator>
                <Stack.Screen name="Setting" component={SettingStack} />
                <Stack.Screen name="Profil" component={ProfilStack} />
                <Stack.Screen name="Notification" component={NotificationStack} />
                <Stack.Screen name="Confidentialité" component={PrivateStack} />
            </Stack.Navigator>
      </SafeAreaView>
    );
};
