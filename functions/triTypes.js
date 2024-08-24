function triangleTypes(a, b, c) {
    //is triangle
    if( a + b > c && a + c > b && b + c > a){
        //all equal = equilateral
        if(a === b && a === c && b === c){
            return 'equilateral';

        //all different = scalene
        } else if(a != b && a != c) {
            return 'scalene';
        }
        //two equal, one different
        return 'isosceles'
    }
    //isnt triangle
    return 'none';
}

module.exports = triangleTypes;
