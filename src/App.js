import React, { Component } from 'react';
import './App.css';
import FirstClass from './New File';

class App extends Component {

  constructor() {
    super();
  }

  state = {
    title: 'Our Instagram App',
    subtitle: 'by everyone',
    images: [
      {id: '_C5zsV_p-YI', selected: false},
      {id: '58WRkqcAn9o', selected: false},
      {id: '9z-veIxii6k', selected: false},
      {id: 'AwnggmGaFms', selected: false},
      {id: 'Bi0atWiKP', selected: false},
      {id: '3cNc1U7nJcs', selected: false}
    ]
  }

  toggleImageSelect = (id) => {
    this.setState({subtitle: 'image selected: ' + id});
    let imagesToUpdate = [...this.state.images];
    let imageToUpdate = imagesToUpdate.find(image => image.id === id);
    imageToUpdate.selected = !imageToUpdate.selected;
    console.log(imageToUpdate);
    this.setState({images: imagesToUpdate});
  }

  updateTitle = e => {
    let inputText = e.target.value;
    this.setState({title: inputText});
  }

  render() {
    return (
      <div className="app">
        <h1>{this.state.title}</h1>
        <p>{this.state.subtitle}</p>
        <input type="text" style={{border: '1px solid black'}} onChange={this.updateTitle} />
        <div className="sample-images blocks-container">
          {
            this.state.images.map(image => {
              return <img
                className={image.selected ? 'selected' : ''} 
                src={'https://source.unsplash.com/' + image.id + '/360x360'} 
            onClick={() => this.toggleImageSelect(image.id)} />
            })
          }
        </div>
          <FirstClass></FirstClass>

        <div className="image-filters blocks-container">
          <button className="image-filter">
            <svg width="180px" height="180px" viewBox="0 0 180 180">
                <g id="image-filter-flip" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group" transform="translate(45.000000, 45.000000)" stroke="#444444" strokeWidth="4">
                        <path d="M34.8181818,88 L34.8181818,2 L9.81818182,2 C5.50031923,2 2,5.50031923 2,9.81818182 L2,80.1818182 C2,84.4996808 5.50031923,88 9.81818182,88 L34.8181818,88 Z" id="Path"></path>
                        <path d="M88,88 L88,2 L63,2 C58.6821374,2 55.1818182,5.50031923 55.1818182,9.81818182 L55.1818182,80.1818182 C55.1818182,84.4996808 58.6821374,88 63,88 L88,88 Z" id="Path" transform="translate(71.590909, 45.000000) scale(-1, 1) translate(-71.590909, -45.000000) "></path>
                    </g>
                    <path d="M89.5,35 L89.5,144.015625" id="Line" stroke="#444444" strokeWidth="4" strokeLinecap="round" strokeDasharray="10"></path>
                </g>
            </svg>
          </button>
          <button className="image-filter">
            <svg width="180px" height="180px" viewBox="0 0 180 180">
                <g id="image-filter-circle-mask" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <circle id="Oval" stroke="#444444" strokeWidth="4" cx="90" cy="90" r="43"></circle>
                    <circle id="Oval" stroke="#444444" strokeWidth="4" cx="90" cy="90" r="25"></circle>
                    <circle id="Oval" stroke="#444444" strokeWidth="4" cx="90" cy="90" r="8"></circle>
                </g>
            </svg>
          </button>
          <button className="image-filter">
            <svg width="180px" height="180px" viewBox="0 0 180 180">
                <g id="image-filter-tint" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group" transform="translate(42.000000, 45.000000)" stroke="#444444" strokeWidth="4">
                        <circle id="Oval" cx="49" cy="28" r="26"></circle>
                        <circle id="Oval" cx="28" cy="62" r="26"></circle>
                        <circle id="Oval" cx="69" cy="62" r="26"></circle>
                    </g>
                </g>
            </svg>
          </button>
        </div>
      
      </div>
    );
  }
}

export default App;
