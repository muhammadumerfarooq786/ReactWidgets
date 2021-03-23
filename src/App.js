import React,{ useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';


const items=[
  {
    title:'What is a simple question?',
    content:'1 not involved or complicated; easy to understand or do. a simple problem.'
  },
  {
    title:'What are some good English questions?',
    content:'General Questions\nWhat do you do?\nAre you married?\nWhy are you studying English?\nHow did you learn English?\nhat do you do in your free time?\nWhat the weather like?\n How the weather?\nWhat time is it?\n Do you have the time?\nCan I help you? \n Do you need any help?'
  },

  {
    title:'How can I answer any question?',
    content:'Always say Yes when an interviewer asks if you have questions. Surprisingly, the most common answer to the interview question, Do you have any questions? is no. Not only is this the wrong answer, but its also a missed opportunity to find out information about the company.'
  }
];

const options=[
  {
    label:'Red',
    value:'red'
  },
  {
    label:'Blue',
    value:'blue'
  },
  {
    label:' Green',
    value:'green'
  }
];




export default ()=>{
  const [selected, setSelected]= useState(options[0]);
  return (
    <div>
      <Header/>
      <Route path="/">
        <Accordion items={items}/>
      </Route>

      <Route path="/list">
        <Search/>
      </Route>

      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onChangeSelected={setSelected}
        />
      </Route>

    </div>
  )
};


// const showAccordion=()=>{
//   if(window.location.pathname === '/'){
//     return (<Accordion items={items}/>);
//   }
// };
// {showAccordion()}



//<Search/>
