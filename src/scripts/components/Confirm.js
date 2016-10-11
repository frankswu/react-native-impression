import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableHighlight,
} from 'react-native';
import {
    confirmMask,
    confirm,
    confirmBody,
    confirmTitle,
    confirmMessage,
    confirmFooter,
    confirmButton,
    confirmButtonSplit,
} from '../../styles/modules/confirm';

// Confirm
export default class Confirm extends Component {
    // props 校验
    static propTypes = {
        animationType: PropTypes.string,
        title: PropTypes.any,
        buttonOk: PropTypes.string,
        buttonCancel: PropTypes.string,
        buttonReverse: PropTypes.bool,
        onPress: PropTypes.func,
        children: PropTypes.any,
    }
    // 默认props
    static defaultProps = {
        animationType: 'fade',
        buttonOk: '确定',
        buttonCancel: '取消',
        buttonReverse: false,
    }
    onPressHandle = flag => {
        let { onPress } = this.props;

        onPress && onPress(flag);
    }
    render() {
        let { buttonOk, buttonCancel, buttonReverse, animationType, title, children } = this.props,
            { backgroundColorActive, colorPrimary, colorSecondary, ...confirmButtonStyle } = confirmButton;

        return (
            <Modal
                animationType={animationType}
                transparent
                visible>
                <View style={confirmMask}>
                    <View style={confirm}>
                        <View style={confirmBody}>
                            <Text style={confirmTitle}>{title}</Text>
                            <Text style={confirmMessage}>{children}</Text>
                        </View>
                        <View style={confirmFooter}>
                            <TouchableHighlight
                                activeOpacity={1}
                                onPress={() => this.onPressHandle(true)}
                                style={confirmButtonStyle}
                                underlayColor={backgroundColorActive}>
                                <Text style={{ color: buttonReverse ? colorPrimary : colorSecondary }}>
                                    {buttonReverse ? buttonOk : buttonCancel}
                                </Text>
                            </TouchableHighlight>
                            <View style={confirmButtonSplit} />
                            <TouchableHighlight
                                style={confirmButtonStyle}
                                activeOpacity={1}
                                onPress={() => this.onPressHandle(false)}
                                underlayColor={backgroundColorActive}>
                                <Text style={{ color: buttonReverse ? colorSecondary : colorPrimary }}>
                                    {buttonReverse ? buttonCancel : buttonOk}
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}
