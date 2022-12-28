export function signIn(email, password){
    try {
        this.email = email;
        this.password = password;
    }catch(err){
        console.log(err);
    }
}