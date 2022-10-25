import { useState } from 'react'
import AddVehicle from './AddVehicle'
import AllVehicles from './AllVehicles'

function Home({ vehicles, handleAddvehicle, handleDeleteVehicle }) {
    const [searchtext, setsearchtext] = useState("")

    const onChange = (e) => {
        setsearchtext(e.target.value)
    }

    return (
        <>
            <AddVehicle handleAddvehicle={handleAddvehicle} />
            <div className='your-vehicle'>
                <div className="vehicles-search">
                    <b style={{ marginBlockEnd: "2px" }}>Number Of Vehicles: {vehicles.length}</b>
                    <div className="search-box">
                        <img className='search-icon' src="https://img.icons8.com/ios-filled/344/search.png" alt="search icon" />
                        <input type="text" className="searchtext" value={searchtext} name="searchtext" placeholder="search..." onChange={onChange} />
                    </div>
                </div>
                <AllVehicles vehicles={vehicles.filter((vehicle) => vehicle.name.includes(searchtext))} handleDeleteVehicle={handleDeleteVehicle} />
            </div>
        </>
    )
}

export default Home