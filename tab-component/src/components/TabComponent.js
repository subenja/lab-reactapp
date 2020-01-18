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

        return(
            <div> 

            </div>
        )
    }
}