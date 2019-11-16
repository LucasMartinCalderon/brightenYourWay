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
                                 svg.setAttribute('width', '');
                                 svg.setAttribute('height', '');
                                 svg.setAttribute('style', 'width: 50%; height: 50%; position: relative');
                                 svg.setAttribute('viewBox', '-286 -326 2478 2438')
                                 //svg.setAttribute('viewBox', '-326 -286 2438 2478')
                             }}
                             afterInjection={(error, svg) => {
                                 if (error) {
                                     console.error(error)
                                     return
                                 }
                                 console.log(svg)
                                 console.log(svg.getElementById('caras_bordes.Plane.001').childNodes[1].getAttribute('points'));

                                 var svg_elements = svg.getElementById('caras_bordes.Plane.001').childNodes;
                                 extract_graph_from_svg(svg_elements);
                             }}
                   />
                    </div>
                </header>
            </div>
        );
    }


}

function extract_graph_from_svg(dom){
    var min_x = 1000000000;
    var max_x = -100000000;
    var min_y = 10000000000;
    var max_y = -10000000000;
    for (var i = 0; i < dom.length; i++){
        var poly = dom[i * 2 + 1];
        if (poly) {
            if (poly.nodeName == 'polygon') {
                var points = poly.getAttribute('points');
                var coords = points.split(' ');
                if (parseInt(coords[0]) < min_x) {
                    min_x = parseInt(coords[0]);
                }
                if (parseInt(coords[1]) < min_y) {
                    min_y = parseInt(coords[1]);
                }
                if (parseInt(coords[0]) > max_x) {
                    max_x = parseInt(coords[0]);
                }
                if (parseInt(coords[1]) > max_y) {
                    max_y = parseInt(coords[1]);
                }
                console.log(points);
            }
            console.log(poly.nodeName);
        }

        //var points = poly.getAttribute('points');
        //console.log(dom[i * 2 + 1]);
    }
    console.log(min_x);
    console.log(max_x);
    console.log(min_y);
    console.log(max_y);
}

export default App;
