import {useState} from 'react';
const Form  =()=>{
    // const[name,setName] = useState('Ashok');
    // const[mail,setMail] = useState('velpula-ashok@outlook.com');
    const onSubmit =(event)=>{
        console.log('click')
    }
    // const onChangeName =(event)=>{
    //      const{value} = event.target;
    //      setName(value);
    //      //console.log(value);
    // }

    // const onChangeMail=(event)=>{
    //        const{value} = event.target;
    //        setMail(value);
    // }
       const[userData,setUserData] =useState({});
       const onChangeHandler =(event)=>{
       const{value,name} =event.target;
            setUserData((prevState)=> ({
                   ...prevState, [name]: value
            }));
       }
    return(
        <div>
            <h1>{userData && JSON.stringify(userData)}</h1>
            <form>
                <label> username:</label>
                <input type="text"  name='FullName' onChange={onChangeHandler} placeholder='EnterName'/>
                <label>Email:</label>
                <input type="text"  name='Email' onChange={onChangeHandler} placeholder='Email'/>
                <label>country</label>
                <select>
                     <option>USA</option>
                     <option>CANADA</option>
                     <option>AUSTRALIA</option>
                </select>
                <button onClick={()=> onSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Form;