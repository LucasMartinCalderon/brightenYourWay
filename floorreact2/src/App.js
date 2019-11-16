import React, { Component } from 'react';
import logo from './logo.svg';
import floor from './Paths2.svg';
import './App.css';
import { render } from 'react-dom'
import ReactSVG from 'react-svg'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div style={{width: "100%", height: "100%"}}>
                   <ReactSVG src={floor}
                             beforeInjection={svg => {
                                 svg.classList.add('svg-class-name')
                                 //svg.setAttribute('style', 'width: 100%; position: relative')
                                 svg.setAttribute('viewBox', '0 0 2000 1500')
                             }}
                             afterInjection={(error, svg) => {
                                 if (error) {
                                     console.error(error)
                                     return
                                 }
                                 console.log(svg)
                                 console.log(svg.getElementById('caras_bordes.Plane.001').childNodes);
                             }}
                   />
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
