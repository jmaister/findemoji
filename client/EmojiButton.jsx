import React from 'react';

class EmojiButton extends React.Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onButtonChange(this.props.buttonInfo.row, this.props.buttonInfo.col);
    }

    render() {
        var className = this.props.className 
            + (this.props.buttonInfo.pressed ? ' pressed' : '')
            + ' emojibutton';

        return (
            <button className={className} onClick={this.onClick}>
                {this.props.buttonInfo.emoji}
            </button>
        );
    }

}

export default EmojiButton;