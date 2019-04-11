import React, { Component } from 'react'
import TextForm from '../components/TextForm'
import Results from './Results'
import Top from './Top'
import Particles from 'react-particles-js'
import { withResults } from '../context/ResultsProvider'
import LoadingSpinner from '../components/LoadingSpinner'
import './main.css'
import '../style.css'

class Main extends Component {

    render() {
        return (
                <div id="main">
                    <Top />
                    <div id="input-box">
                        <TextForm />
                    </div>
                    <div id="organizer">
                        {this.props.loading ? <LoadingSpinner /> :
                            <Results />
                        }
                    </div>
                    <Particles  params={{
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
                                    "width": '100vw',
                                    "height": '100vh'
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
                                    "enable": true,
                                    "mode": "bubble",
                                    "duration": 5,
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
        )
    }
}

export default withResults(Main)