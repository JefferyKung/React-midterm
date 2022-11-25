import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'




function App() {
  // 計數器的
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  
  //名字的
  const[name,setName] = useState('')
  const prevName = useRef('')

  //useEffect API
  const [resourceType , setResourceType] = useState('posts')

  const [items,setItems]= useState([])

  //useEffect 視窗大小
  const[windowWidth,setWindowWidth]=useState(window.innerWidth)

 

 
//名字的
  useEffect(()=>{
    prevName.current = name
, [name] })

//計數器
  function decrementCount(){
    setCount(prevCount => prevCount-1)
  }

  function incrementCount(){
    setCount(prevCount => prevCount+1)
  }

  //計數器useRef
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  //useEffect練習 w/ API
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  },[resourceType])


  //視窗大小
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',handleResize)
  },[])




  return (
    <div className="App">

     
      <>
        <h1>Hook playground</h1>
        <h3>1.basic counting with useRef</h3>
        <button onClick={decrementCount}>-</button>
        <span className='num'> previousCount: {prevCount}, current count: {count}</span>
        <button onClick={incrementCount}>+</button>
        <button onClick={() => setCount(0)}>reset</button>
        <br/>

      </>
      <br/>

      <>
        <h3>2.Input+ useRef</h3>
        <input value={name} onChange={e=> setName(e.target.value)}/>
        <div>My name is {name} and it used to be {prevName.current}</div>

      </>

      <br/>

      <div className='inputAPI'>
        <h3>3.input -> API</h3>
        <button onClick={()=>setResourceType('posts')}>posts</button>
        <button onClick={()=>setResourceType('users')}>users</button>
        <button onClick={()=>setResourceType('comments')}>comments</button>
        <h2>{resourceType}</h2>
        {/* {items.map(item =>{
          return <pre id={item.id}> {JSON.stringify(item)}  </pre>
        })} */}

      {items &&
        items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.body}</p>
         
            <hr/>
          </li>
        ))} 

      </div>

      <br/>

      <>
        <div>4.{windowWidth}</div>

      </>
      
     
    </div>
  )
}

export default App
