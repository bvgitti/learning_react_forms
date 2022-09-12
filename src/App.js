import React from 'react';

function App() {

  const [formData, setFormData]=React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: "",
    favColor: ""
  });

  function handleChange(event) {
    const {name, value, type, checked}= event.target;
    setFormData(prevState=> (
      {...prevState, [name]: type=== "checkbox" ? checked : value}
    ))
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.table(formData);
  };

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName" 
        value={formData.firstName} 
        placeholder="first name" 
        onChange={handleChange}/>
      <br/>
      <input 
        type="text" 
        name="lastName" 
        value={formData.lastName}
        placeholder="last name" 
        onChange={handleChange}/>
      <br/>
      <input 
        type="text" 
        name="email" 
        value={formData.email}
        placeholder="email address" 
        onChange={handleChange}/>
      <br/>
      <textarea 
        name="comments" 
        value={formData.comments} 
        placeholder="comment here" 
        onChange={handleChange}/>
      <br/>
      <input 
        type="checkbox"
        name="isFriendly"
        id="friendly"
        checked={formData.isFriendly}
        onChange={handleChange}/>
      <label htmlFor="friendly">Are you friendly?</label>

      <fieldset>
        <legend>Current employment status</legend>

        <input 
          type="radio" 
          id="unemp"
          name="employment"
          value="unemployed"
          checked={formData.employment==="unemployed"}
          onChange={handleChange}/>
        <label htmlFor="unemp">Unemployed</label>
        <br/>
        <input 
          type="radio" 
          id="part"
          name="employment"
          value="part-time"
          checked={formData.employment==="part-time"}
          onChange={handleChange}/>
        <label htmlFor="part">Part-time</label>
        <br/>
        <input 
          type="radio" 
          id="full"
          name="employment"
          value="full-time"
          checked={formData.employment==="full-time"}
          onChange={handleChange}/>
        <label htmlFor="full">Full-time</label>
      </fieldset>
      <label htmlFor="selFavColor">What is your favorite color?</label>
      <br/>
      <select 
        id="selFavColor"
        value={formData.favColor}
        onChange={handleChange}
        name= "favColor">

        <option value="">-choose color-</option>
        <option value="yellow">yellow</option>
        <option value="orange">orange</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="white">white</option>
        <option value="black">black</option>
      </select>
      <br/>
      <br/>
      <button>Submit</button>
    </form>
  )
};

export default App; 