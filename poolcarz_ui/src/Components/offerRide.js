import axios from "axios";
import React, { useState } from "react";

function OfferRide() {
  const [form, setForm] = useState({
    name: "",
    pickUp: "",
    destination: "",
    car: "",
    seatsLeft: "",
  });

  const [formError, setFormError] = useState({
    nameError: "",
    pickUpError: "",
    destinationError: "",
    carError: "",
    seatsError: "",
  });
  const [formValid, setFormValid] = useState({
    name: false,
    pickUp: false,
    destination: false,
    car: false,
    seats: false,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({ ...form, [name]: value });
    validate(name, value);
  };

  let validate = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        if (value === "") {
          setFormError({ ...formError, nameError: "field required" });
          setFormValid({ ...formValid, name: false });
        } else {
          let pattern = new RegExp("^[A-Za-z ]{1,15}$");
          pattern.test(value)
            ? setFormError({ ...formError, nameError: "" })
            : setFormError({ ...formError, nameError: "Enter valid name" });
          pattern.test(value)
            ? setFormValid({ ...formValid, name: true })
            : setFormValid({ ...formValid, name: false });
        }
        break;
      case "pickUp":
        if (value === "") {
          setFormError({ ...formError, pickUpError: "field required" });
          setFormValid({ ...formValid, pickUp: false });
        } else {
          let pattern = new RegExp("^[A-Za-z ]{1,15}$");
          pattern.test(value)
            ? setFormError({ ...formError, pickUpError: "" })
            : setFormError({ ...formError, pickUpError: "Enter valid name" });
          pattern.test(value)
            ? setFormValid({ ...formValid, pickUp: true })
            : setFormValid({ ...formValid, pickUp: false });
        }
        break;
      default:
        break;
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post("http://localhost:5000/offer_ride", form)
      .then((response) => {
        console.log("Good");
        setSuccessMessage(response.data.message);
        setErrorMessage("");
      })
      .catch((error) => {
        if (error.response) {
          setSuccessMessage("");
          setErrorMessage(error.response.data.message);
        } else {
          setSuccessMessage("");
          setErrorMessage(error.message);
        }
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card-header bg-primary text-light text-left col-6 offset-3">
          {" "}
          Offer a Ride{" "}
        </div>
      </div>
      <div className="row">
        <div className="card-body bg-light text-left col-6 offset-3">
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="name">Name </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => handleChange(e)}
                value={form.name}
                className="form-control"
                placeholder=""
                required
              />
              <span className="text-danger">{formError.nameError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="pickUp">Start Location</label>
              <input
                type="text"
                id="pickUp"
                name="pickUp"
                onChange={(e) => handleChange(e)}
                value={form.pickUp}
                className="form-control"
              />
              <span className="text-danger">{formError.pickUpError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                id="destination"
                name="destination"
                onChange={(e) => handleChange(e)}
                value={form.destination}
                className="form-control"
              />
              <span className="text-danger">{formError.destinationError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="car">Car</label>
              <input
                type="text"
                id="car"
                name="car"
                onChange={(e) => handleChange(e)}
                value={form.car}
                className="form-control"
              />
              <span className="text-danger">{formError.carError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="seatsLeft">Seat available</label>
              <input
                type="number"
                id="seatsLeft"
                name="seatsLeft"
                onChange={(e) => handleChange(e)}
                value={form.seatsLeft}
                className="form-control"
              />
              <span className="text-danger">{formError.seatsError}</span>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <span className="text-success">{successMessage}</span>
            <span className="text-danger">{errorMessage}</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OfferRide;
