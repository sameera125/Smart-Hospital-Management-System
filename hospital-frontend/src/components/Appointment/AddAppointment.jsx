import {useState} from "react";

import {saveAppointment}
from "../../services/ApiService";

import "../../styles/Appointment.css";


function AddAppointment(){


const [appointment,setAppointment]=useState({

patientId:"",
doctorId:"",
appointmentDate:"",
status:"Booked"

});


const handleChange=(e)=>{

setAppointment({

...appointment,

[e.target.name]:e.target.value

});

};


const submitAppointment=async(e)=>{

e.preventDefault();


try{


await saveAppointment(appointment);


alert("Appointment Booked Successfully");


setAppointment({

patientId:"",
doctorId:"",
appointmentDate:"",
status:"Booked"

});


}

catch(error){

alert("Appointment Failed");

console.log(error);

}


};



return(


<div className="appointment-form">


<h2>Book Appointment</h2>


<form onSubmit={submitAppointment}>


<input

name="patientId"

placeholder="Patient ID"

value={appointment.patientId}

onChange={handleChange}

/>



<input

name="doctorId"

placeholder="Doctor ID"

value={appointment.doctorId}

onChange={handleChange}

/>



<input

type="date"

name="appointmentDate"

value={appointment.appointmentDate}

onChange={handleChange}

/>



<select

name="status"

value={appointment.status}

onChange={handleChange}

>

<option>Booked</option>

<option>Completed</option>

<option>Cancelled</option>


</select>



<button>

Book Appointment

</button>



</form>


</div>



);


}


export default AddAppointment;