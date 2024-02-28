import React, { useRef } from 'react';
import React,{useRef} from 'react';
import Input from './input';
import Button from './Button';
import Label from './Label';
const  Sub=() =>{
    const FullNameRef = useRef(null);
    const EmailRef = useRef(null);
const onSubmit = ()=>{
    const name =  FullNameRef.current.value;
    const mail = EmailRef.current.value;
    const final = {
        'name' : name,
        'mail' : mail
    };
    console.log(final);
}
  return (
    <div>
        <form>
            <Label labelName='fullName'/>
            <Input type ='text' name='fullName'/>
            <Label labelName='Email'/>
            <Input type="text" name ='email'/>
            <Button onClick={onSubmit} buttonLabel={submit}/>
        </form>
    </div>
  )
}

export default Sub;
