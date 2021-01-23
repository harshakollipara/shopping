import { StyleSheet } from 'react-native';
import Colors from '../../commons/Colors';

export default StyleSheet.create({
    Container: {
        flex: 1
    },
    textContainer: {
        fontSize: 20,
        fontFamily: 'Arial-BoldMT',
        paddingTop: 8,
        writingDirection: 'rtl'

    },
    cardContainer: {
        paddingTop: 25,
        flex: 1,

    },
    card: {
        marginHorizontal: 7,
        borderRadius: 24,
        height: 120,
        width: 380,
        backgroundColor: '#fff44f',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardImageOne: {
        marginTop: 18,
        marginLeft: 20,
        height: 20,
        width: 20
    },
    cardImageTwo: {
        marginTop: 18,
        height: 20,
        width: 20
    },
    textTop: {
        fontSize: 21,
        fontFamily: 'Arial-BoldMT',
        marginLeft: 30,
        marginTop: 18

    },
    textOne: {
        fontSize: 18,
        fontFamily: 'ArialMT',
        marginLeft: 30,

    },
    textTwo: {
        fontSize: 18,
        fontFamily: 'ArialMT',
        marginLeft: 30
    },
    textMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textPromotions: {
        fontSize: 23,
        fontFamily: 'Arial-BoldMT',
        marginTop: 20,
        marginLeft: 9
    },
    textSeeAll: {
        fontSize: 23,
        fontFamily: 'Arial-BoldMT',
        marginTop: 20,
        marginRight: 9
    },
    groceryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12
    },
    textStyle: {
        fontSize: 15,
        fontFamily: 'ArialMT',

    }
});
