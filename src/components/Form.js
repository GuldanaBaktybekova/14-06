function Form() {
  function onFormSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(this);

    //direct and simple
    // alert(`${event.target[0].value} ${event.target[1].value}`);

    const formData = new FormData(event.target);
    alert (`${formData.get('first_name')} ${formData.get('last_name')} ${formData.get('age')} ${formData.get('country')} ${formData.get('city')}`);

  }

  return (  
    <form className="Form" onSubmit={onFormSubmit}>
      <div>
        <label>
          First name:
          <input type="text" name="first_name"  />
        </label>
        <label>
          Last name:
          <input type="text" name="last_name" />
        </label>
        <label>
          
          Age:
          <input type="text" name="age"  />
        </label>
        <label>
          Country:
          <input type="text" name="country"  />
        </label>
        <label>
          City:
          <input type="text" name="city"  />
        </label>
      </div>

      <button>OK</button>
    </form>

    
  );
}

export default Form

;