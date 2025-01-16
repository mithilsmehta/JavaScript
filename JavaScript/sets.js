 /*var mySet = new Set()
 mySet.add(1)
 mySet.add(2)
 mySet.add(3)
 mySet.add(4)
 console.log(mySet)*/

 let arr = [1,2,3,4,3,45,3,5,6,2,3,1]

 let mySet2 = new Set(arr)
 console.log(mySet2)
 let myarr = Array.from(mySet2)
 console.log(myarr)

 for (let item of myarr)
    console.log(item)

 mySet2.delete(45)
 console.log(mySet2)

 mySet2.clear()
 console.log(mySet2)