import * as React from 'react';
import { I18nManager, Text, View, StyleSheet } from 'react-native';
import I18n from './indexTrans';

import { Picker } from '@react-native-picker/picker';

const listLanguage = [
    { key: 'en', label: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', text: 'ENGLISH' }, { key: 'ar', label: 'ar', text: 'ARABIC' }
]


export default class DropdownLanguage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<View style={styles.dropdownLanguage}>
            <Picker
                mode="dialog"
                style={{ width: 60, height: 60, }}
                selectedValue={this.props.language}
                onValueChange={this.props.onChangeLanguage.bind(this)}
                prompt="Choose Language"

            >
                {listLanguage.map((languageItem, i) => {
                    return <Picker.Item key={i} value={languageItem.key} label={languageItem.text} />
                })}
            </Picker>
        </View>
        )
    }
}
const styles = StyleSheet.create({


    dropdownLanguage: {
        width: 110, height: 50, top: 5, right: 10,
    },


});
