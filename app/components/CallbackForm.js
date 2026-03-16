"use client";
import { useState } from "react";

export default function CallbackForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    locality: "",
    service: "",
    brand: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New RO Service Request%0A
Name: ${form.name}%0A
Email: ${form.email}%0A
Phone: ${form.phone}%0A
Locality: ${form.locality}%0A
Service: ${form.service}%0A
Brand: ${form.brand}`;

    const whatsappURL = `https://wa.me/917499741546?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <h2 className="text-xl font-bold text-center mb-6">
        Request A Call Back
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Your Name"
          required
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Email Address"
          required
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Phone Number"
          required
        />

        <input
          name="locality"
          value={form.locality}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Locality of service"
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>What do you need help with?</option>
          <option>RO Service</option>
          <option>RO Repair</option>
          <option>RO Installation</option>
          <option>Filter Change</option>
        </select>

        <input
          name="brand"
          value={form.brand}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Which brand is your RO purifier?"
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Submit
        </button>

      </form>
    </div>
  );
}