import React, { useState, useEffect } from 'react';
import './home.css';
import Image1 from '../image/as.png';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const font = {
    fontFamily: 'Pacifico, cursive',
  };

  const [worksData, setWorksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/news/get'); 
        const data = await response.json();
        console.log(data)
        setWorksData(data.news.doc);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); 
  }, []);
  
  return (
    <>
    
      <section className="bgimage" id="home">
        
        <img src={Image1} alt="Your Image" style={{ opacity: 0.75 }} />
        <div className="text-overlay fadeIn">
          <h1>We print it...</h1>
          <h2><span>We sign it...</span></h2>
          <p>
            Working with cutting-edge printing technology, we can ensure that every project is produced to the highest quality, on time and within budget, making us one of the leading large format digital printing companies and specialists in signage in Palestine.
          </p>
        </div>
      </section>

      <section className={`transition-container ${isVisible ? 'visible' : ''}`}>

      <Box component="section" sx={{ py: 8 }} style={font}>
        {/* Inner Section 1 */}
        <Container style={{marginTop:'100px'}}>
          <Paper elevation={0} square>
            <Typography variant="h2" align="center" sx={{ mb: 4 }} style={font}>
              Our Solutions
            </Typography>

          </Paper>
        </Container>
        {/* End Inner Section 1 */}

        {/* Inner Section 2 */}
        <Container>
          <Grid container spacing={8}>
            {/* Column 1 */}
            <Grid item xs={12} sm={4}>
              <Paper elevation={0} square sx={{ textAlign: 'center', p: 3, border: '1px solid #ddd', borderRadius: '8px', height: '50%', minHeight: '200px', width: '100%' }}>
                <div className="elementskit-box-header elementor-animation-" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="elementskit-info-box-icon" style={{ marginRight: '10px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.002 512.002" style={{ enableBackground: 'new 0 0 512.002 512.002', width: '50px' }} xmlSpace="preserve">
                      <g transform="translate(0 -1)">
                        <g>
                          <path d="M307.201,367.933c4.713,0,8.533-3.821,8.533-8.533v-25.6h8.533c4.713,0,8.533-3.82,8.533-8.533v-25.598h170.667    c4.713,0,8.533-3.82,8.533-8.533v-256c0-4.713-3.82-8.533-8.533-8.533h-34.133V9.533c0-4.713-3.82-8.533-8.533-8.533h-68.267    c-4.713,0-8.533,3.821-8.533,8.533v17.068h-85.333V9.533c0-4.713-3.82-8.533-8.533-8.533h-68.267    c-4.713,0-8.533,3.821-8.533,8.533v17.068h-85.333V9.533c0-4.713-3.82-8.533-8.533-8.533H51.201c-4.713,0-8.533,3.821-8.533,8.533    v17.068H8.534c-4.713,0-8.533,3.82-8.533,8.533v256c0,4.713,3.82,8.533,8.533,8.533h170.667v25.598    c0,4.713,3.82,8.533,8.533,8.533h8.533v25.6c0,4.713,3.82,8.533,8.533,8.533h25.6v128.002H8.534c-4.713,0-8.533,3.821-8.533,8.533    s3.82,8.533,8.533,8.533h494.933c4.713,0,8.533-3.821,8.533-8.533s-3.82-8.533-8.533-8.533H281.601V367.933H307.201z     M401.068,18.067h51.2v17.068V52.2h-51.2V35.135V18.067z M230.401,18.067h51.2v17.068V52.2h-51.2V35.135V18.067z M59.734,18.067    h51.2v17.068V52.2h-51.2V35.135V18.067z M17.068,43.668h25.6v17.065v0.002c0,4.713,3.82,8.533,8.533,8.533h68.267    c4.713,0,8.533-3.821,8.533-8.533v-0.002V43.668h85.333v17.065v0.002c0,4.713,3.82,8.533,8.533,8.533h68.267    c4.713,0,8.533-3.821,8.533-8.533v-0.002V43.668h85.333v17.065v0.002c0,4.713,3.821,8.533,8.533,8.533h68.267    c4.713,0,8.533-3.821,8.533-8.533v-0.002V43.668h25.6v238.933H324.301c-0.011,0-0.022-0.002-0.034-0.002H187.734    c-0.011,0-0.022,0.002-0.034,0.002H17.068V43.668z M315.734,299.668v17.065h-8.533h-102.4h-8.533v-17.065H315.734z M213.334,333.8    h85.333v17.067h-25.6h-34.133h-25.6V333.8z M264.534,495.933h-17.067v-128h17.067V495.933z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="box-body" style={{ textAlign: 'center' }}>
                    <h3 className="elementskit-info-box-title">
                      Signs
                    </h3>
                    <p>Signs and graphics are essential to all businesses that are visible to the public</p>
                  </div>
                </div>            </Paper>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={12} sm={4}>
              <Paper elevation={0} square sx={{ textAlign: 'center', p: 3, border: '1px solid #ddd', borderRadius: '8px', height: '50%', minHeight: '200px', width: '100%' }}>
                <div className="elementskit-box-header elementor-animation-" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div class="elementskit-box-header elementor-animation-">
                    <div class="elementskit-info-box-icon  ">
                      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="80px" viewBox="0 0 511.497 511.497" width="50px"><g > <path d="m397.668 481.497h-40.218v-58.112h28.92c8.284 0 15-6.716 15-15v-393.385c0-8.284-6.716-15-15-15h-261.243c-8.284 0-15 6.716-15 15v393.385c0 8.284 6.716 15 15 15h28.92v58.112h-40.218c-8.284 0-15 6.716-15 15s6.716 15 15 15h283.839c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-257.541-451.497h231.243v363.385h-231.243zm43.92 451.497v-58.112h143.403v58.112z"></path><path d="m198.779 289.305h113.938c8.284 0 15-6.716 15-15s-6.716-15-15-15h-113.938c-8.284 0-15 6.716-15 15s6.716 15 15 15z"></path><path d="m198.779 355.767h113.938c8.284 0 15-6.716 15-15s-6.716-15-15-15h-113.938c-8.284 0-15 6.716-15 15s6.716 15 15 15z"></path></g></svg>
                    </div>
                  </div>
                  <div class="box-body">
                    <h3 class="elementskit-info-box-title">
                      Banners                </h3>
                    <p>Banners are considered one of the most popular weather-proof exterior signage solutions.</p>
                  </div>


                </div>            </Paper>
            </Grid>

            {/* Column 3 */}
            <Grid item xs={12} sm={4}>
              <Paper elevation={0} square sx={{ textAlign: 'center', p: 3, border: '1px solid #ddd', borderRadius: '8px', height: '50%', minHeight: '200px', width: '100%' }}>
                <div className="elementskit-box-header elementor-animation-" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div class="elementskit-box-header elementor-animation-">
                    <div class="elementskit-info-box-icon  ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50px" height="150px" ><g id="outline"><path d="M490.53,248.411l-19.595-6.533L457.759,176h4.352a23.869,23.869,0,0,0,21.466-13.266,24.11,24.11,0,0,0,0-21.466A23.867,23.867,0,0,0,462.111,128H41.889a23.869,23.869,0,0,0-21.466,13.266A24.027,24.027,0,0,0,24,168.005V352a8,8,0,0,0,8,8l15.994,0,.028,0H72.805a40,40,0,0,0,78.39,0h233.61a40,40,0,0,0,78.39,0H488a8,8,0,0,0,8-8V256A8,8,0,0,0,490.53,248.411Zm-455.8-92.834a8.038,8.038,0,0,1,0-7.155A7.958,7.958,0,0,1,41.889,144H462.111a7.957,7.957,0,0,1,7.156,4.423,8.038,8.038,0,0,1,0,7.155A7.958,7.958,0,0,1,462.111,160H41.889A7.957,7.957,0,0,1,34.733,155.577ZM368,192V176h73.441l3.2,16Zm40,16v32H368V208Zm16,0h23.842l6.4,32H424ZM43.056,344H40V328H51.056Zm29.749,0H60.944l8-16H80.022A39.841,39.841,0,0,0,72.805,344ZM112,376a24,24,0,1,1,24-24A24.028,24.028,0,0,1,112,376ZM40,312V296H172.167a72.571,72.571,0,0,0,14.648,16Zm136-56a56,56,0,1,1,56,56A56.063,56.063,0,0,1,176,256Zm176,88H151.2a39.841,39.841,0,0,0-7.217-16H352Zm0-32H277.185a72.571,72.571,0,0,0,14.648-16H352Zm0-32H299.872a72,72,0,1,0-135.744,0H40V175.922c.625.048,312,.078,312,.078Zm72,96a24,24,0,1,1,24-24A24.028,24.028,0,0,1,424,376Zm56-32H464v-8a8.009,8.009,0,0,1,8-8h8Zm0-32h-8a24,24,0,0,0-20.286,11.2A39.967,39.967,0,0,0,384.805,344H368V256h94c.206,0,.407-.016.609-.031l17.391,5.8Z"></path><circle cx="112" cy="352" r="12"></circle><circle cx="424" cy="352" r="12"></circle><path d="M424,272H400a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path><path d="M216,296h16a24.042,24.042,0,0,0,22.629-16H256a24,24,0,0,0,0-48H221.291A29.324,29.324,0,0,0,192,261.291V272A24.027,24.027,0,0,0,216,296Zm-8-34.709A13.306,13.306,0,0,1,221.291,248H256a8,8,0,0,1,0,16h-8a8,8,0,0,0-8,8,8.009,8.009,0,0,1-8,8H216a8.009,8.009,0,0,1-8-8Z"></path><path d="M221.581,273.888a6.944,6.944,0,1,0-6.944-6.944A6.944,6.944,0,0,0,221.581,273.888Z"></path></g></svg>
                    </div>
                  </div>
                  <div class="box-body" >
                    <h3 class="elementskit-info-box-title">
                      Vehicle Graphics                </h3>
                    <p>Vehicle Graphics are used by many companies since it can convert a vehicle to a moving billboard</p>
                  </div>


                </div>            </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
        {/* End Inner Section 2 */}
        <Container style={{ marginTop: '160px' }}>
  <Paper elevation={0} square>
    <Typography variant="h2" align="center" sx={{ mb: 4 }} style={font}>
      Some of our works
    </Typography>
  </Paper>

  <Grid container spacing={1}>
  {worksData && worksData.map((work) => (
      <Grid item xs={12} sm={4} key={work.id}>
        <div className="card">
          <div className="image-container">
            <img src={work.image} alt="Card Image" />
            <div className="card-content">
              <p>{work.description}</p>
              <h2>{work.title}</h2>
            </div>
          </div>
        </div>
      </Grid>
    ))}
  </Grid>
</Container>

      <Box component="section" sx={{ py: 8 }} style={font}>
        {/* Inner Section 1 */}
        <Container>
          <Paper elevation={0} square>
            <Typography variant="h2" align="center" sx={{ mb: 4 }} style={font}>
              Why Choose Us?
            </Typography>

          </Paper>
        </Container>
        {/* End Inner Section 1 */}

        {/* Inner Section 2 */}
        <Container>
          <Grid container spacing={4}>
            {/* Column 1 */}
            <Grid item xs={12} sm={6}>
              <Paper elevation={0} square sx={{ textAlign: 'center', p: 3, border: '1px solid #ddd', borderRadius: '8px', height: '80%', minHeight: '200px', width: '80%' }}>
                <div className="elementskit-box-header elementor-animation-" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="elementskit-info-box-icon" style={{ marginRight: '10px' }}>
                    <aside>
                      <img class="icon-card-icon"
                        src="https://cdn11.bigcommerce.com/s-ihvzptg5rs/product_images/uploaded_images/turnaround-icon-blue.png"
                        aria-hidden="true"
                        style={{ width: '130px' }} /></aside>

                  </div>
                  <div className="box-body" style={{ textAlign: 'center' }}>
                    <h3>Two-Day Turnaround</h3>
                    <p>We offer a quick two-day turnaround on all standard products. Some exceptions will apply and it does not include art approval time.</p>

                  </div>
                </div>            </Paper>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={12} sm={6}>
              <Paper elevation={0} square sx={{ textAlign: 'center', p: 3, border: '1px solid #ddd', borderRadius: '8px', height: '80%', minHeight: '200px', width: '80%' }}>
                <div className="elementskit-box-header elementor-animation-" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div class="elementskit-box-header elementor-animation-">
                    <div class="elementskit-info-box-icon  ">
                      <aside><img class="icon-card-icon"
                        src="https://cdn11.bigcommerce.com/s-ihvzptg5rs/product_images/uploaded_images/highquality-icon-blue.png"
                        style={{ width: '130px' }} aria-hidden="true" /></aside>
                    </div>
                  </div>
                  <div class="box-body">
                    <h3>Highest Quality</h3>
                    <p>We create affordable, professional office signs and conference room signs with a clean and contemporary look that will easily elevate your business's professionalism, efficiency, and communications.</p>
                  </div>


                </div>            </Paper>
            </Grid>

          
          
            {/* Column 3 */}
  <Grid item xs={12} sm={6} style={{ margin: 'auto', marginTop:'30px' }}>
    <Paper elevation={0} square sx={{ textAlign: 'center', p: 3, border: '1px solid #ddd', borderRadius: '8px', width: '80%',minHeight: '200px', width: '80%' }}>
      {/* Content for Centered Column */}
      <div className="elementskit-box-header elementor-animation-" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div class="elementskit-box-header elementor-animation-">
          <div class="elementskit-info-box-icon  ">
            <aside>         
              <img class="icon-card-icon"
                src="https://cdn11.bigcommerce.com/s-ihvzptg5rs/product_images/uploaded_images/customize-icon-blue.png" aria-hidden="true"
                style={{ width: "130px" }} />
            </aside>
          </div>
        </div>
        <div class="box-body">
          <h3>Wide Variety</h3>
          <p>We pride ourselves on the ability to make any print item needed for your business - from name badges and signs to mugs and t-shirts.</p>
        </div>
      </div>
    </Paper>
</Grid>



          </Grid>
        </Container>
        {/* End Inner Section 2 */}
      </Box>
</section>
<footer className="bg-light text-center text-white" >
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', textAlign: 'center' }}
      >
        <Typography variant="body2" color="white" style={font}>
          © 2023{' '}
          <a href="https://www.facebook.com/wsaadv" className="text-white" style={font}>
            WSA.com
          </a>
        </Typography>
      </div>
    </footer>
    </>
  );
}

export default Home;