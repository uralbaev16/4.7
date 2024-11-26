// 1-chi masala
{
    let a = 1
    let b = 30

    let array = []

    for(let i = a; i <= b; i++) {
        if (i % 2 === 0){
            array.push(i)
        }
    }

    console.log(array);
}
//Recursive
{
    let a = 1;
    let b = 30;

    let array = []

    function recursive () {
        
        if (a % 2 === 0) {
            array.push(a)
        }
        a++;
        if(a <= b){
            recursive();
        }
    }
    recursive()
    console.log(array);
}

// 2-chi masala
{
    let a = 45

    let array = []
    for(let i = 10; i < a; i++) {
        if (i % 10 === 0){
            array.push(i)
        }
    }

    console.log(array);
}

// 3-chi masala
{
    let a = 18

    let array = []

    for (let i = 1; i <= a; i++) {
        array.push(i ** 2)
    }

    console.log(array);
}
// Recursive
{
    let a = 1;
    let oxiri = 18; 
    let array = [];
    
    function recursive() {
        if (a <= oxiri) { 
            array.push(a ** 2); 
            a++; 
            recursive(); 
        }
    }
    
    recursive();
    console.log(array);
}

// 4-chi masala
{
    function number (son) {
        let tartibli = String(son).split('')
        return tartibli.sort().join('')
    }

    console.log(number(354261));
}

// 5-chi masala
function removeQuestionMark(str) {
    if (str.endsWith('?')) {
        return str.slice(0, -1);
    }
    return str;
}
// 6-chi masala
{
  let a = 8

  let array = []

  for (let i = 1; i <= a; i++) {
    array.push(a)
  }

  console.log(array);
}
//Recursive
{
    let a = 8
    let array = []

    let qiymat = 1
    function recursive () {
        if (qiymat > a){
            return array
        }
        array.push(a)
        qiymat++

        return recursive()
    }

    recursive()
    console.log(array);
}

// 7-chi masala
function tekshirish (qiymat) {
    if (qiymat){
        return 'true'
    }else {
        return 'false'
    }
}
