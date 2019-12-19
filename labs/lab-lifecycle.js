/**
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
    render = () => {
        return (
            <div>My app</div>
        )
    }
}
ReactDOM.render( App, document.getElementById('root') )