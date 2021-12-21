
class ComponentTemplate{

    constructor(matrix){
        this.matrix = matrix; 
        this.value; 
        this.id;
    }

    fullMatrix(numberNets){
        var matrix_full = math.zeros(numberNets, numberNets+1)._data;
        for(var i = 0; i<this.matrix.length; i++){
            var row = this.matrix[i].row;
            var col = this.matrix[i].col;
            if(row == MatrixEntry.rowEnd)
                row = numberNets-1;
            if(col == MatrixEntry.colEnd)
                col = numberNets;

            matrix_full[row][col] = this.matrix[i].value;
        }
        return matrix_full;
    }

}