
import React from 'react'
import { useMemo } from 'react';
import {useState, UseMemo} from "react";


export default function UseMemoDemo() {
  const [count,setCount] = useState(1);
  const [item,setItem] = useState(10);

  const multiply  =  useMemo(function multiplyCount()
  {
    console.log("Within Multiply function")
    return count *  5
  },[count])

  return ( 
    <div>UseMemo Demo
      {multiply}  
 <h1> Item Count  : {item} </h1>
 <h3> Count : {count} </h3>
 <button onClick={()=> setCount(count+1)}> Update Count </button>
 <button onClick={()=>setItem(count *10 )}> Update Item </button>
    </div>
  )
}
