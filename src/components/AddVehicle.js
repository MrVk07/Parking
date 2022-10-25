import React, { useState } from 'react'

function AddVehicle({ handleAddvehicle }) {
    const [vehicle, setvehicle] = useState({ number: "", name: "" })

    const submitHandler = (e) => {
        e.preventDefault()
        if (vehicle.number.length < 5) {
            alert("Number has less than 5 characters")
            return
        }
        if (vehicle.name.length < 4) {
            alert("Name has less than 4 characters")
            return
        }
        handleAddvehicle(vehicle)
        setvehicle({ number: "", name: "" })
        alert("Vehicle Added Successfully")
    }


    const onChange = (e) => {
        if (e.target.id === "number") {
            setvehicle({ ...vehicle, [e.target.name]: (e.target.value).slice(0, 10) })
        }
        if (e.target.id === "name") {
            setvehicle({ ...vehicle, [e.target.name]: (e.target.value).slice(0, 30) })

        }
    }

    return (
        <>
            <div className="container-input">
                <form>
                    <div className='number'>
                        <div className="label-number">
                            <label htmlFor="number"><b>Vehicle Number:</b></label>
                        </div>
                        <input type="text" className='input-number' id="number" value={vehicle.number} name="number" placeholder="Vehicle Number..." onChange={onChange} />
                        {vehicle.number.length < 5
                            ? <div style={{ opacity: '0.5' }}>atleast 5 characters</div>
                            : <div style={{ opacity: '0.5' }}>{10 - vehicle.number.length} characters remaining</div>}

                    </div>
                    <div className="name">
                        <div className="label-name">
                            <label htmlFor="name"><b>Driver Name:</b></label>
                        </div>
                        <input type="text" className='input-name' id="name" value={vehicle.name} name="name" placeholder="Driver Name..." onChange={onChange} ></input>
                        {vehicle.name.length < 4
                            ? <div style={{ opacity: '0.5' }}>atleast 4 characters</div>
                            : <div style={{ opacity: '0.5' }}>{15 - vehicle.name.length} characters remaining</div>}
                    </div>
                    <div className="row">
                        <input className='submitbutton' type="submit" value="Submit" onClick={submitHandler} />
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddVehicle