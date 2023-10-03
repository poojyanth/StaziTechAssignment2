import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import productData from './hoteldata.json';
import { Products } from './components/products';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function App() {
  const [activeCity, setActiveCity] = useState(1); // Default active city
  const [numberofhotels, setNumberofhotels] = useState(6); // Default active city

  const filteredProducts = productData.filter((product) =>
    // product.location contains activecityvalue
    product.location === (activeCity)
  );

  const { IDVAL } = useParams();

  const currentProducts = filteredProducts.slice(0,numberofhotels);

  return (
    <Router>
        <div className='Head'>
            <h1 className='heading'>Featured Listed Property</h1>
            <h3 className='subheading'>Real estate can be bought, sold, leased, or rented, and can be a 
            <br/>
            valuable investment opportunity. The value of real estate can be...</h3>
        </div>

        <div className='tabs'>
            <div className='city-tabs'>
            <button className={`tab ${activeCity === 1 ? 'active-tab' : ''}`} onClick={() => setActiveCity(1)}>New York</button>
            <button className={`tab ${activeCity === 2 ? 'active-tab' : ''}`} onClick={() => setActiveCity(2)}>Mumbai</button>
            <button className={`tab ${activeCity === 3 ? 'active-tab' : ''}`} onClick={() => setActiveCity(3)}>Paris</button>
            <button className={`tab ${activeCity === 4 ? 'active-tab' : ''}`} onClick={() => setActiveCity(4)}>London</button>
            </div>
            <div className='viewall'>
                <button className='viewallbutton'>View All <i class="icon fi fi-rr-arrow-right"></i> </button>
            </div>
        </div>
        
      <div className='App'>

        {currentProducts.map((product) => (
            <Link to={`/property/${product.id}` } style={{textDecoration:'none',color: '#273654'}}>
              <Products
                key={product.id}
                rentsale={product.rentsale}
                image={product.image}
                name={product.name}
                room={product.room}
                bed={product.bed}
                bath={product.bath}
                address={product.address}
                location={product.location}
                area={product.area}
                price={product.price}
              />
            </Link>
            ))}

        

        {/* Routes */}

        <Routes>
          <Route path='/' element={<productData location={activeCity} />} />
          <Route path='/property/:IDVAL' element={<productData location={activeCity} id={IDVAL} />} />
        </Routes>
        </div>
        <div className='showmorediv'>
            <button className='showmore' onClick={() => setNumberofhotels(numberofhotels===6? 9 : 6)}>
            <i class="fi fi-bs-hourglass-end"></i> {numberofhotels===6? 'Show More' : 'Show Less'}</button>
        </div>
    </Router>
  );
}

export default App;
