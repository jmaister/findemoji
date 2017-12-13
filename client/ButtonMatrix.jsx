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
                row.push('a');
            }
            buttons.push(row);
        }

        this.state = { 
            side: props.side,
            buttons
        };
    }

    render() {
        const items = this.state.buttons.map((row, rowIndex) => {
            return row.map((item, itemIndex) => {
                const className = "row-" + (rowIndex+1) + " col-" + (itemIndex+1);
                return <EmojiButton className={className} key={className} value="😄" />
            });
        });

        return (
            <div className="matrix">
                {items}
            </div>
        );
    }

}

export default ButtonMatrix;