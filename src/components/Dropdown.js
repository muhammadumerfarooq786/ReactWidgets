import React,{useState,useEffect,useRef} from 'react';

const Dropdown = ({options,selected,onChangeSelected})=>{
  const [open,setOpen]= useState(false);
  const ref=useRef();
  const colory='red';


  useEffect(()=>{
    document.body.addEventListener('click',(event)=>{
      if(ref.current && ref.current.contains(event.target)){
        return;
      }
      setOpen(false);
    },{capture:true});
  },[]);

  const renderedDropdown=options.map((option)=>{
    if(option.value === selected.value){
      return null;
    }
    return (
      <div
      className="item"
      key={option.value}
      colory={option.value}
      onClick={()=>onChangeSelected(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div onClick={()=>setOpen(!open)}
         className={`ui selection dropdown ${open ?'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition': ''}`}>
            {renderedDropdown}
          </div>
        </div>
      </div>
      <div style={{color:'blue'}}>
        The text Message
      </div>
    </div>



  );
};

export default Dropdown;
