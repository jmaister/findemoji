import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {

    render() {

        const levels = Array.from(Array(10).keys());
        const items = levels.map((n) =>
            <li key={'levelLink' + n}>
                <Link to={"/level/" + n}>Level {n}</Link>
            </li>
        );

        return (
            <div>
                <h2>Home</h2>
                <p>Select level</p>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }

}

export default Home;