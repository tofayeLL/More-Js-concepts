
// 1a) Write a function that displays a message after 5s.
/* --------practice task 1------- */
/*  const display = (message)=>{
    setTimeout(()=>{
        console.log(message);
    }, 5000)
 };
 display('Hello chandu!'); */


//question:1b) Write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.


const displayGreetings = (name, time)=>{
    setTimeout(()=>{
        console.log(`Hello, ${name}!`);

    }, time);
}
displayGreetings('Alice', 2000);



