import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions, Platform } from 'react-native';
import cafe from '../imgs/cafe.jpg'
import clubs from '../imgs/clubs.jpg'
import hotel from '../imgs/hotel.jpg'
import menu from '../imgs/menu.jpg'



const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
 
const images = [ cafe, clubs, hotel ];
restaurantMenu = [ menu, menu ]
 
class ImageCarousel extends React.Component {

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image 
                 style={{ width: this.props.forModal ? null: BannerWidth, height: this.props.forModal ? '100%' : BannerHeight 
                }} source={image} resizeModa="cover" />
            </View>
        );
    }

     render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay={this.props.forModal ? false : true}
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={this.props.forModal ? 300 : BannerWidth}

                >
                    {
                        this.props.forModal ?
                        restaurantMenu.map((image, index) => this.renderPage(image, index))
                        : images.map((image, index) => this.renderPage(image, index))
                    }
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
        alignItems:'center'
    },
});

export default ImageCarousel