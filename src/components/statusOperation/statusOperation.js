import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Status } from './statusStyled';

const StatusOperation = props => {
  const [timer, setTimer] = useState({
    start: 5,
    end: 0,
    tick: 1,
  });

  function startTimer() {
    let copyTimer = { ...timer };

    let timerId = setInterval(() => {
      copyTimer.start -= 1;

      if (copyTimer.start === copyTimer.end) {
        copyTimer.start = 4;
        clearInterval(timerId);
      }

      setTimer({
        ...copyTimer,
      });
    }, timer.tick * 1000);
  }

  function closeWindow() {
    setTimeout(() => {
      props.returnMain();
    }, timer.start * 1000);
  }

  if (timer.start == 1) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      {props.steps[2].active === true ? (
        <React.Fragment>
          {props.status.status === true ? closeWindow() : null}

          <Status>
            <div>{props.status.msg}</div>

            {props.status.status === true ? (
              <React.Fragment>
                {startTimer()}
                <p>
                  Вы будете перенаправлены на главную страницу через
                  <br />
                  {timer.start - 1}
                </p>
              </React.Fragment>
            ) : (
              <button onClick={props.secondStep}>К терминалу</button>
            )}
          </Status>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default StatusOperation;
