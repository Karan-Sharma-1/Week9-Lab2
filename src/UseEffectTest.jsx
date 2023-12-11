// // // src/UseEffectTest.jsx

// // import React, { useState, useEffect } from 'react';

// // const UseEffectTest = () => {
// //   return (
// //     <div>
// //       <h1>UseEffectTest Component</h1>
// //     </div>
// //   );
// // };

// // export default UseEffectTest;


import { useEffect, useState } from 'react';

const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('UseEffect1 Ran');
  }, []);

  useEffect(() => {
    console.log('UseEffect2 Ran');
    if (toggleTwo)
      console.log('toggleTwo slice of state is true so this code runs');
  }, [toggleTwo]);
  
  useEffect(() => {
   const myInterval = setInterval (() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);
    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
  }, [count]);


  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>UseEffectTest Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>ToggleTwo</button>
      <button onClick={() => setCount(!count)}>Count</button>
      
    </div>
  );
};

export default UseEffectTest;

// function useEffectTest() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer = setTimeout(() => {
//     setCount((count) => count + 1);
//   }, 1000);

//   return () => clearTimeout(timer)
//   },);

//   return <h1>I've rendered {count} times!</h1>;
// }

// export default useEffectTest
