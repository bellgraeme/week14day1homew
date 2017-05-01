import React from 'react';
import ReactDOM from 'react-dom';
import ImdbMain from './components/ImdbMain.jsx'

window.onload = function(){
  ReactDOM.render(
    <ImdbMain />,
    document.getElementById('app')
  );
}
