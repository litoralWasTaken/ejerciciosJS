const sayHello = (isFriend = true) => {
    let greetings = isFriend ? 'Hello friend' : 'Go away Enemy';
    console.log(greetings);

}

sayHello(false);

const sayHelloTwoSecs = () => {
    setInterval(() => {
        
        console.log('Hello');
    }, 2000);

}

sayHelloTwoSecs();

const helloFriend = (name) => {
    console.log(`Hello ${name}`);

}

helloFriend('Rodrigo');