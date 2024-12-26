const user = {
    username: "Mayank",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "Himanshi"
// user.welcomeMessage()



function chai(){
    let username = "Mayank"
    console.log(this.username); 
}

chai()