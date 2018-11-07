import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: "100%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden'
  },
  slider: {
    padding: '22px 0px',
    width:'80%'
  },
};
var prevVal = 0;
class StepSlider extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    if(this.state.value > value ) {
      if(value === 4) {
        console.log("Bakåt")
      this.props.onSlide([5,5], "Öron långt hår", 1.4, -1);
    } else if ( value === 8) {
      this.props.onSlide([14,14], "Axel långt hår", 1.6, -1);
    } else if ( value === 12) {
      this.props.onSlide([27,27], "Långt hår", 2, -1);
    } else if (value === 0) {
      this.props.onSlide([2,0], "Kort hår", 1, -1);
    }
    } else {
      if(value === 4) {
      this.props.onSlide([2,5], "Öron långt hår", 1.4, 1);
    } else if ( value === 8) {
      this.props.onSlide([5,14], "Axel långt hår", 1.6, 1);
    } else if ( value === 12) {
      this.props.onSlide([14,27], "Långt hår", 2, 1);
    } else if (value === 0) {
      this.props.onSlide([0,5], "Kort hår", 1, 1);
    }

    }
    this.setState({ value });
    var prevVal = value;
    };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ root: classes.slider }}
          value={value}
          min={0}
          max={12}
          step={4}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);