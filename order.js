function show(){
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var txt = document.getElementById("txt").value;
    var phn = document.getElementById("phn").value;
    var add = document.getElementById("add").value;
    var phoneno = /^\d{10}$/;
    var flag;
    if(phn.match(phoneno))
        {
            flag=true;
        }
        else
        {
            alert("Contact Number should be of 10-digits!");
            flag = false;
        }
    if(date==0||time==0||name==0||txt==0||phn==0||add==0||flag==false)
    alert("Please Enter your details!!");
    else
    alert("Thank you "+name+"! Your order has been placed for "+date+" and "+time); 
}