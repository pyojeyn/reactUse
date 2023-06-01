import React, { useState, useEffect } from "react";

function App() {

  const [count , setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  // 렌더링 될 때마다 매번 실행됨.
  useEffect(() => {
    // ....
    console.log("매번 실행되는 렌더링 🥗");
  });

  // 마운팅 + count 가 변화할 때마다 실행됨. 
  useEffect(() => {
    // ....
    console.log("count 바뀔때마다 실행되는 effect 🍕");
  }, [count]);

  // 마운팅 + name 변경될 때마다 실행
  useEffect(() => {
    console.log("name 바뀔때 마다 렌더링 됨 🍟");
  }, [name]);

  // 맨 처음 렌더링 될 때만. 
  useEffect(() => {
    console.log("렌더링 될 때 한번만 ")
  },[])

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      
      <input type="text" value={name} onChange={handleInputChange}/>
      <span>name : {name}</span>
    </div>
  )
}

export default App;
