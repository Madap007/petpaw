

function Adoptionform() {
    return (
        <div className="adoption-form col-lg-6">
            <h3>Get Meow Meow</h3>
            <p>Adopt a pet today and give them a loving home.</p>
            <form id="adoption-form">
                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" required />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="contact">Contact Number</label>
                            <input type="number" className="form-control" id="mobile" name="mobile" placeholder="Enter your contact number" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="pet">Pet</label>
                            <select className="form-control" id="pet" name="pet" required>
                                <option value="">Select a pet</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="bird">Bird</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default Adoptionform;