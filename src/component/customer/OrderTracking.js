import React, { useState } from 'react';
import './order.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const OrderTracking = () => {
  const [orders, setOrders] = useState([
    {
      id: '123456',
      status: 'Ready for pickup',
      Date: '12/2/2025',
      steps: ['Order confirmed', 'Details', 'Ready for pickup'],
      product: {
        details: 'fghjk,mnb',
        image: '/path/to/product-image.jpg',
      },
      recommendation: 'توصية: يمكنك إضافة منتج إضافي لتحسين تجربتك',
    },
    {
      id: '789012',
      status: 'Details',
      Date: '12/2/2025',
      steps: ['Order confirmed', 'Details', 'Ready for pickup'],
      product: {
        details: 'dfghj,mnbfvdc',
        image: '/path/to/product-image.jpg',
      },
      recommendation: 'توصية: يمكنك إضافة منتج إضافي لتحسين تجربتك',
    },
    {
      id: '789012',
      status: 'Order confirmed',
      Date: '12/2/2025',
      steps: ['Order confirmed', 'Details', 'Ready for pickup'],
      product: {
        details: 'fghj,m njhmn',
        image: '/path/to/product-image.jpg',
      },
      recommendation: 'توصية: يمكنك إضافة منتج إضافي لتحسين تجربتك',
    },
    {
      id: '789012',
      status: 'null',
      Date: '12/2/2025',
      steps: ['Order confirmed', 'Details', 'Ready for pickup'],
      product: {
        details: 'dfghjkm',
        image: '/path/to/product-image.jpg',
      },
      recommendation: 'توصية: يمكنك إضافة منتج إضافي لتحسين تجربتك',
    },

  ]);

  const initialSteps = [
    { id: 1, text: 'Order confirmed', icon: 'bi bi-check2', active: false },
    { id: 2, text: 'Details', icon: 'bi bi-person', active: false },
    { id: 3, text: 'Ready for pickup', icon: 'bi bi-box2-fill', active: false },
  ];
  const updatedOrders = orders.map(singleOrder => {
    const steps = initialSteps.map((step, index) => {
      if (singleOrder.status === 'Order confirmed' && step.text === 'Order confirmed') {
        step.active = true;
        step.showRecommendation = false;

      }
      else if (singleOrder.status === 'Details' && (step.text === 'Order confirmed' || step.text === 'Details')) {
        step.active = true;
        step.showRecommendation = true;
      }
      else if (singleOrder.status === 'Ready for pickup' && (step.text === 'Order confirmed' || step.text === 'Details'||step.text === 'Ready for pickup')) {
        step.active = true;
        step.showRecommendation = false;

      }
      else {
        step.active = false;
        step.showRecommendation = false;

      }
      return { ...step }; 
    });

    return { ...singleOrder, updatedSteps: steps };
  });

  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      {updatedOrders.map((singleOrder, index) => (
        <article key={index} className="card" style={{ marginBottom: '40px' }}>
          <header className="card-header"> My Orders / Tracking </header>
          <div className="card-body">
            <h6>Order {singleOrder.id} </h6>
            <article className="card">
              <div className="card-body row">
                <div className="col">
                  <strong>Date of Order :</strong> {singleOrder.Date}
                </div>
                <div className="col" style={{ paddingLeft: '260px' }}>
                  <strong>Status:</strong> {singleOrder.status}
                </div>
              </div>
            </article>
            <div className="track">
              {singleOrder.updatedSteps.map((step) => (
                <div key={step.id} className={`step ${step.active ? 'active' : ''}`}>
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={step.icon} viewBox="0 0 16 16">
                      <path d={step.icon === 'bi bi-box2-fill' ? "M3.75 0a1 1 0 0 0-.8.4L/.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z" :
                        step.icon === 'bi bi-person' ? "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" :
                          "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"} />
                    </svg>
                  </span>
                  <span className="text">{step.text}</span>
                </div>
              ))}
            </div>
            <hr />
            <ul className="row">
              <li className="col-md-4">
                <figure className="itemside mb-3">
                  <div className="aside">
                    <img src={singleOrder.product.image} className="img-sm border" alt="Product" />
                  </div>
                  <figcaption className="info align-self-center">
                    <p className="title">{singleOrder.product.details}</p>
                  </figcaption>
                </figure>
              </li>
            </ul>
            {singleOrder.updatedSteps.map((step) => (
              <div key={step.id} className={`step ${step.active ? 'active' : ''}`}>
                {step.showRecommendation && step.text === 'Details'&& (
                  <div>
                    <hr />
                    <header style={{ marginBottom: '4px' }}>
                      <strong> Recommendation :</strong>
                    </header>
                    <div className="recom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'beige', width: '100%', height: '70px' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '40px' }} width="10" height="10" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" />
                        </svg>
                        <p style={{ marginLeft: '5px', marginTop: '9px' }}>{singleOrder.recommendation} </p>
                      </div>
                      <div>
                        <Button type="button" className="btn btn-outline-success" style={{ backgroundColor: 'white' }}>Yes</Button>
                        <Button type="button" className="btn btn-outline-danger" style={{ marginRight: '10px', backgroundColor: 'white' }}>No</Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

          </div>
        </article>
      ))}
    </div>
  );
};

export default OrderTracking;
