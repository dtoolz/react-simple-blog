import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <ProjectList/>
                    </div>
                    <div className="col-sm-12 col-md-5 col-offset-1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}
