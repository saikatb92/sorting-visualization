export const swap = (i, j, array) => {
    let temp = array[i].height;
    array[i].height = array[j].height;
    array[j].height = temp;
}

export const timer = ms => new Promise( res => setTimeout(res, ms));