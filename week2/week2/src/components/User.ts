

interface User{
    email:String;
    password:String;
}

function CreateUser(newEmail:String, newPassword:String):User{
    let newuser:User = {
        email:newEmail,
        password:newPassword,
    };
    return newuser;
}

function LoginUser(){
    return;
}
