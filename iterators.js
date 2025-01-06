function cars(values)
{
    let index = 0;
    return{
        next: function(){
            if (index<values.lenth)
                return{
            value : values[index++],
            done : false
            }
            else
            {
                return{
                    done:true
                }
            }
        }
    }
}


var arr = ["BMW", "Audi", "Mercedes", "Honda"]

var newCars = cars(arr);
console.log(newCars.next())
console.log(newCars.next()) 













//console.log(arr)
//console.log(arr.length)

/*for(let i = 0; i<arr.length;i++)
{
    console.log(arr[i])
}

for(let i of arr)
{
    console.log(i);
}*/