import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { View } from 'react-native';

interface CustomImageSliderProps { }

interface CustomImageSliderState {
    images: any[];
}

export default class CustomImageSlider extends React.Component<CustomImageSliderProps, CustomImageSliderState> {

    constructor(props: CustomImageSliderProps) {
        super(props);
        this.state = {
            images: [
                require('../../assets/images/Banner.png'),
                require('../../assets/images/Banner.png'),
               
            ]
        }
    }
    render() {
        return (
            <View>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={270}
                    circleLoop
                />
            </View>
        )
    }
}


