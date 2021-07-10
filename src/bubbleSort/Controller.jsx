import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

function Controller(props) {
    return (
        <div className="controller">
            <Typography id="discrete-slider-small-steps" gutterBottom>
              Speed
            </Typography>
            <Slider
        defaultValue={30}
        getAriaValueText={props.setSpeed}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={3000}
      />
        </div>
    )
}

export default Controller;

