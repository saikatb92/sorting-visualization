import React, {useState, useEffect} from 'react'
import Bar from './Bar';
import Controller from './Controller';
import Button from '@material-ui/core/Button';
import './styles.css';

const BAR_COLOR = '#7c549a';
const SELECTED_BLUR = 'green';
const FINISHED_BAR = 'greenyellow';

const getRandomData = (min, max) => {
   return Math.floor(Math.random() * (max - min) + min);
}

const getRandomFilledArray = () => {
    let tempArray = new Array(10).fill(0);    
    for(let i = 0; i < 50; i++) {
        tempArray[i] = {height: getRandomData(3, 500), backgroundColor: BAR_COLOR};
    }

    return tempArray;
}

const swap = (i, j, array) => {
    let temp = array[i].height;
    array[i].height = array[j].height;
    array[j].height = temp;
}

const timer = ms => new Promise( res => setTimeout(res, ms));

const bubbleSort = async(array, setArray, setRunningFlag, speed) => {
    let tempArray = [...array];
    setRunningFlag(true);
    for(let i = 0; i < array.length; i++) {
        for(let j = 1; j < array.length - i; j++) {
              tempArray[j].backgroundColor = SELECTED_BLUR;
              if(tempArray[j].height < tempArray[j-1].height) {
                swap(j, j-1, tempArray);
            }
            
            setArray([...tempArray]);
            tempArray[j].backgroundColor = BAR_COLOR;
            tempArray[array.length - i-1].backgroundColor = FINISHED_BAR;
            await timer(speed);
            };
            await timer(speed); 
        }

        clearTimeout();
        setRunningFlag(false);
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
                <div className="control-panel">
                <Controller setSpeed={setSpeed} />
                <Button variant="contained" color="primary" disabled={isRunning} onClick={() => bubbleSort(array, setArray, setRunningFlag, speed)}>Start sorting</Button>
                </div>
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
            <footer />
        </div>
    )
}

export default Visualizer
