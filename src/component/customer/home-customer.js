import React, { useState } from 'react';
import image from './image/order.png';


const SubmitOrderForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [material, setMaterial] = useState('');

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleSubmit = () => {
    console.log('Submitted:', {
      selectedImage,
      description,
      size,
      material,
    });
  };
  return ( 
   
    <div className="container" style={{ marginLeft: '200px' }}>
    <div className="row">
      <div className="col-md-6" style={{ paddingTop: '135px' }}>
        <div className="card mx-auto">
          <div className="card-body">
            <h4 className="card-title" style={{ textAlign: 'center', marginBottom: '20px', color: 'rgb(229, 130, 178)' }}>Submit Order</h4>
            <form className="forms-sample">
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">Select Image</label>
                  <input className="form-control" type="file" id="formFile" onChange={handleImageChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label>Size</label>
                  <input className="form-control" id="phone" data-inputmask="'alias': 'phonebe'" value={size} onChange={(e) => setSize(e.target.value)} />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label>Material</label>
                  <input className="form-control" data-inputmask="'alias': 'currency'" style={{ textAlign: 'right' }} value={material} onChange={(e) => setMaterial(e.target.value)} />
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-lg "  style={{backgroundColor: 'rgb(229, 130, 178)' ,color: 'white'}}onClick={handleSubmit} disabled={!selectedImage}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6"style={{ paddingTop: '100px' }}>
        <img src={image} alt="Selected" className="img-fluid" style={{ width: '100%', height: '100%' }} />
      </div>
      </div>
    </div>
  );
};

export default SubmitOrderForm;
