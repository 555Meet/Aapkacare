import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Appointment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const doctorName = queryParams.get("doctor");
  const appointmentDate = queryParams.get("date");

  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    gender: "",
    doctor_name: doctorName || "",
    appointment_date: appointmentDate || "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost/save_appointment.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        setError("");
      } else {
        setError(result.message || "Error saving appointment.");
      }
    } catch (err) {
      setError("Server connection failed. Is XAMPP running?");
      console.error("❌ Submit error:", err);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">✅ Appointment Confirmed!</h2>
        <p>Doctor: <strong>{formData.doctor_name}</strong></p>
        <p>Date: <strong>{formData.appointment_date}</strong></p>
        <p>Name: <strong>{formData.full_name}</strong></p>
        <p>Phone: <strong>{formData.phone_number}</strong></p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Book Appointment</h2>

      <p className="mb-2"><strong>Doctor:</strong> {formData.doctor_name}</p>
      <p className="mb-4"><strong>Date:</strong> {formData.appointment_date}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          className="w-full p-3 border rounded"
          value={formData.full_name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          className="w-full p-3 border rounded"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          className="w-full p-3 border rounded"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Submit Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;
