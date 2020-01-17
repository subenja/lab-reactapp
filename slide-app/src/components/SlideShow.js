import React from 'react'

export default class SlideShow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            pictureList: [
                { id: 1, src: "images/apple.png" },
                { id: 2, src: "images/cartoon.png" },
                { id: 3, src: "images/man.png" },
                { id: 4, src: "images/mickey.png" },
                { id: 5, src: "images/pony.png" }
            ],
            current: 1
        }
    }

    render() {
        const current = this.state.current;
        return (
            <div style={{display: 'flex', flexDirection:'column-reverse', alignItems:'center'}}>
                <div>
                    <img style={{ maxHeight: '200px' }} src={this.state.pictureList[current].src} alt="current photo" />
                </div>
                <div>
                    <button 
                        disabled={ current==0 } 
                        onClick={ () =>  { this.setState({ current: current - 1 }) } }
                    >Previous</button>
                    <button 
                        disabled={ current==4 } 
                        onClick={ () => this.setState({current: current + 1 } ) }
                    >Next</button>
                </div>
            </div>
        )
    }
}

