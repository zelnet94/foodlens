var React = require('react')
var ReactDOM = require('react-dom')

// import component
var FileInput = require('./fileInput')


var App = React.createClass({
  getInitialState: function () {
    return {
      files: []
    }
  },
  onChange: function (files) {
    this.setState({
      files: this.state.files.concat(files)
    })
  },
  render: function () {
    return (
      <div>
        <FileInput onChange={this.onChange} multiple={false} />
        {this.state.files.length ?
        <div className="thumb-box">
          { /* using files */ }
        </div> : null}
      </div>
    )
  }

})



ReactDOM.render(
  <App />,
  document.querySelector(mountNode)
)
