

function login()
{
    var fullname = document.getElementById("name").value;
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(fullname==''){
        alert("please enter your full name.");
    }
    else if(uname =='')
    {
        alert("please enter user name.");
    }
    else if(pwd=='')
    {
        alert("enter the password");
    }
    else if(!filter.test(uname))
    {
        alert("Enter valid email id.");
    }
    else if(pwd.length < 6 || pwd.length > 6)
    {
        alert("Password min and max length is 6.");
    }
    else
    {
alert('Thank You for Login now you are the member & You are Redirecting to United State Department of Agriculture for more information');
   window.location = "https://www.nrcs.usda.gov/wps/portal/nrcs/site/national/home/";
        }
}

var button= document.getElementById('loginBtn');
button.addEventListener('click', function(e){
fetch("http://localhost:3000/users", { 
        
        method: "POST", 
         
        body: JSON.stringify({
            name: name, 
            email: email, 
            password: password
        }), 
        
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
    })
})
