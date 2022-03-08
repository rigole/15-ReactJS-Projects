/*function one () {

}

const obj = {

    two: function () {
        return 2;
    }
}*/

/*obj.two(); 

const four = new Function('num','return num')
four(4);

function roaaaaaaaar() {
    console.log("Woohooo");
}

roaaaaaaaar.yell = "grrrrrrrrrrrrr!";

const specialObj = {
    yell: "grrrrrrrrrrr",
    name: "Woohooo",
    
}*/

function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        } 
        
    }
}
a()