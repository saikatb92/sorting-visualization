import { BAR_COLOR, FINISHED_BAR, SELECTED_BAR } from "../Visualizer";
import { swap, timer } from '../utils/utils';

const bubbleSort = async(array, setArray, setRunningFlag, speed) => {
    let tempArray = [...array];
    setRunningFlag(true);
    for(let i = 0; i < array.length; i++) {
        for(let j = 1; j < array.length - i; j++) {
              tempArray[j].backgroundColor = SELECTED_BAR;
              if(tempArray[j].height < tempArray[j-1].height) {
                swap(j, j-1, tempArray);
            }
            
            setArray([...tempArray]);
            tempArray[j].backgroundColor = BAR_COLOR;
            await timer(speed);
            };
            tempArray[array.length - i-1].backgroundColor = FINISHED_BAR;
            await timer(speed);
        }

        clearTimeout();
        setRunningFlag(false);
    }

    export default bubbleSort;