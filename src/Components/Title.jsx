import React, { Component } from 'react';

class Title extends Component {
    render () {
        const {value} = this.props;
        return (<h1 className="text-2xl lg:text-4xl font-bold mb-4">{value}</h1>);
    }
}

export default Title;