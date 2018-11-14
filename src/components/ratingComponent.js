import React,{ Component } from 'react'
import StarRating from 'react-native-star-rating';
import { View, Text } from 'react-native'


class RatingComponent extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }
 
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
 
  render() {
    return (
    <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems:'flex-start'}}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          fullStarColor={this.props.color}
          starSize={this.props.small ? 16 : 25}
          starStyle={{
            padding:5
          }}
        />
        <Text style={{color:"white", paddingLeft:5}}>210 reviews</Text>
    </View>
    );
  }
}
 
export default RatingComponent