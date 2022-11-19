// JAGGED ARRAY

function createMatrix(rows,columns) {
    let jaggedArray = new Array(rows)
    for (let i =0 ;i<columns;i++){
        jaggedArray[i] = new Array(rows)
    }
    return jaggedArray
}

// console.log(createMatrix(3,4))

function Matrix(rows, columns) {
    var jaggedarray = new Array(rows);
    for (var i=0; i < columns; i +=1) {
         jaggedarray[i]=new Array(rows); 
    }
     return jaggedarray;
}
     console.log(Matrix(3,4));