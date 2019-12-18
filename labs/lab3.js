const styleRed = {
    color: 'red',
    fontSize: '60px'  
  }
  const styleBlack = {
    color: 'black',
    fontSize:'60px'
  }
  const stylePink = {
    color: 'pink',
    fontSize:'60px'
  }
  
  const App = (
    <div>
      <span style={styleRed}>L</span>
      <span style={styleBlack}>.</span>
      <span style={stylePink}>O</span>
      <span style={styleBlack}>.</span>
      <span style={styleRed}>V</span>
      <span style={styleBlack}>.</span>   
      <span style={stylePink}>E</span>    
    </div>
  )
  
  ReactDOM.render( App, document.getElementById('root') )



function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    )
  }
}

ReactDOM.render( <Hello name="ToodTu" />, root)
  



class Text extends React.Component {
  mystyle = {
    color: "red",
    fontSize: "40px"
  }

  div = <div style={this.mystyle}> {this.props.name }</div>
render() {
  return (this.div)
  }
}

ReactDOM.render( <Text name="L.O.V.E" />, root)
<Popup heading="This Is Important">
  Here is some important...
</Popup>
