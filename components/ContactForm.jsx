"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
  });
  const [ipAddress, setIpAddress] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const router = useRouter(); // To handle redirection

  // Get the user's IP address
  const fetchIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIpAddress(response.data.ip);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  useEffect(() => {
    fetchIpAddress();
    setSourceUrl(window.location.href); // Get the current page's URL
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  //   const handleSubmit = async () => {
  //     if (!formData.name || !formData.phone) {
  //       alert("Please fill in both your name and phone number.");
  //       return; // Do not proceed if validation fails
  //     }
  //     try {
  //       const response = await axios.post(
  //         "https://dashboard.omnisellcrm.com/api/store",
  //         {
  //           name: formData.name,
  //           phone_number: formData.phone,
  //           email: formData.email,
  //           location: null,
  //           company_name: "Nirmala",
  //           lead_types_id: "nirmala_ireland",
  //           requirement: "",
  //           ip_address: ipAddress, // Set IP address from API
  //           source_url: sourceUrl, // Set source URL
  //           source_app: null,
  //           source_website: "", // LP URL
  //           original_source: null,
  //           utm_source: null,
  //           utm_medium: null,
  //           utm_campaign: null,
  //           gclid: null,
  //           verified: 0,
  //           api: true,
  //         }
  //       );

  //       if (response.status === 200) {
  //         router.push("thank-you"); // Redirect to the Thank You page on success
  //       } else {
  //         alert("Failed to submit the form.");
  //       }
  //     } catch (error) {
  //       console.error("There was an error submitting the form:", error);
  //       alert("Error submitting form, please try again.");
  //     }
  //   };

  return (
    <div className="container my-1">
      <div
        className="contact-form rounded cusm"
        style={{
          backgroundColor: "#e0f7f1", // Light background color
        }}
      >
        <h3
          className="text-center"
          style={{
            marginBottom: "10px",
            color: "#333333", // Darker text color
            fontSize: "25px",
            fontWeight: "600", // Slightly bolder font
          }}
        >
          Book A Project Now
        </h3>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Name - Full Width */}
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
              style={{ color: "#555", fontWeight: "500" }} // Slightly bolder label
            >
              Name
            </label>
            <input
              type="text"
              className="form-control premium-input"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                backgroundColor: "#ffffff", // Light background for inputs
                border: "1px solid #ccc", // Subtle border
                borderRadius: "5px", // Soft corners
                color: "#333", // Darker text color
                padding: "10px", // More padding for comfort
                fontSize: "16px", // Slightly larger font size
              }}
            />
          </div>

          {/* Phone and Email - Half Width Each */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label
                htmlFor="phone"
                className="form-label"
                style={{ color: "#555", fontWeight: "500" }} // Slightly bolder label
              >
                Phone
              </label>
              <div className="input-group">
                <span
                  className="input-group-text"
                  style={{
                    backgroundColor: "#e0f7f1", // Light background for prefix
                    border: "1px solid #ccc",
                    borderRadius: "5px 0 0 5px", // Soft corners on the left
                    color: "#333",
                    fontWeight: "500",
                  }}
                >
                  +91
                </span>
                <input
                  type="text"
                  className="form-control premium-input"
                  id="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #ccc",
                    borderRadius: "0 5px 5px 0", // Soft corners on the right
                    color: "#333",
                    padding: "10px",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "#555", fontWeight: "500" }} // Slightly bolder label
              >
                Email
              </label>
              <input
                type="email"
                className="form-control premium-input"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "5px", // Soft corners
                  color: "#333",
                  padding: "10px",
                  fontSize: "16px",
                }}
              />
            </div>
          </div>

          {/* Dropdown for Project Selection */}
          <div className="mb-3">
            <label
              htmlFor="project"
              className="form-label"
              style={{ color: "#555", fontWeight: "500" }} // Slightly bolder label
            >
              Choose Project
            </label>
            <div style={{ position: "relative" }}>
              <select
                className="form-control premium-input"
                id="project"
                value={formData.project}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "5px", // Soft corners
                  color: "#333",
                  appearance: "none", // Remove default dropdown arrow
                  padding: "10px 30px 10px 10px", // Space for the custom arrow
                  fontSize: "16px",
                }}
              >
                <option value="hippodrome">Hippodrome</option>
                <option value="galleria">Galleria</option>
                <option value="pavilion">Pavilion</option>
              </select>
              {/* Dropdown icon */}
              <span
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none", // Make the icon not interactable
                  fontSize: "20px", // Adjust the size of the icon
                  color: "#555",
                }}
              >
                ▼
              </span>
            </div>
          </div>

          {/* Centered Button */}
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary premium-btn"
              style={{
                background: "linear-gradient(90deg, #0066cc, #004d99)", // Gradient background
                border: "none",
                borderRadius: "5px", // Soft corners
                padding: "10px 20px",
                fontSize: "20px",
                width: "100%",
                color: "#ffffff", // White text for contrast
                transition: "background 0.3s", // Smooth transition for hover effect
              }}
              onClick={handleSubmit}
              onMouseEnter={(e) => (e.target.style.background = "#004d99")} // Darker on hover
              onMouseLeave={(e) =>
                (e.target.style.background =
                  "linear-gradient(90deg, #0066cc, #004d99)")
              } // Back to gradient
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
