import React from 'react'
import './loader.css'

class Loader extends React.Component {

  render() {
    return (
      <div className="loader-outter">
        <span className="loader-text">Gimme a sec</span>
        <div className="loader">
        </div>
      </div>
    )
  }
}

export default Loader;