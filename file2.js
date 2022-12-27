//  let n= 9;
//  let R = n%2
//  if(R==1){
//      n++;
    
//  }console.log(n);

//  let num = 18;
//  if(num%6==0){
//     console.log("Divisible by 2,3 and 6");
//  }

//  let size = 3;
//  let str = " ";
//  for(i=1; i<=size; i++){
//     if(i%2==1){
//        str = str +"j";
        
//     }
//     else{
//        str= str+"k";
//     }
    
//  }console.log(str);


//  let num1 = 1;
//  let count = 0;
//  for(let i = 2; i<num1; i++){
//     if (num1%i==0){
//         count++;
//  }
 
// }
// if (count==0){
//    if(count==1){
//       console.log("one is neighther prime nor composite");
//    }
//    else{
//     console.log("prime");
// }
// }
// else{
//     console.log("composite");
// }

// let n = 0;
// if(n>0){
//    console.log("positive number");
// }
// else{
//    console.log("negative");
// }

// let n = 99;
// if(n%10==0){
//    console.log("multiple of 10");
// }
// else{
//    console.log("not a multiple of 10");
// }

// let m = 10;
// let n = 10;
// if(m>n){
//   console.log("larger");
  
// }else if(m<n){
//    console.log("smaller");
// }
// else if(m==n){
//    console.log("equal");
// }

// let n = 15;
// let str1 = " ";
// for(let i = 2; i<=5; i++){
//    if(i%2==0){
//       str = i+"::"+"NO";
//       console.log(str);
//    }else{
//       str = i+"::"+"YES";
//       console.log(str);
//    }
// }

// let n = 88;
// function fun(n){
//    let arr = n
//    let a;
//    a= arr%10;
//    if(a%2==0&&a!=8&&a!=0){
//       console.log("even")
//    }
//    else if(a%2!=0&&a!=5){
//       console.log("odd")
//    }
//    else if(a==8){
//       console.log(a)
//    }
//    else if(a==5){
//       console.log(a)
//    }
//    else if(a==0){
//       console.log(a)
//    }
//    return a
// }
// fun(n)

// let n1 = 100
// let str2
// str2 = n1%10       
// console.log(str2)  
// if(str2%2==0 && str2!=0 && str2!=8){
//    console.log(str2,"even number")
// }
// else if (str2%2!=0&& str2!=5){
//    console.log(str2,"odd number")
// }
// else if(str2==0){
//    console.log(str2,"zero")
// }
// else if (str2==8){
//    console.log(str2,"Eight")
// }
// else if (str2==5){
//    console.log(str2,"Five")
// }


// let n2 = 108
// let str3
// str3 = n2%10
// console.log(str3)
// if(str3%2==0&& str3!=8 &&str3!=0){
//    console.log(str3,"even number")
// }
// else if (str3%2!=0 && str3!=5){
//    console.log(str3,"odd number")
// }
// else if(str3==0){
//    console.log(str3,"zero")
// }
// else if(str3==8){
//    console.log(str3,"eight")
// }
// else if (str3 == 5){
//    console.log(str3,"five")
// }

board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


function validSudoku(board){
for(let i=0; i<=9 ;i++){
   for(let j=0;j<=9;j++){
      const value = board[i][j];
      if(validSudoku!="."){
         if(!validRaw(board,i,j,value)|| !validColumn(board,i,j,value)|| !validBox(board,i,j,value)){
            return false;
         }
      }
   }
   return true;
};
function validRaw(board){
   for(let j =0; j<8; j++){
      if(j!=col){
         if(board[Raw][j]===value){
            return false;
         }
      }
   }
   return true;

}

function validColumn(board){
   for(let i =0; i<8; i++){
      if(i!= Raw){
         if(board[col][i]===value){
            return false;

         }
      }
   }
   return true;
}
function validBox(board){
   const startRow = Raw-(Raw%3), startCol = col - (col%3);

   for(let i = startRow; i< startRow +3; i++){
      for(let j = startCol; j<startCol+3; j++){
         if(i!= Raw && j!= col){
            if(board[i][j]===value){
               console.log("invalid");
            }
         }
      }
      console.log("valid");
   }
   console.log(validSudoku(board));
}
}

//var regex = /^(?=.*year(\d{4}))(?=.*month(\d\d))(?=.*day(\d\d)).*$/i