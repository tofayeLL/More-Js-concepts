
function checkAge(){
   const checkField = document.getElementById('input-field');
  const ageText = checkField.value;

  const errorTag = document.getElementById('error');
 
  try{
    const age = parseInt(ageText);
    if(isNaN(age)){
        throw 'please enter a number';
    }
    else if(age < 18){
        throw 'Age have to more that 18+';
    }
    else if(age > 40){
        throw 'above 40 is not allowed';
    }
    errorTag.innerHTML = ''; 
  }
  catch(error){
    console.log('Error:', error);
    errorTag.innerHTML = `Error: ${error}`;
  }
  finally{
    console.log('all done try catch');
  }

  console.log(11111111);

}