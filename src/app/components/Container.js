import React, { Component } from "react";


class Container extends Component {

    componentDidMount() {
        this.getList();
      }
    render() {
        return (
            <div>
                    <div className="container">
                        <div className="row">
                            <div className="col s3">
                            </div> 
                            <div className="col s6">
                            </div> 
                            <div className="col s3">
                            </div> 
                        </div>
                    </div>
            </div>
        )
    }
}

export default Container