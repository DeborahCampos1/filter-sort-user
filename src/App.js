import { useState } from "react";
import users from "./data/users.js";
import './App.css';

const App = () => {
  const [searchInput, setsearchInput] = useState("");
  const [sortOption, setsortOption] = useState("")

//filter users 

  let filteredUsers = users.filter((user)=>{
    let lowerCaseName = user.name.toLowerCase();
    let lowerCaseSearchInput = searchInput.toLowerCase();
    return lowerCaseName.includes(lowerCaseSearchInput);
  });

  let preprocessing = filteredUsers.map((user)=>{
    let formattedCurrency = String(user.currency).replace("$","");
    user.currency = Number(formattedCurrency);
    return user
  });

  if(sortOption){
     console.log(preprocessing)

    preprocessing.sort((a,b)=>{
      if(a[sortOption] < b[sortOption]){return -1};
      if(a[sortOption] > b[sortOption]){return a};
      return 0
    });
  }else{
    preprocessing = filteredUsers;
  }
  

  let renderUsers = preprocessing.map((user, index)=>{
    return <li key={index}>{user.name} - ${user.currency}</li>
  });
  
  let renderOptions = users.map((u, index)=>{
    return <option key={index }value={u.country}>{u.country}</option>
  })


  const handlesearchInput = (e) =>{
    setsearchInput(e.target.value)
  }
  const handleOptions = (e)=>{
    setsortOption(e.target.value)
    // console.log(e.target.value)
  }
  return (
    <div className="App">
      <h1>Users Filter Sort</h1>
      <form>
        <label htmlFor="search_input">Search Name: </label>
        <input id="search_input" value={searchInput} onChange={handlesearchInput}  />

        {/* <label>Sort</label> */}
        <select onChange={handleOptions}>
          <option>--Sort--</option>
          <option value="name">Name</option>
          <option value="currency">Currency</option>
          {/* {renderOptions} */}
        </select>
      </form>
      <ul>{renderUsers}</ul>
    </div>
  );
}

export default App;
