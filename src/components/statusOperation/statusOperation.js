import React, { Component } from 'react';
import "./statusOperation.scss";

class StatusOperation extends Component {

    state = {
        
        timer: {
            start: 4,
            end: 0,
            tick: 1,
        }
    }

    startTimer = () => {

        let timer = { ...this.state.timer };

        let timerId = setInterval(() => {

            timer.start -= 1;

            if (timer.start === timer.end) {
                timer.start = 5
                clearInterval(timerId)
            }

            this.setState({
                timer
            })

        }, this.state.timer.tick * 1000);


    }


    closeWindow = () => {

        setTimeout(() => {

            this.props.returnMain()

        }, this.state.timer.start * 1000)


    }

    render() {

        return (

            <React.Fragment>


                {this.props.steps[2].active === true

                    ?

                    <React.Fragment>

                        {this.props.status.status === true

                            ? this.closeWindow()

                            : null

                        }

                        <div className='status-wrapper'>

                            <p className="status-message">{this.props.status.msg}</p>

                            {this.props.status.status === true

                                ? <React.Fragment>

                                    {this.startTimer()}
                                    <p className="status-timer">Вы будете перенаправлены на главную страницу через<br />{this.state.timer.start}</p>

                                </React.Fragment>

                                : <button className="status-button" onClick={this.props.secondStep} >К терминалу</button>

                            }

                        </div>

                    </React.Fragment>

                    : null

                }


            </React.Fragment>


        )


    }



}

export default StatusOperation