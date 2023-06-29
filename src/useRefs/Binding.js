import { useEffect, useState } from "react";

const Binding = () =>{
    const [nickName, setNickName] = useState('');

    const myName = {
        name: 'jennyBoo',
        callName: function(){
            setNickName(this.name)
            return this.name;
        }
    }


    useEffect(()=>{
       console.log('myName', myName.callName());
       const variableName = myName.callName.bind(myName); // 변수에 지정할 때는 bind() 
       console.log("variableName", variableName());
    }, []);
    


    return <h1>{nickName}</h1>
};

export default Binding;