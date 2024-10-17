export const registerUser = (user) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if(users.length == 0){
        user.password = hashPass(user.password);
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users))
        console.log("New user added");
    }else{
        for(let i=0;i<users.length;i++){
            if(users[i].email == user.email){
                console.log('user already exists');
            }else{
                    user.password = hashPass(user.password);
                    users.push(user);
                    localStorage.setItem("users",JSON.stringify(users))
                    console.log("New user added");
            }
        }
    }
    
}

export const loginUser = (user) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    for(let i=0;i<users.length;i++){
        if(users[i].name == user.name &&  users[i].email == user.email && users[i].password == hashPass(user.password)){
            console.log('user logged in');
            document.getElementById('task-Container').classList.remove('hidden');
            localStorage.setItem('isLogged',JSON.stringify(user.name));
            break;
        }else{
            console.log('Wrong credentials');
        }
    }
    
}

function hashPass(password){
    return '@@' + password + '@@';
}