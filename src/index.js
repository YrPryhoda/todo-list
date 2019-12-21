import React from 'react';      // React библиотека
import ReactDOM from 'react-dom'; // Виртуальное дерево DOM REact
import App from './components/app'


// -------------------------- //
const block = document.querySelector('#root');  //find block where React components will be rendered
ReactDOM.render(<App />, block); // do React render in html block