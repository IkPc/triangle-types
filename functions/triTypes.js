function triTypes(a,b,c) {
    return (a + b > c && a + c > b && b + c > a) ?
        (a === b && a === c)
            ? 'equilateral' :
            (a === b || a === c || b === c)
                ? 'isosceles'
                : 'scalene'
        : 'none'
}

module.export = triTypes;