import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

class Protagonist extends React.Component {

    constructor() {

        super();

        this.state = {
            clicked: "unstroked"
        };
    }

    strokeElement() {

        if(this.state.clicked === "unstroked") {

            return this.setState({
                clicked: "stroked"
            });
        }

        return this.setState({
            clicked: "unstroked"
        });
    }

    render() {
        return (
            <div className={this.state.clicked} onClick={this.strokeElement.bind(this)} >
                Hello, My name is { this.props.name }, I am a { this.props.tribu } !<br /><br />
            </div>
        )
    }
}

Protagonist.propTypes = {
    tribu: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

// class AddProtagonist extends React.Component {

//     constructor() {
//         super();
//     }

//     changeNewElementName(event) {

//         const newElement = {
//             name: event.target.value,
//             tribu: this.state.newElement.tribu
//         };

//         this.setState({
//             newElement: newElement
//         });
//     }

//     changeNewElementTribu(event) {

//         const newElement = {
//             name: this.state.newElement.name,
//             tribu: event.target.value
//         };

//         this.setState({
//             newElement: newElement
//         });
//     }

//     addElement() {

//         this.state.elements.push({
//             name: this.state.newElement.name,
//             tribu: this.state.newElement.tribu
//         });

//         this.setState({
//             elements: this.state.elements,
//             newElement: {
//                 name: "",
//                 tribu: ""
//             }
//         });
//     }

//     render() {
//         return (

//             <div>
//                 <div>
//                     <label>Name</label>
//                     <input type="text" value={this.state.newElement.name} onChange={this.changeNewElementName.bind(this)} />
//                 </div> 

//                 <div>
//                     <label>Tribu</label>
//                     <input type="text" value={this.state.newElement.tribu} onChange={this.changeNewElementTribu.bind(this)} />
//                 </div>

//                 <button onClick={this.addElement.bind(this)}>Ajouter</button>
//             </div>
//         )
//     }
// }

class App extends Component {

    constructor() {

        super();

        this.state = {

            elements: [
                {
                    name: 'Daruma',
                    tribu: 'Goron'
                }, {
                    name:'Jabu-Jabu',
                    tribu: 'Zora'
                }, {
                    name: 'Mido',
                    tribu: "Kokiri"
                }
            ],

            newElement: {
                name: "",
                tribu: ""
            },

            filters: "none"
        };
    }

    changeNewElementName(event) {

        const newElement = {
            name: event.target.value,
            tribu: this.state.newElement.tribu
        };

        this.setState({
            newElement: newElement
        });
    }

    changeNewElementTribu(event) {

        const newElement = {
            name: this.state.newElement.name,
            tribu: event.target.value
        };

        this.setState({
            newElement: newElement
        });
    }

    selectFilter(value) {

        this.setState({
            filters: value
        });
    }

    getFilterClass(value) {
        return this.state.filters === value ? 'active' : '';
    }

    addElement() {

        this.state.elements.push({
            name: this.state.newElement.name,
            tribu: this.state.newElement.tribu
        });

        this.setState({
            elements: this.state.elements,
            newElement: {
                name: "",
                tribu: ""
            }
        });
    }

    render() {

        return (

            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <div className="filters">
                        <button className={this.getFilterClass("none")} onClick={this.selectFilter.bind(this, "none")} >Tous</button>
                        <button className={this.getFilterClass("goron")} onClick={this.selectFilter.bind(this, "goron")} >Goron</button>
                        <button className={this.getFilterClass("zora")} onClick={this.selectFilter.bind(this, "zora")} >Zora</button>
                    </div>

                    <br /><br />

                    <div>
                        <label>Name</label>
                        <input type="text" value={this.state.newElement.name} onChange={this.changeNewElementName.bind(this)} />
                    </div> 

                    <div>
                        <label>Tribu</label>
                        <input type="text" value={this.state.newElement.tribu} onChange={this.changeNewElementTribu.bind(this)} />
                    </div>

                    <button onClick={this.addElement.bind(this)}>Ajouter</button>

                    {this.state.elements.map((element, index) => {

                        let isInFilter = false;

                        if(this.state.filters === "none") {
                            isInFilter = true;
                        } else if(element.tribu.toLowerCase() === this.state.filters.toLowerCase()) {
                            isInFilter = true;
                        }

                        if(!isInFilter) {
                            return null;
                        }

                        return <Protagonist name={element.name} tribu={element.tribu} />;
                    })}
                </div>
            </div>
        );
    }
}

export default App;
