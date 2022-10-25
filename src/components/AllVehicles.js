import Vehicle from "./Vehicle"

function AllVehicles({ vehicles, handleDeleteVehicle }) {
    return (
        <div className='vehicles-list'>
            {vehicles.map((vehicle) => {
                return <Vehicle vehicle={vehicle} key={vehicle.id} handleDeleteVehicle={handleDeleteVehicle} />
            })}
        </div>
    )
}

export default AllVehicles