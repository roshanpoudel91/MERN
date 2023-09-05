import React, { Component } from 'react';

class PlayerForm extends Component {
   async submitPlayer(event){
        event.preventDefault();
        try {
            const data = {
                firstName: this.refs.firstName.value,
                lastName: this.refs.lastName.value,
                phone: this.refs.phone.value,
                email: this.refs.email.value
            };
            const response = await fetch("http://localhost:4000/players", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log(result);

        } catch (err) {
            console.error("Error:", err);
        }
    }
    state = {}
    render() {
        return (
            <div className="row">
                <h1 className='center'>Add a new player</h1>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref="firstName" type="text" />
                            <label for="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" ref="lastName" type="text" />
                            <label for="lastName">Last Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="phone" ref="phone" type="text" />
                            <label for="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" ref="email" type="text" />
                            <label for="email">Email</label>
                        </div>
                    </div>

                    <button className='btn waves-effect waves-light' type='submit'
                        name='action'>Add Player</button>

                </form>
            </div>
        );
    }
}

export default PlayerForm;