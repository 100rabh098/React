import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//by html
const element=(
    <a href="https://google.com" target='_blank'> Visiting Google</a>
)
//react element
const reactElement= React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},

    'click me to to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  // element
  // reactElement
)
