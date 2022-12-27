 function parseBirthday(remarkString){
    var regex = /^(?=.*year(\d{4}))(?=.*month(\d\d))(?=.*day(\d\d)).*$/ig;
    let m ;
       let formattedDate =''
    while ((m= regex.exec(remarkString)) !== null) 
    {
        if (m.Index === regex.lastIndex){
            regex.lastIndex++

            formattedDate = m[0];
            formattedDate +=m[1]
            console.log(formattedDate,m)
        }
        
    }
    return formattedDate
}
console.log(parseBirthday("Ahddh2000yearbsj12monthsjdjd12day"))


//





// let n = 100
// if(n%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd")
// }
// let num = n%10
// switch(num) {
//     case 1:
//       console.log(num)
//       break;
//     case 2:
//        console.log(num)
//       break;
//       case 3:
//         console.log(num)
//         case 4:
//       console.log(num)
//       break;
//     case 5:
//        console.log("five")
//       break;
//       case 6:
//         console.log(num)
//         case 7:
//             console.log(num)
//             break;
//           case 8:
//              console.log("Eight")
//             break;
//             case 9:
//               console.log(num)
//               break;
//             case 0:
//                 console.log("Zero")

//              break;
              
//   }

// let n2 = 105
// if(n2%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }
// let digit = n2%10
// if(digit==0){
//     console.log("zero")
// }
// else if(digit==8){
//     console.log("eight")
// }
// else if(digit ==5){
//     console.log("five")
// }
// else{
//     console.log(digit)
// }

// function checkNum(num){
//   if(num%2==0){
//     return "even"
//   }
//   else{
//     return "odd"
//   }
// }
// function showNum(num){

// let digit = num%10
// if(digit == 0){
//   return "Zero"
// }
// else if(digit == 8){
//   return "eight"
// }
// else if(digit==5){
//   return "five"
// }
// else{
//   return digit+ ""
// }
// }
// let input = 105
// let res = showNum(input)
// console.log(res)
// console.log(checkNum(input))



let n = 208
function findNum(n) {
  let num = n%10

  let str = " "
  if(num%2==0 && num != 8 && num != 0){
   str = "even"
  }
  else if (num%2 !=0 && num !=5){
     str = "odd"
  }
  else if(num==0){
     str = "Zero"
  }
  else if (num===5){
     str = "five"
  }
  else if(num===8){
     str ="eight"
  }
  return str
}
let res = findNum(n)
console.log(res)