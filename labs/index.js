const App = React.createElement('div', null, 'Hello React!')
console.log(App)
const rootElement = document.getElementById('root')
ReactDOM.render(App, rootElement)



// some variables with logic...
const pill = prompt("Please pick red or blue pill", "red")
const Reality = (
 <p style={{fontWeight:'bold',color:'red'}}>Reality... </p>
)
const Matrix = (
  <p style={{fontWeight:'bold',color:'darkgreen'}}>Matrix...</p>
)

// 🕶 The rest is yours
const App = 
      pill === 'red' ? Reality :
      pill === 'blue' ? Matrix :
      '.....'

ReactDOM.render( App,  root )

  