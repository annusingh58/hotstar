function signup(event){
    event.preventDefault();
    alert("working");
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;

// var a=1;
// var array=[1,2,3];
// var object={a:1};
    if(name && email && password && confirmpassword){
        if(password.length >=8 && confirmpassword.length>=8 ){

            if(password==confirmpassword){

                var hotstar=JSON.parse(localStorage.getItem("hotstarUserData")) || []
                
                var flag =false;

                for(var i=0; i<hotstar.length; i++){
                    if(hotstar[i].uemail==email){
                        flag=true;
                    }
                    

                }
                if(flag==true){
                    alert("email already exits")
                }
                else{
                    var hdata ={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword}
                    hotstar.push(hdata);
                    localStorage.setItem("hotstarUserData",JSON.stringify(hotstar))
                    alert("signup sucessfully")
                    document.getElementById("name").value=''
                    document.getElementById("email").value=''
                    document.getElementById("password").value=''
                    document.getElementById("confirmpassword").value=''
                    window.location.href="./login.html"
                    
               
                }



            }
            else{
                console.log("password not match")
            }


        }


        else{
            console.log("password should be 8 digit")
        }

    }
    else{
        console.log("all field are required")
    }




    
}

function login(event){
    event.preventDefault();
    var lemail=document.getElementById("lemail").value;
    var lpassword=document.getElementById("lpassword").value;

    var loginuser={};

    if(lemail && lpassword){
        var hotstarl =JSON.parse(localStorage.getItem("hotstarUserData"));
         var flag =false;
         for(var i=0; i<hotstarl.length; i++){
            if(hotstarl[i].uemail==lemail){
                flag=true;
                loginuser=hotstarl[i];

            }

         }
         if(flag==true){
            localStorage.setItem("hotstsarCurrentUser",JSON.stringify(loginuser))
            alert("login successful");
            window.location.href="./Homepage.html"
            document.getElementById("lemail").value=''
            document.getElementById("lpassword").value=''
         }
         else{
            alert("caredential are match");
         }

    }
    else{
        console.log("both are required");
    }


}