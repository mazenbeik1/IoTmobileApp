import React from "react";
import { WebView } from 'react-native-webview';



const Home = () => {
    return ( 
        <WebView source={{ uri: 'http://192.168.1.105:5000' }} style={{ flex: 1 }} />
    );
}
 
export default Home;