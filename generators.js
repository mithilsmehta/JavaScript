/*function * generate ()
{
    let i = 0;
    yield "BMW";
    yield "Audi";
    yield "Mercedes";
    yield "Honda";



}

let gen = generate()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next()) */

// adding array 

function * generate ()
{
    let i = 0;
    var ar = ["BMW", "Audi", "Mercedes","Honda"]
    while (i<ar.length)
    {
        yield ar[i]
        i++;
    }
}
let gen = generate()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

