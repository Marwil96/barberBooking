import React, { Component } from 'react';
import '../../App.css';

import Lottie from 'react-lottie';
import animationData from '../../img/animation/data.json'

    class HairAnimation extends Component {
      render() {
         const defaultOptions = {
      loop: false,
      autoplay: false, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    console.log(this.props.animationStep, (this.props.animationStep))
        return (
          <Lottie options={defaultOptions}
              height={270}
              width={229}
              eventListeners={
            [
              {
                eventName: 'segmentStart',
                callback: () => console.log('the animation completed:'),
                  },
                ]
              }
              segments={[this.props.animationStep, (this.props.animationStep + 3)]}
              // isStopped={animation}
              // isPaused={this.state.isPaused}
            />
          )
      }
    }
export default HairAnimation;