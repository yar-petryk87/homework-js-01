var argumentFirst = Number(prompt('Enter the argument "a" '));
var argumentSecond = Number(prompt('Enter the argument "b" '));
var argumentThird = Number(prompt('Enter the argument "c" '));
var solving = equation(argumentFirst, argumentSecond, argumentThird);
document.write('<strong> your solving is</strong> ' + solving);

function equation(a,b,c) {
    
    var discriminant = (b*b) - (4*a*c);
    
    var result1 = (-b + Math.sqrt(discriminant))/2*a;
    var resultFirst = result1.toFixed(3);
    
    var result2 = (-b - Math.sqrt(discriminant))/2*a;
    var resultSecond = result2.toFixed(3);
    
    var result3 = -(b/2*a);
    var resultThird = result3.toFixed(3);
    
    if (isNaN(a) || isNaN(b) || isNaN(c) ) {alert ('You should only enter the number') };
    
    
    if( discriminant == 0) {return  resultThird}
        else if (discriminant>0 && a!=0) {  return   resultFirst + " and " + resultSecond}
            else {return " 'no resolution' " }
    
    
};  
    
    
    

