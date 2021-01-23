import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './style';

interface Card {
    style: any;
    children: any;
}

class CustomCard extends Component<Card> {
    constructor(props: Card) {
        super(props)
    }

    render() {
        return (
        <View style={{...styles.card, ...this.props.style}}>
            {this.props.children}
        </View>
    );
    }
    
};

export default CustomCard;