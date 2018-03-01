module.exports = function solveEquation(equation) {
    var selectAllSpaces = new RegExp(/\s/g);
    var equationNoSpaces = equation.replace(selectAllSpaces, '');

    var equationParts = equationNoSpaces.split('*x^2');
    var aParamText = equationParts[0];
    var remainingEq = equationParts[1];
    
    equationParts = remainingEq.split('*x');
    var bParamText = equationParts[0];
    remainingEq = equationParts[1];
    var cParamtext = remainingEq;
           
    var a = parseInt(aParamText, 10);
    var b = parseInt(bParamText, 10);
    var c = parseInt(cParamtext, 10);
    
    var D = b * b - 4 * a * c;
    var x1 = Math.round((-b - Math.sqrt(D)) / (2 * a));
    var x2 = Math.round((-b + Math.sqrt(D)) / (2 * a));
    var answersArray = [x1, x2];

    answersArray.sort(function(a,b){ return a-b; })
   
    return answersArray;
}
