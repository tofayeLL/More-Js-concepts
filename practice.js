
// 1a) Write a function that displays a message after 5s.
/* --------practice task 1------- */
/*  const display = (message)=>{
    setTimeout(()=>{
        console.log(message);
    }, 5000)
 };
 display('Hello chandu!'); */


//question:1b) Write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.

/* 
const displayGreetings = (name, time)=>{
    setTimeout(()=>{
        console.log(`Hello, ${name}!`);

    }, time);
}
displayGreetings('Alice', 2000); */


/* -------------------------------------------------------------- */


/* --------practice task 2-------- */
// question: The function tellJoke() below logs a funny message every 2 seconds and after 10 seconds, it stops. Complete the code below and see the output.

/* function tellJoke(){
    console.log("why dont scientist trust atom? because they make me up everything");
    
}
   const jokeInterval = setInterval(()=>{
    tellJoke();
   
   }, 2000);

   // After 10 seconds, stop telling jokes

   setTimeout(() => {
    clearInterval(jokeInterval);
   }, 11000); */



   /* ----------------------------------------------------------- */


   /* ------practice task 3----- */
//    question: Write an async/await function that fetch data from an api and logs a message.

const loadData = async()=>{
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data = await res.json();
    console.log(data);
    displayJokes(data.joke);  
}

const displayJokes = (data) =>{
    const joke = document.getElementById('rendom-jokes');
    joke.innerText = data;  
}


loadData();


    
  



