import React, { Component } from 'react'

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className='login-form'>

            <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                    height: 100%;
                    }
                `}</style>

                <Grid textAlign='center' style={{height:'100%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth:450}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />

                                <Button color='teal' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            Join or Create your Project! <br />
                            <Link to="/signup">Sign Up</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
