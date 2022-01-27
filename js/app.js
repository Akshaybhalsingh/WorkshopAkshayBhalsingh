$(document).ready(()=>{
    $('#usercheck').hide();
    $('#passcheck').hide();

    var user_err = true;
    var pass_err = true;


    $('#usernames').keyup(()=>{
        username_check();
    });

    function username_check(){

        var user_val = $('#usernames').val();

        if(user_val.length == ''){
            $('#usercheck').show();
            $('#usercheck').html("**Please fill the username");
            $('#usercheck').focus();
            user_err = false;

            return false;


        }else{
            $('#usercheck').hide();
        }

        if((user_val.length  <3 ) || (user_val.length >10)){
            $('#usercheck').show();
            $('#usercheck').html("**username length must between 3 and 10");
            $('#usercheck').focus();
            user_err = false;

            return false;


        }else{
            $('#usercheck').hide();

        }    

        
    }


    $('#password').keyup(function(){
        password_check();
    });

    function password_check(){
        var passwrdstr = $('#password').val();

        if(passwrdstr.length == ''){
    
                $('#passcheck').show();
                $('#passcheck').html("**Please fill the username");
                $('#passcheck').focus();
                user_err = false;
    
                return false;

        }else{
            $("passcheck").hide();
        }

        if((passwrdstr.length  <3 ) || (passwrdstr.length >10)){
            $('#passcheck').show();
            $('#passcheck').html("**password length must between 3 and 10");
            $('#checpassk').focus();
            user_err = false;

            return false;


        }else{
            $('#passcheck').hide();

        }    

        
    }
    
        
});
});