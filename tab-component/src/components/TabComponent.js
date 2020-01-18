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


    render() {
        const current = this.state.current
        return(
            <div> 
                <div style={{display: 'flex', flexDirection: 'row', }}>
                    {this.renderMenu()}
                </div>
                <div>
                    {this.state.componentList[current]}
                </div>
            </div>
        )
    }
}