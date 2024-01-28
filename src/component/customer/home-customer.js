import React, { useState } from 'react';
import image from './image/order.png';
import { api } from "../../utiltis/apis";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import swal from 'sweetalert';
import { width } from '@mui/system';

const SubmitOrderForm = () => {
  const materialOptions = ['Banners', 'Signs', 'Vehicle Graphics'];
  const [formData, setFormData] = useState({
    myfile: null,
    description: '',
    material: 'Banners',
    lengthValue: '', 
    widthValue: '', 
  });
  const { token } = useSelector((state) => state.auth);

  const [error, setError] = useState('');


  const handleImageChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'myfile' ? files[0] : value,
    }));
  };
  

  const handleSubmit = async () => {
    const { myfile, description, material, lengthValue, widthValue } = formData;
    if (!myfile || !description || !material || !lengthValue || !widthValue  ) {
      setError("Please fill in all fields");
      return;
    }
    console.log('Submitted:', {
      myfile,
      description,
      material,
      lengthValue,
      widthValue,
    });
    try {
      const formData1 = new FormData();
      formData1.append("myfile", formData.myfile)
      formData1.append("description",formData.description);
      formData1.append("material",formData.material);
      formData1.append("size",formData.sizes);
      formData1.append("lengthValue",formData.lengthValue); 
      formData1.append("widthValue", formData.widthValue);
     console.log(formData1)
      const response = await api(token).post('/order/addOrder', formData1);
  
      if (response.status === 200) {
        swal({
          title: "Order submitted successfully",
          icon: "success"
        });
      } else {
        console.error("Failed to submit order. Server response:", response.data);
        setError(`Failed to submit order: ${response.data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error during submission:', error);
      setError('Error during submission');
    }
  };

  return (
    <div className="container" style={{ marginLeft: '200px' }}>
    <div className="row">
        <div className="col-md-6" style={{ paddingTop: '60px' }}>
          <div className="card mx-auto">
            <div className="card-body">
              <h4 className="card-title" style={{ textAlign: 'center', marginBottom: '20px', color: 'rgb(229, 130, 178)' }}>Submit Order</h4>
              <form className="forms-sample">
              <div className="mb-3">
  <label htmlFor="formFile" className="form-label">Select Image</label>
  <input className="form-control" type="file" id="formFile" name="myfile" onChange={handleImageChange} />
</div>

                <div className="row">
                </div>
                <div className="mb-3">
  <label htmlFor="lengthInput" className="form-label">Length</label>
  <input 
    type="number" 
    className="form-control" 
    id="lengthInput" 
    value={formData.lengthValue} 
    onChange={(e) => setFormData((prevData) => ({ ...prevData, lengthValue: e.target.value }))} 
    min="1" 
    max="10"
  />
</div>

<div className="mb-3">
  <label htmlFor="widthInput" className="form-label">Width</label>
  <input 
    type="number" 
    className="form-control" 
    id="widthInput" 
    value={formData.widthValue} 
    onChange={(e) => setFormData((prevData) => ({ ...prevData, widthValue: e.target.value }))} 
    min="1" 
    max="10"
  />
</div>


                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={formData.description} onChange={(e) => setFormData((prevData) => ({ ...prevData, description: e.target.value }))}></textarea>
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label>Material</label>
                  <select
                    className="form-control"
                    value={formData.material}
                    onChange={(e) => setFormData((prevData) => ({ ...prevData, material: e.target.value }))}
                  >
                    {materialOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-lg " style={{ backgroundColor: 'rgb(229, 130, 178)', color: 'white' }} onClick={handleSubmit} >Submit</button>
                </div>
                {error && <Alert severity="warning" sx={{ marginTop: "10px" }}>{error}</Alert>}
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6" style={{ paddingTop: '100px' }}>
          <img src={image} alt="Selected" className="img-fluid" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default SubmitOrderForm;
