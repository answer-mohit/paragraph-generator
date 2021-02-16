import React, { useState } from 'react'; 
import data from './data';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const[count,setcount]=useState(0);
  const [text,setText]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
let amount=parseInt(count);
if(count<=0){
   amount=1;
}
if(count>8){
   amount=8;
}
setText(data.splice(0,amount));
console.log(data.splice(0,amount));

}
  return (
    <div className="my-5">

    <h2 className="text-center text-primary text-uppercase fw-bold">
    tired of boring lorem ipsum ?
     </h2>
    <div className="container">
      <div className="row">
        <div className="col-8 mx-auto">
    <form onSubmit={handleSubmit}>
    <div className="text-center my-4">
    <h3 className="text-capitalize fw-bold text-secondary">Paragraph</h3>
</div>
    <div className="text-center input-group mb-3">
    
      <input type="number" 
       className="form-control"
        id="staticEmail" 
        placeholder="write.."
        value={count}
        onChange={(e)=>setcount(e.target.value)}
       name="amount"/>
    
    <button type="submit" className="btn btn-danger text-uppercase">generate</button>
    </div>
    </form>      
        </div>
        <div className="col-8 mx-auto">
        
{text.map((text,index)=>{
  return<p key={index} className="text-secondary fst-italic m-3">{text}</p>
})}
        
        </div>

      </div>
    </div>
    
    
    
    
    </div>
  );
}

export default App;
