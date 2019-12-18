class Love extends React.Component {
    render () {
        return <div>LOVE {this.props.name} !</div>
    }
}

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
