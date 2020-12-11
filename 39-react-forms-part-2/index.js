import React from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            description: '',
            isFriendly: true,
            gender: '',
            favoriteColor: 'green'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit() {
        console.log('Submitted');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    placeholder="First Name"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />
                <br />
                <textarea
                    name="description"
                    value={this.state.description}
                    placeholder="Description"
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === 'male'}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === 'female'}
                        onChange={this.handleChange}
                    /> Female
                </label>
                <br />
                <label>Favorite color</label>
                <select
                    name="favoriteColor"
                    onChange={this.handleChange}
                    value={this.state.favoriteColor}
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                </select>
                <br />
                <button>Submit</button>

                <h3>Your full name is {this.state.firstName} {this.state.lastName}</h3>
                <h3>Your description is {this.state.description}</h3>
                <h3>Your is friendly is {this.state.isFriendly ? 'Yes' : 'No'}</h3>
                <h3>Your gender is {this.state.gender}</h3>
                <h3>Your favorite color is {this.state.favoriteColor}</h3>
            </form>
        )
    }
}

ReactDOM.render(
    <MyApp />,
    document.getElementById('root')
)
