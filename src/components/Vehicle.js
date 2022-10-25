function Vehicle({ vehicle, handleDeleteVehicle }) {
    return (
        <>
            <div className="container-card">
                <div className="vehicle">
                    <h3 className='vehicle-name'>{vehicle.name}</h3>
                    <p className='vehicle-number'><strong>Vehicle Number: </strong>{vehicle.number}</p>
                    <p className='vehicle-time'><strong>Time: </strong>{vehicle.time}</p>
                </div>
                <button className="delete" onClick={() => { handleDeleteVehicle(vehicle.id) }}>Delete</button>
            </div>
        </>
    )
}

export default Vehicle