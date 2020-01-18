import React from 'react'

export default class TabComponent extends React.Component{
    constructor(props) {
        super(props) 
        this.state = {
            tabList: [
                'tab1',
                'tab2',
                'tab3'
            ],
            componentList: [
                'content tab1',
                'content tab2',
                'content tab3'
            ],
            current: 0
        }
    }
    
    renderMenu() {
        const current = this.state.current
        return this.state.tabList.map((tab, idx) => {
            if (idx == current) {
                return (
                    <div style={{borderStyle: 'inset'}} 
                        onClick={ () => { this.setState({current :idx}) } }
                    >
                        &nbsp;&nbsp;{tab}&nbsp;&nbsp;
                    </div>
                )
            }
            return (
                <div style={{borderStyle: 'outset'}} 
                    onClick={ () => { this.setState({current :idx}) } }
                >
                    &nbsp;&nbsp;{tab}&nbsp;&nbsp;
                </div>
            )            

        })
    }

    render() {
        const current = this.state.current
        return(
            <div style={ {marginTop: '15px', marginLeft:'20px'}}> 
                <div style={{display: 'flex', flexDirection: 'row', height:'30px'}}>
                    {this.renderMenu()}
                </div>
                <div style={{height: '276px', borderStyle: 'Solid'}} >
                    {this.state.componentList[current]}
                </div>
            </div>
        )
    }
}