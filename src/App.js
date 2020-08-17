import React from 'react';
import Layout from './hoc/Layout/Layout'

function App() {
  return (
    <div className="App">

      <Layout>
        <div style={{width: 400, border: '1px solid grey'}}>
          <h1>Layout works!</h1>
        </div>
      </Layout>

    </div>
  );
}

export default App;