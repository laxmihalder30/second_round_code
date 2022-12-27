// for(let i=0; i<=3; i++){
//     console.log(i);
// }

// /*let str = "Hello";
// for(let i=1; i<=3; i++){
//     console.log(i+str);
// }*/


// for(let i=1; i<=7; i++){
//     let str = "Count=";
//     console.log(str+i);
// }

// let str1 = " ";
// for(let i=0; i<=3; i++){
//      str1 = str1 +"A";
//    console.log(str1)
// }
// let str = " ";
// for(let i=1; i<=3;i++){
//     str = str + i;
//    console.log(str);
// }
// let a = 3;
// for(let i = 1; i<=10; i++){
//     let m = a*i;
//  console.log(a +"*"+ i+ "="+m);
// }

// for(let i =1; i<=10; i++){
//     console.log(i);
// }

// let str2 = "JavaScipt"; 
// for(let i = 1; i<=6;i++){

//     console.log(i+str2);
// }

// let str3 = "employeeId";
// for(let i = 1; i<=5; i++){
//     str = str3+"::"+i;
//     console.log(str)
// }


// for(let i = 1; i<=11; i++){
//     cube = i*i;
//     console.log(cube);
// } 

// for(let i = 1; i <= 10; i++){
//     a = i+" "+ i*10+" "+i*20;
//     console.log(a);
// }

// for(let i=1;i<=8; i++){
//     a= i+" "+1+i+" "+10+i+" "+100+i;
//     console.log(a);
// }
// let str4 = "X";
// for(let n=1; n<=2;n++){
//     str = str4+n;
//     console.log(str);
// }

// let str5 = " "; 
// //let str6 = "B";
// for(let n=1;n<=3;n++){
//     str = str5+"A"+n;
//     console.log(str);
// }
// let n = 4;
// let arr =" ";
// for(let i=1;i<=n; i++){
//     arr = arr+"A"+i;
//     console.log(arr);
// }

// let a1 = 4;
// let c = 0;
// for(let i=1; i<= a1; i++){
//     c = i+(i+1);
//     console.log(i+"+"+(i+1)+"="+c);
// }


// let num = 2;
// if (num/2==0){
// console.log(num);
// }
// else{
//     a = num+1;
//     console.log(a);

// }

// let n = 55;
// function fun(n)
// {
//     let arr = n
//     let a;
//     a = arr%10;
//     if(a%2==0&&a!=8&&a!=0){
//         console.log("even")
//     }
//     else if(a%2!=0&&a!=5){
//         console.log("odd")
//     }
//     else if(a==5){
//         console.log(a)
//     }
//     else if(a==8){
//         console.log(a)
//     }
//     else if(a==0){
//         console.log(a)
//     }  
//     return a
// }
// fun(n)

let array = [1, 2, 3];
array[6] = 9;
console.log(array[5]);
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());



var s = "radar";
    var rever = "";
    var l=s.length;
    
    for (var t =l; t >=0; t--) {
        rever = rever + s.charAt(t);
    }
    console.log(rever);
    if (rever===s) {
        console.log("palindorme")
    }
    else {
        console.log("not palindorme ");
    }

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
   
// function validSudoku(board) {
//     for (let i = 0; i < 9; i++) {
//          for (let j = 0; j < 9; j++) {
//              const value = board[i][j];
//              if (value !== '.') {
//                  if (!validRow(board, i, j, value) || !validColumn(board, i, j, value) | !validBox(board, i, j, value)) {
//                      return "invalid";
//                  }
//              }
//          }
//      }
//      return "valid";
//  };
 
 //The row function.
 function validRow(board, row, col, value) {
     // j represents on column
     for (let j = 0; j < 8; j++) {
         // check if the current column matches the passed in column
         if (j !== col) {
             if (board[row][j] === value) {
                 return false; 
             }
         }
     }
     
     return true;
 }
 
 // The column function.
 function validColumn(board, row, col, value) {
      // j represents on row
     for (let i = 0; i < 8; i++) {
         // check if the current row matches the passed in row
         if (i !== row) {
             if (board[i][col] === value) {
                 return false; 
             }
         }
     }
     
     return true;
 }
 
 //The sub-boxes function.
 function validBox(board, row, col, value) {
     const startRow = row - (row % 3), startCol = col - (col % 3);
     
     for (let i = startRow; i < startRow + 3; i++) {
         for (let j = startCol; j < startCol + 3; j++) {
             if (i !== row && j !== col) {
                 if (board[i][j] === value) {
                     return false;
                 }
             }
         }
     }
     
     return true;
 }

 console.log(validSudoku(board))
