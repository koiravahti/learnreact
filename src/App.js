import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      volume: 0
    }
  }

  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }
  
  render() {
    let { volume } = this.state
    const sliderlabels = {0:'Low', 500:'Mid', 1000:'High'};

    return (
      <div>
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">React App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
      <Jumbotron>
        <Grid>
          <h1>Welcome to React</h1>
          <p>
            <Button
              bsStyle="success"
              bsSize="large"
              href="http://react-bootstrap.github.io/components.html"
              target="_blank">
              View React Bootstrap Docs
            </Button>
          </p>
        </Grid>
      </Jumbotron>
      <Slider
        value={volume}
        max={1000}
        step={10}
        labels={sliderlabels}
        onChange={this.handleOnChange}
      />
    </div>
    );
  }
}

export default App;
