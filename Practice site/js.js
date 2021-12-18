function DateFunction()
{
    document.getElementById('date').innerHTML = Date();
}
function Greeting()
{
    document.getElementById('hello').innerHTML = 'Hello VSM !!!!';
}
function TurnOnBulb()
{
    document.getElementById('bulb').src='images/pic_bulbon.gif';
}
function TurnOffBulb()
{
    document.getElementById('bulb').src='images/pic_bulboff.gif';
}

function DisplayCar()
{
    const car =["BMW","Benz","Audi"];
    document.getElementById("jsarray").innerHTML = car;
}