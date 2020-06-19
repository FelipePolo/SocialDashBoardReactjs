import React,{useRef} from "react";



function Darkmode() {
  const ref = useRef(null);
  function handleChange(){
    if(ref.current.checked){
      document.body.classList.remove('is-dark-mode');
      document.body.classList.add('is-light-mode');
    }else{
      document.body.classList.remove('is-light-mode');
      document.body.classList.add('is-dark-mode');
    }
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input ref={ref} type="checkbox" className="checkbox" id="checkbox" onChange={handleChange}/>
      <label  className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default Darkmode;
