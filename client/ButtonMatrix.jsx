import React from 'react';
import { Link } from 'react-router-dom';

import EmojiButton from './EmojiButton.jsx';

import './style/main.less';

class ButtonMatrix extends React.Component {

    constructor(props) {
        super(props);

        let side = props.side;
        if (!side) {
            side = props.match.params.level;
        }
        if (!side) {
            side = 5;
        }
        console.log(side, props);
            
        let buttons = [];
        for (let i = 0; i < side; i++) {
            let row = [];
            for (let j = 0; j < side; j++) {
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

        // Set the different emoji😄 😁 
        var diff = buttons[this.getRandomInt(side)][this.getRandomInt(side)];
        diff.emoji = '😁';
        diff.diff = true;

        this.state = { 
            side: side,
            buttons
        };

        this.showState = this.showState.bind(this);
        this.onButtonChange = this.onButtonChange.bind(this);
    }

    showState() {
        console.log(this.state);
    }

    getRandomInt(n) {
        const min = 0;
        const max = n - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onButtonChange(row, col) {
        let buttons = this.state.buttons.slice();
        buttons[row][col].pressed = !buttons[row][col].pressed;

        const win = buttons[row][col].diff;
        if (win) {
            alert('winner');
        }

        const s = Object.assign({}, this.state, { buttons, winner: win });
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
            <Link key="homeLink" to="/">Home</Link>,
            <button key="checkBtn" onClick={this.showState}>Check state</button>,
            <div key="matrix" className="matrix">
                {items}
            </div>
        ];
    }

}

export default ButtonMatrix;