/**
https://codepen.io/subenja/pen/ExaWWRO?editors=0011

ให้ทดลองเรียกใช้ lifecycle method ที่ได้เรียนมาโดย
ให้ใส่ console.log เข้าไปใน method แต่ละอันแล้วดูว่ามันมีลำดับการเกิดอย่างไรบ้าง
ลองใส่ this.setState ไปใน render แบบตรงๆแล้วสังเกตผล
ลองให้ shouldComponentUpdate return เป็น false แล้วสังเกตผล

class App extends React.Component {
    render = () => {
        return (
            <div>My app</div>
        )
    }
}
ReactDOM.render( App, document.getElementById('root') )

*/
class App extends React.Component {
    state = {
      counter: 0,
      show: true
    }
  
    static getDerivedStateFromProps(props, state) {
      return null
      //return {
      //  counter: props.initCounter
      //}
    }
  
    componentDidMount = () => {
      console.log('birth!!  function componentDidmount')
    }
    
    componentDidUpdate = () => {
      console.log('updated function componentDidUpdate '+ this.state.counter)
    }
    
    shouldComponentUpdate = (nextProps, nextState) => {
      return true
    }
    
    handleAdd = () => {
      this.setState(state => ({ counter: state.counter + 1 }))
    }
    
    handleMinus = () => {
      this.setState(state => ({ counter: state.counter - 1 }))
    }
    
    handleShow = () => {
      this.setState(state => ({ show: !state.show }))
    }
    
    render = () => {
      return (
        <div>
          {this.state.show && <CounterDisplay counter={this.state.counter} />}
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handleShow}>show/hide</button>
        </div>      
      )
    }
  }
  
  class CounterDisplay extends React.Component {
    componentWillUnmount = () => {
      console.log('bye bye function componentWillUnmount')
    }
    
    render = () => {
      return (
        <div>counter: {this.props.counter}</div>
      )
    }
}
  
ReactDOM.render(
    <App initCounter={0} />, 
    document.getElementById('root')
)