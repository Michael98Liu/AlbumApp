import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//import Field from './src/components/field';


const App = () => (
    <View>
        <Header headerName={'Albums'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('JournalKeeper', () => App);
