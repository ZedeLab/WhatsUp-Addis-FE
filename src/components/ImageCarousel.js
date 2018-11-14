import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import cafe from '../imgs/cafe.jpg'
import clubs from '../imgs/clubs.jpg'
import hotel from '../imgs/hotel.jpg'

 
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
 
const images = [ cafe, clubs, hotel ];
 
class ImageCarousel extends React.Component {

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={image} />
            </View>
        );
    }

     render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

export default ImageCarousel