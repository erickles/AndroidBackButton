import React, { Component, createElement } from "react";
import { View, BackHandler } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { defaultBadgeStyle } from "../ui/styles";

export class BackButton extends Component {

    constructor(props) {
        super(props);
    }

    styles = mergeNativeStyles(defaultBadgeStyle, this.props.style);

    // backHandler() {
    //     const { onClick } = this.props;
    //     onClick();
    //     return true;
    // }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.props.onClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.props.onClick);
    }

    render() {

        return (
            <View></View>
        );
    }
}
