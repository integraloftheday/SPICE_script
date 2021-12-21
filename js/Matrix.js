class Matrix extends math.matrix{
    // This does not seem to work IDK why. 
    // When extending math.matrix it overwrites the methods removeRow and removeCol. 

    constructor(array){
        super(array);
    }

    removeRow(row){
        this._data.splice(row,row);
    }

    removeCol(col){
        for(var i = 0; i<this._data.length; i++){
            this._data[i].splice(col,col);
        }
    }
}

//moved into global space as functions that work on arrays 

function removeRow(arrayO, row){
    var array = [...arrayO]; 
    array.splice(row,1);
    return array; 
}

function removeCol(arrayO,col){
    var array = [...arrayO]; 
    for(var i = 0; i<array.length; i++){
        array[i].splice(col,1);
    }
    return array; 
}