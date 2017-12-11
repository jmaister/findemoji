import React from 'react';

class EmojiButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pressed: false, value: props.value, className: props.className };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const s = Object.assign({}, this.state, { pressed: !this.state.pressed });
        this.setState(s);
    }

    render() {
        var className = this.state.className + (this.state.pressed ? ' pressed' : '');
        return (
            <button className={className} onClick={this.onClick}>
                {this.state.value}
            </button>
        );
    }

}

export default EmojiButton;