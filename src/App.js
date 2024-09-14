
import './App.css';
import messages from "./messages";


const App = () => {

  const messi = messages.map((obj,indx)=>

    <div key={indx} className=" flex p-2 m-2 rounded-lg border-2 border-slate-400">

      <div className="font-bold mr-2">{obj.user}:</div>
      <div>{obj.text}</div>
    </div>
    
  );
  
  return (
    <div className="outerContainer flex justify-center m-4">
      <div className="max-w-xl w-full" >
      {messi}
      </div>
      
    </div>
  );
};

export default App;
