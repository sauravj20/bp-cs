import { useState } from 'react'
import './App.css'
import StationList from './components/StationList'
import StationSearch from './components/StationSearch'
import getAllStations, { StationSearchRequest } from './services/serviceStations'

type ConvenienceStore = {
  name: string,
  food_available: boolean
}

export type ServiceStation = {
  address: string,
  city: string,
  zip: string,
  open_hours: [string, string][],
  convenience_store?: ConvenienceStore,
  accepts_cards: boolean,
  coordinates: {lat: number, long: number},
  distance?: number
}

function App() {

  const [serviceStations, setServiceStations] = useState<ServiceStation[]>([]);

  const handleSearch = (request: StationSearchRequest) => {
    setServiceStations(getAllStations(request))
  }

  return (
    <div className="container">
      <StationSearch onSearch={handleSearch}/>
      <StationList serviceStations={serviceStations} />
    </div>
  )
}

export default App
