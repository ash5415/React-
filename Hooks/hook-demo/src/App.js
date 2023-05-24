/* eslint-disable no-undef */
import{useState} from'react';
import Fetch from './components/Data';
import ComponentX from'.components/ComponentX'
import Title1 from './components/Title1';
import Title2 from './components/Title2';
  
 
 export const TopLevelContext  = React.createContext();
const App =()=>{
     
    const initialValue =0
  const [count,setCount] =useState(initialValue);

  const [numbers,setNumbers]=useState([])
       /*
          if i want to update the state value based on the previous state value, then it is a good practice
          to pass a function in order to set new state value    
       */

    const increaseByTwo = () =>{
        for(let i=0; i< 2;i++){
            setCount(count => count + 1);
        }
    }

    const setArray =()=>{
        setNumbers(
            [
                ...numbers,
                {
                    id: numbers.length,
                    value:Math.round(Math.random() * 1000)
                }
            ]
        )
    }
      return(
        <div>
          <center>
            <header>
                 Welcome To The React
            </header>

            <h1> the count value :{count}</h1>
                  <hr/>
            <button onClick={()=>{setCount(count + 1)}}> Increase</button>
                   <br/>   <br/>
            <button onClick={()=>{setCount(count - 1)}}> Decrease</button>
                  <br/>  <br/>
            <button onClick={increaseByTwo}>IncreaseByTwo</button>
                  <br/>  <br/>
            <button onClick ={setArray}> Array </button>
          </center>
             {
                numbers.map((item,index)=>{
                    return(
                        <div key ={index +1}>
                            <center>
                                 {item.value}
                            </center>
                           
                        </div>
                    )
                })
             }
             <Fetch/>
             <TopLevelContext.Provider value={"i'm from top level component"}>
                  <ComponentX/>
             </TopLevelContext.Provider>
             <Title1/>
             <Title2/>
             
        </div>
        
        
      )
}

export default App;