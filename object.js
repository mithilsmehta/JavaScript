var car =
{    
    car_manufacture : "Audi",
    car_model : "Q3",
    price :"50000",

    allwheeldrive : function()
    {
        document.write("This car comes with four wheel drive")
    }
}

car.allwheeldrive();
// 150lines
//car.car_color ="Black";
document.write("<h1>"+ car.car_color+ "<h1>");

car.fuel_type ="45 Ltrs";
document.write("<h1>"+ car.fuel_type+"<h1>");

car.newfun = function()
{
    return("function sucessfully loaded");
}
document.write(car.newfun());

// now how to delete a object

delete car.car_model;
document.write(car.car_model);

car.price = "70000";
document.write("<h1>"+ car.price+"<h1>");
document.write("<h1>"+ typeof(car.price)+"<h1>");


