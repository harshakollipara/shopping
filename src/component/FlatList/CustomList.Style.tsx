import React from'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    main:{
        flex:1
    },
    expertName: {
        fontSize: 19
    },
    expertAddress: {
        fontSize: 11
    },
    photo:{
        height: 90,
        width: 90
    },
    text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    seperator: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#C8C8C8'
    }
    
});

export default styles;