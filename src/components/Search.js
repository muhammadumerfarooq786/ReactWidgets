import React,{useState,useEffect} from 'react';
import Axios from 'axios';





const Search = () =>{

  const [term, setTerm]=useState('');
  const [searchTerm, setSearchTerm]=useState([]);

  useEffect(()=>{
    const wikiSearch=async ()=>{
      const {data}=await Axios.get("http://en.wikipedia.org/w/api.php",{
        params:{
          action:'query',
          format:'json',
          list:'search',
          origin:'*',
          srsearch:term,
        },
      });
      setSearchTerm(data.query.search);
    };

    const timeoutId=setTimeout(()=>{
      if(term){
          wikiSearch();
      }
    },500);

    return ()=>{
      clearTimeout(timeoutId);
    };



  },[term]);


  const renderedSearchTermResult=searchTerm.map((t)=>{
    return(
      <div key={t.pageid} className="item">
        <div className="right floated content">
          <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${t.pageid}`}
          >Link</a>
        </div>
        <div className="content">
          <div className="header">{t.title}</div>
            <span dangerouslySetInnerHTML={{__html:t.snippet}}></span>
          </div>
      </div>
    );
  });


  return(
    <div>
      <div className="ui form">
          <div className="field">
              <label>Enter Search Term </label>
              <input
              value={term}
              onChange={e=>setTerm(e.target.value)}
              className="input"/>
          </div>
      </div>
      <div className="ui celled list">
      {renderedSearchTermResult}
      </div>


    </div>
  )
};


export default Search;
