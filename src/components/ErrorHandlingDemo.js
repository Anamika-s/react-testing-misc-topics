 import ErrorD from "./Error";
 import img1 from '../images/splash.jpg'
  
 import img2 from '../images/logo192.png'

  
import Image from "./Image";
 function App5()
{ return( <>    <ErrorD>
      <Image image={img1}/>
      </ErrorD>
      <ErrorD>
      <Image image={img2} />
      </ErrorD>
      <ErrorD>
      <Image image="noimage"/>
      </ErrorD>
      <ErrorD>
       <Alert message=""/>
      </ErrorD>
  </>

  )
}

function Alert({message})
{
  // alert(typeof(message))
  if(typeof(message)!=='string')
  throw  Error("This is not in string, please do not pass integers")
  if(!message)
  throw  Error("Please provide any value, it shud not be empty")
  
  return(
    <h1> {message} </h1> 
  )

}

export {App5} ;