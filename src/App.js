// doesn't require redux

import React from 'react';

import WorkerRiskChart from './components/WorkerRiskChart'
import WorkerRiskChartArticle from './articles/WorkerRiskChart'
import MapArticle from './articles/Map'
import FooterArticle from './articles/FooterArticle'

import './App.css';

import Map from './containers/Map'

import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container fluid style={{ width: '1400px' }}>
      <div >
        <WorkerRiskChartArticle />
        <WorkerRiskChart />

        <MapArticle />
        <Map />
        <FooterArticle />
      </div>
    </Container>
  );
}

export default App
