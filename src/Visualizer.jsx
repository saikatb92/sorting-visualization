import React, {useState, useEffect} from 'react'
import Bar from './Bar';
import Controller from './Controller';
import Button from '@material-ui/core/Button';
import bubbleSort from './bubbleSort';
import quickSort from './quickSort';
import './styles.css';

export const BAR_COLOR =  'rgb(129, 68, 133)';
export const SELECTED_BAR = 'green';
export const FINISHED_BAR = 'greenyellow';

const getRandomData = (min, max) => {
   return Math.floor(Math.random() * (max - min) + min);
}

const getRandomFilledArray = () => {
    let tempArray = new Array(10).fill(0);    
    for(let i = 0; i < 250; i++) {
        tempArray[i] = {height: getRandomData(3, 500), backgroundColor: BAR_COLOR};
    }

    return tempArray;
}


function Visualizer() {
    const [array, setArray] = useState([]);
    const [speed, setSpeed] = useState(10);
    const [isRunning, setRunningFlag] = useState(false);
 
    useEffect(() => {
      setArray(getRandomFilledArray());
    }, [])


    return (
        <div>
            <header className="header">
                <h2>Sorting Visualizer</h2>
            </header>
            <br/>
            <br />
            <div className="bar-container">
               {
                   array.map((item, index) => (
                       <Bar key={index} height={item.height} bgColor={item.backgroundColor} />
                   ))
               }
            </div>
            <div className="control-panel">
                <Controller setSpeed={setSpeed} />
                <Button className="start-button"  disabled={isRunning} onClick={() => bubbleSort([...array], setArray, setRunningFlag, speed)}>Bubble Sort</Button>
                <Button className="start-button"  disabled={isRunning} onClick={() => quickSort([...array], setArray, setRunningFlag, speed, 0, array.length - 1)}>Quick Sort</Button>
            </div>
        </div>
    )
}

export default Visualizer
