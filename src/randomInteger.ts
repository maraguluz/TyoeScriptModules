function randomInteger(min: number, max:number): number{
  min = Math.ceil(min) 
  // these just take a decimal point off the number 
  // if your number is 3.14 the floor of it is 3 and the ceiling is 4
  max = Math.floor(max)

  return Math.floor(Math.random() * (max-min)) + min
} 
//Allow other parts of our code to import this such as main its making us organized
export default randomInteger