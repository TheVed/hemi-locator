import React from 'react';
import ReactDOM from 'react-dom/client';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component{

  state = { latitude: null, errorMessage: '' }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({latitude: position.coords.latitude})
      },
      (error) => {
        this.setState({errorMessage: error.message})
      }
    );
  }

  render(){
    if(this.state.latitude && !this.state.errorMessage) {
      return(
        <div>
          <HemisphereDisplay latitude={this.state.latitude} />
        </div>
      )
    }

    if(!this.state.latitude && this.state.errorMessage) {
      return(
        <div>
          {this.state.errorMessage}
        </div>
      )
    }

    if(!this.state.latitude && !this.state.errorMessage) {
      return(
        <div>
          Loading ...
        </div>
      )
    }

  }

}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <App />
);
