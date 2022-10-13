import './style.css'
//import the thing exported from the file 
import randomInteger from './randomInteger'
//can also rename randomInteger to whatever I want 


import {diagonalLength, square} from './util'
//can change name of what youre importing by import {diagonalLength as pythagoreanLength}

const sixSideRoll = randomInteger(0,6) +1
console.log(`You just rolled a ${sixSideRoll}`)


console.log(diagonalLength(4, 3))