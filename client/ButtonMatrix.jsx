import React from 'react';

import EmojiButton from './EmojiButton.jsx';

import './style/main.less';

class ButtonMatrix extends React.Component {

    constructor(props) {
        super(props);

        let buttons = [];
        for (let i = 0; i < props.side; i++) {
            let row = [];
            for (let j = 0; j < props.side; j++) {
                row.push({
                    row: i,
                    col: j,
                    pressed: false,
                    emoji: '😄',
                    className: "row-" + i + " col-" + j
                });
            }
            buttons.push(row);
        }

        this.state = { 
            side: props.side,
            buttons
        };

        this.showState = this.showState.bind(this);
        this.onButtonChange = this.onButtonChange.bind(this);
    }

    showState() {
        console.log(this.state);
    }

    onButtonChange(row, col) {
        let buttons = this.state.buttons.slice();
        buttons[row][col].pressed = !buttons[row][col].pressed;
        const s = Object.assign({}, this.state, { buttons });
        this.setState(s);
    }

    render() {
        const items = this.state.buttons.map((row) => {
            return row.map((item) => {
                return <EmojiButton key={item.className}
                    buttonInfo={item}
                    onButtonChange={this.onButtonChange}
                     />
            });
        });

        return [
            <button key="checkBtn" onClick={this.showState}>Check state</button>,
            <div key="matrix" className="matrix">
                {items}
            </div>
        ];
    }

}

export default ButtonMatrix;