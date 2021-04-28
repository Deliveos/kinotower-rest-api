export const average = (array: Array<Object>)=> {
  let sum: number = 0;
  for (let i = 0 ; i < array.length; i++) {
    sum += array[i].ball;
  }
  return Math.floor(sum/length);
}