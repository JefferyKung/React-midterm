import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ReducerPractice from './RefucerPractice'
import Category from './Category'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <App />
   <Category/>
    
    <ReducerPractice/>
    
    
  </React.StrictMode>
)
