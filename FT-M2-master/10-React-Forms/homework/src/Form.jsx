import React from 'react';

export function validate(input){
  let error={};

  if(!input.username){
      error.username = 'Username is required';
  }else if(!/\S+@\S+\.\S+/.test(input.username)){
    error.username = 'Username is invalid'
  }

  if(!input.password){
    error.password = 'Password is required';
  }else if(!/(?=.-*[0-9])/.test(input.password)){
    error.password = 'Password is invalid';
    
  }

  return error
}


export default function  Form() {

  let [error, setError] = React.useState({});

  let [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  let handleInputChange = (e)=>{ // 'e' de evento
    // [e.target.name] --> Esto me permite manipular dos inputs disitntos con la misma funcion
    // obtiene el nombre del atributo name del input que conincide con la propiedad del 
    // objeto del estado

    setInput(prev =>({...prev, [e.target.name] : e.target.value}))

    //Aqui se valida la informacion
    let objError = validate({...input, [e.target.name]:e.target.value}) //envio conatntemente la informacion actualizada
  
    setError(objError)
  };

  
  return (
    <form>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          value={input.username}
          name="username" 
          placeholder='Ingrese su mail'  
          onChange={handleInputChange}
          className={error.username && 'danger'}
          />
          {
            error.username && (<p>{error.username}</p>)
          }
        
        <hr />
        <label>Password:</label>
        <input 
          type="password"
          value={input.password} 
          name="password" 
          placeholder='Ingrese su pass' 
          onChange={handleInputChange}
          className={error.password && 'danger'}
          />

          {
            error.password && (<p>{error.password}</p>) 
          }


          
      </div>
      {
            //(error.username || error.password) ? null: <input type={submit}/>
          }
      <input type="submit" value={'ingresar'} />
    </form>
      
  )
}
