import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/pages/_Home.css'
import TopicsNavs from "../components/TopicsNavs"
import InfoHeader from "../components/InfoHeader"
import VehicleList from "../components/VehicleList"
import Footer from "../components/Footer"

function Home() {

const [cars, setCars] = useState([])

  const getCars = () => {
    axios.get('http://localhost:3000/carros')
        .then((response) => setCars(response.data))
}

useEffect(() => {
  getCars()
}, [])

  return (
    <main className="content">
      <header className="header">
        <h2>
          Cars sale
        </h2>
      </header>
      <nav className='topics'>
        <TopicsNavs />
      </nav>
      <header className='info'>
        <InfoHeader />
      </header>
      <section className="items">
        <VehicleList props={cars}/>
      </section>
      <footer className='about'>
        <Footer />
      </footer>
    </main>

  )
}

export default Home;