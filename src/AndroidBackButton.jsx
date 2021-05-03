import { Component, createElement } from "react";

import { BackButton } from "./components/BackButton";

export class AndroidBackButton extends Component {    

    constructor(props) {
        super(props);
        this.onClickHandler = this.onClick.bind(this);        
    }

    render() {



        return (
            <BackButton
                style={this.props.style}
                onClick={this.onClickHandler}
            />
        );
    }

    onClick() {
        const { onClick } = this.props;

        if (onClick && onClick.canExecute && !onClick.isExecuting) {
            onClick.execute();
        }

        return true;
    }

}
