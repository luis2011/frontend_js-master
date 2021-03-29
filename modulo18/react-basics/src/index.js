import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//aca importar todos los componentes
import TodoList from './component3'
import PruebaTodolist from './todosList'

// aqui defino una variable y guardo el contenido del archivo y lo ejecuto

//ReactDOM.render(<TodoList />,document.getElementById('root'));
ReactDOM.render(<PruebaTodolist />,document.getElementById('root'));

reportWebVitals();
