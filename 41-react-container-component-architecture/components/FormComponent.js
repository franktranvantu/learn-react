import React from 'react'

export default function FormComponent(props) {
    return (
        <main>
            <form>
                <input
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleChange}
                    placeholder="First Name"
                />
                <br />

                <input
                    name="lastName"
                    value={props.data.lastName}
                    onChange={props.handleChange}
                    placeholder="Last Name"
                />
                <br />

                <input
                    name="age"
                    value={props.data.age}
                    onChange={props.handleChange}
                    placeholder="Age"
                />
                <br />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === 'male'}
                        onChange={props.handleChange}
                    /> Male
                    </label>
                <br />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === 'female'}
                        onChange={props.handleChange}
                    /> Female
                    </label>
                <br />

                <select
                    name="destination"
                    value={props.data.destination}
                    onChange={props.handleChange}
                >
                    <option value="">-- Please choose a destination --</option>
                    <option value="germany">Germany</option>
                    <option value="norway">norway</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        checked={props.data.isVegan}
                        onChange={props.handleChange}
                    /> Vegan?
                    </label>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        checked={props.data.isKosher}
                        onChange={props.handleChange}
                    /> Kosher?
                    </label>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        checked={props.data.isLactoseFree}
                        onChange={props.handleChange}
                    /> Lactose Free?
                    </label>
                <br />

                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions: {props.data.isVegan && 'Vegan'} {props.data.isKosher && 'Kosher'} {props.data.isLactoseFree && 'Lactose Free'}</p>
        </main>
    )
}