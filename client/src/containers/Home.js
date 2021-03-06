import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { Link } from "react-router-dom";
import watsonSvg from '../images/IBM_logo_animated.svg'
import './home.css'

class Home extends Component {
    constructor(){
        super()
        this.state ={
            show: false
        }
    }

    componentDidMount() {
        setTimeout(() => { this.setState({ show: !this.state.show }) }, 1000);
      }

    render() {
        return (
            <div id="home">
                <div id="watson-logo" style ={{backgroundImage: `url(${watsonSvg})`}}></div>
                {this.state.show &&
                <div id="enter-button"><Link to="/main">Enter</Link></div>
                }
                <div id="particle-js" className="gradient">
                    <Particles params={{
                        "particles": {
                            "number": {
                                "value": 80,
                                "density": {
                                    "enable": true,
                                    "value_area": 600
                                }
                            },
                            "color": {
                                "value": ["#fff", "#3498db", "#e74c3c"]
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#fff"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 1,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 0.2,
                                    "opacity_min": 0,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 50,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 2,
                                    "size_min": 5,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": false,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 1,
                                "direction": "top",
                                "random": true,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 600
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "window",
                            "events": {
                                "onhover": {
                                    "enable": false,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": false,
                                    "mode": "repulse"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 250,
                                    "size": 0,
                                    "duration": 2,
                                    "opacity": 0,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true

                    }}
                    />
                </div>
            </div>
        )
    }
}

export default Home


// style={{
//     width: '100%',
//     backgroundImage: `url(${logo})` 
//   }}