import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

function Controller(props) {
    return (
        <div className="controller">
            <Typography id="discrete-slider-small-steps" gutterBottom>
              Slow down
            </Typography>
            <Slider
        defaultValue={10}
        getAriaValueText={props.setSpeed}
        step={10}
        min={10}
        max={3000}
      />
        </div>
    )
}

export default Controller;

