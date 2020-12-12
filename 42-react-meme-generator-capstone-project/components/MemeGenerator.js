import React, { Component } from 'react';

class MemeGenerator extends Component {
    constructor() {
        super()
        /**
        * Initialize state to save the following data:
        *      top text
        *      bottom text
        *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
        */
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /**
     * We'll be using an API that provides a bunch of meme images.
     *
     * Your task:
     * make an API call to "https://api.imgflip.com/get_memes" and save the
     * data that comes back (`response.data.memes`) to a new state property
     * called `allMemeImgs`. (The data that comes back is an array)
     */
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => {
                const { memes } = data.data
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    /**
     * Create the onChagne handler method
     * It should update the corresponding state on every change of the input box
     */
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    /**
     * Create a method that, when the "Gen" button is clicked, chooses one of the
     * memes from our `allMemeImgs` array at random and makes it so that is the
     * meme image that shows up in the bottom portion of our meme generator site (`.url`)
     */
    handleSubmit(event) {
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMemeImage = this.state.allMemeImgs[randomNumber].url
        this.setState({
            randomImage: randomMemeImage
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    {
                        /**
                         * Create 2 input fields, one for the topText and one for the bottomText
                         * Remember that these will be "controlled forms", so make sure to add
                         * all the attributes you'll need for that to work
                         */
                    }
                    <input
                        type="text"
                        placeholder="Top Text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;