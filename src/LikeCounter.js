import React, { Component } from 'react';


class LikeCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {likes: 0  }
    }

    likeCount() {
        const { likes } = this.state
        this.setState({ likes: likes + 1 })
    }

    render() {
        const { likes } = this.state
        return <button onClick={(e) => {this.likeCount()}}>Like: {likes}</button>
    }

}

export default LikeCounter