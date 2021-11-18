///caculating process
function compute()
{
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal <= 0) {
        window.alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }
    else {
    	document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark> \<br\>"
    
    }

}

//update rate dinamically
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
function reset() {
    document.getElementById("principal").value ='';    
    document.getElementById("rate_val").innerHTML = "10.25";    
    document.getElementById("years").value = 1;
    document.getElementById("rate").value = 10.25;
    document.getElementById("result").innerHTML = '';
}