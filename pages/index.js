import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Router } from '../routes';

class Home extends Component {
    state = { value: '' }; // state is needed so for the form

    onSubmit = event => {
        event.preventDefault();

        // THE CODE FOR CHANGING THE VARIABLE VALUE SHOULD BE HERE

        console.log(this.state.value); // just a check if the function got called

        Router.replaceRoute('/aboutttttt');
    };

    render() {
        return (
            <Layout>
                <h3>This is home</h3>
                <Form onSubmit={this.onSubmit}>
                    <input
                        placeholder="Enter new variable value..."
                        onChange={event =>
                            this.setState({ value: event.target.value })
                        }
                        style={{ width: '40%' }}
                    />
                    <Button content="Change Variable" primary />
                </Form>
            </Layout>
        );
    }
}

export default Home;
