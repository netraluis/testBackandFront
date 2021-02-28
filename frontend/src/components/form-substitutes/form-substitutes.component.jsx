import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

const FormSubstitutes = () => {

    const [substitutesData, setData] = useState({name: '', last_name:'', phone: '', judicial_party: ''})

    const handleChange = (event) => {
      const { value, name } = event.target;
      setData({...substitutesData, [name]: value });
    };
    const { name, last_name, phone, judicial_party} = substitutesData
    const handleSubmit = async (event) => {
      event.preventDefault();
      substitutesData.judicial_party = judicial_party.split(',')
      const url = 'http://localhost:8000/api/v1/expSubRoutes/substitutes'
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(substitutesData)
    };
    fetch(url, requestOptions)
        .then(response => response.json()).then(()=>setData({...substitutesData,name: '', last_name:'', phone: '', judicial_party: ''}))
        .catch(error=> console.error(error))
    }

    return (
      <div className="globalForm">
        <div className="formInd">
          <h2>I want to add an substitutes</h2>
    
          <form onSubmit={handleSubmit}>

            <FormInput
              name="name"
              type="text"
              value={name}
              handleChange={handleChange}
              label="name"
              required
            />

            <FormInput
              name="last_name"
              type="text"
              value={last_name}
              handleChange={handleChange}
              label="last_name"
              required
            />

            <FormInput
              name="phone"
              type="text"
              value={phone}
              handleChange={handleChange}
              label="phone"
              required
            />

            <FormInput
              name="judicial_party"
              type="text"
              value={judicial_party}
              handleChange={handleChange}
              label="judicial_party"
              required
            />


              <CustomButton type="submit">ADD SUBSTITUTE</CustomButton>

          </form>
        </div>
        </div>
      );

}

export default FormSubstitutes