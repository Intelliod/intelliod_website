import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "React, Tailwind, Next Js experience required.",
    qualificationRequired: "Graduation",
    location: "Hyderabad",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Node.js, Express, MongoDB experience needed.",
    qualificationRequired: "Post Graduation",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description: "Figma, Adobe XD skills are a must.",
    qualificationRequired: "Graduation",
    location: "Visakhapatnam",
    type: "Hybrid",
  },
];

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    specialization: "",
    experience: "",
    resume: null,
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [filterQualification, setFilterQualification] = useState("");

  const openApplyModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
    setMessage("");
    setFormData({
      name: "",
      email: "",
      qualification: "",
      specialization: "",
      experience: "",
      resume: null,
    });
  };

  const closeModal = () => setModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.qualification ||
    !formData.specialization ||
    !formData.experience
  ) {
    setMessage("Please fill in all required fields.");
    return;
  }

  setLoading(true);
  setMessage("");

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("qualification", formData.qualification);
  formDataToSend.append("specialization", formData.specialization);
  formDataToSend.append("experience", formData.experience);
  formDataToSend.append("jobTitle", selectedJob.title);
  if (formData.resume) {
    formDataToSend.append("resume", formData.resume);
  }

  try {
    const response = await fetch("http://13.202.84.210:3001/apply", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();
    if (data.success) {
      setMessage("Application submitted successfully!");
      setTimeout(() => {
        closeModal();
      }, 2000);
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error submitting application:", error);
    setMessage("Failed to send application. Please try again later.");
  } finally {
    setLoading(false);
  }
};


  const filteredJobs = JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterQualification === "" || job.qualificationRequired === filterQualification;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
    <Navbar />
    <div className="max-w-6xl mx-auto p-6 min-h-screen ">
      <h1 className="text-4xl font-bold mb-8 text-center">Careers</h1>
      <div className="mb-8 grid gap-4 md:grid-cols-1">
        <input
          type="text"
          placeholder="Search jobs by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
 
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="border bg-gray-700 hover:bg-gray-800 delay-100 rounded-md p-6 shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="mb-2 text-gray-400">{job.description}</p>
              <p className="text-sm text-gray-400">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-sm text-gray-400">
                <strong>Type:</strong> {job.type}
              </p>
              <p className="text-sm text-gray-400">
                <strong>Qualification Required:</strong> {job.qualificationRequired}
              </p>
              <button
                onClick={() => openApplyModal(job)}
                className="mt-4 bg-gradient-to-r from-[#120a8f] to-[#0038a8] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Apply
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No jobs found.</p>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-500 rounded-lg max-w-lg w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-5 text-gray-700 font-extrabold hover:text-gray-900"
              aria-label="Close modal"
            >
              &#10005;
            </button>
            <h3 className="text-2xl font-semibold mb-4">Apply for {selectedJob.title}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-1" htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="qualification">
                  Qualification *
                </label>
                <select
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                >
                  <option value="">Select Qualification</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Post Graduation">Post Graduation</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="specialization">
                  Specialization *
                </label>
                <input
                  id="specialization"
                  name="specialization"
                  type="text"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="E.g. Computer Science"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="experience">
                  Experience *
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="resume">
                  Upload Resume (PDF, DOC, DOCX)
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full text-gray-700 file:cursor-pointer file:rounded file:border-0 file:bg-blue-600 file:text-white file:px-4 file:py-2 hover:file:bg-blue-700"
                />
                {formData.resume && (
                  <p className="mt-1 text-sm text-gray-200">{formData.resume.name}</p>
                )}
              </div>

              {message && (
                <p
                  className={`font-medium ${
                    message.includes("success") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded text-white font-semibold ${
                  loading ? "bg-gray-400" : "bg-gradient-to-r from-[#120a8f] to-[#0038a8]"
                }`}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
}