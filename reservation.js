function show(){
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var no_ppl = document.getElementById("num").value;
    if(no_ppl<1 || no_ppl>100)
    alert("Enter relevant No. of people!!!");
    else if(date==0||time==0||name==0)
    alert("Please Enter your details!!");
    else
    alert("Thank you "+name+"! Your table has been reserved for "+no_ppl+" on "+date+" and "+time); 
}