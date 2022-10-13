function analyzeArray(array) {

    const object = {
        length: array.length,
    };

    let sum = null;
    let min = null;
    let max = null;

    for (let i = 0; i < array.length; i++){
        sum += array[i];
        if (!min || array[i] < min) {
            min = array[i];
        }
        if (!max || array[i] > max) {
            max = array[i];
        }   
    }

    object.average = sum / array.length;
    object.min = min;
    object.max = max;
    
    return object;

}

export default analyzeArray;