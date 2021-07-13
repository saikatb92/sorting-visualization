import { swap, timer } from '../utils/utils';
import { BAR_COLOR,FINISHED_BAR } from '../Visualizer';

const PIVOT_COLOR = 'darkblue';
const partition = async (array, setArray, speed, left, right) => {
   const pivotIndex = right;
   const pivot = array[pivotIndex].height;
   array[pivotIndex].backgroundColor = PIVOT_COLOR;
   setArray([...array]);
   let i = left - 1;
   let j = left;

   while(i < array.length && j < array.length && j < pivotIndex) {
       array[j].backgroundColor = FINISHED_BAR;
       setArray([...array]);
       await timer(speed);
       if(array[j].height < pivot) {
           i++;
           swap(i, j, array);
           setArray([...array]);
           array[i].backgroundColor = BAR_COLOR;
       }
       array[j].backgroundColor = BAR_COLOR;
       j++;
       setArray([...array]);
       await timer(speed);
   }
   array[pivotIndex].backgroundColor = BAR_COLOR;
   swap(i+1, pivotIndex, array);
   setArray([...array]);
   return i+1;
}
const quickSort = async (array, setArray, setRunningFlag, speed, left, right) => {
    if(left < 0 || left >= array.length || right < 0 || right >= array.length || left >= right) {
        return;
    }
    const partitionIndex = await partition(array, setArray, speed, left, right);

    await Promise.all([
        quickSort(array, setArray, setRunningFlag, speed, left, partitionIndex-1),
        quickSort(array, setArray, setRunningFlag, speed, partitionIndex+1, right)])
}

const quickSortShell = async (array, setArray, setRunningFlag, speed, left, right) => {
    setRunningFlag(true);
    await quickSort(array, setArray, setRunningFlag, speed, left, right);
    setRunningFlag(false);
}
export default quickSortShell;