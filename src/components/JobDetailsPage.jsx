import React , {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JOBS from "./jobData";

export default function JobDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = JOBS.find((job) => job.id === parseInt(id));

  if (!job) return <p className="text-center text-white">Job not found</p>;
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
    const response = await fetch("https://intelliod-backend.onrender.com/apply", {
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
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate("/careerspage")}
          className="mb-6 text-blue-400 hover:text-blue-300 flex items-center gap-2"
        >
          ← Back to Jobs
        </button>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
          <p className="text-lg text-gray-400">{job.description}</p>
        </header>

    {/* Job Details */}
        <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Job Details</h2>
        <ul className="space-y-2 text-gray-400 list-disc pl-5">
            <li>
            <strong className="text-white">Location:</strong> {job.location}
            </li>
            <li>
            <strong className="text-white">Type:</strong> {job.type}
            </li>
            <li>
            <strong className="text-white">Salary:</strong> {job.salary}
            </li>
            <li>
            <strong className="text-white">Experience:</strong> {job.experience}
            </li>
        </ul>
        </section>

        {/* Full Description */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-400 leading-relaxed">{job.fullDescription}</p>
        </section>

        {/* Responsibilities */}
        {job.responsibilities && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
            <ul className="space-y-2 text-gray-400 list-disc pl-5">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Basic Qualifications */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Basic Qualifications</h2>
          <ul className="space-y-2 text-gray-400 list-disc pl-5">
            {job.basicQualifications.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Preferred Qualifications */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Preferred Qualifications</h2>
          <ul className="space-y-2 text-gray-400 list-disc pl-5">
            {job.preferredQualifications.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Skills Required</h2>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-700 text-white rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>


        {/* Apply Button */}
        <div className="mt-10 flex justify-center md:justify-start">
        <button
            onClick={() => openApplyModal(job)}
            className="bg-[#1D4ED8] hover:bg-[#1E40AF] px-8 py-3 rounded-lg text-white font-medium shadow-lg transition transform hover:scale-105"
        >
            Apply Now
        </button>
        </div>


      </div>
    {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative text-gray-800">
            <button
              onClick={closeModal}
              className="absolute top-4 right-5 text-gray-400 font-extrabold hover:text-gray-800 transition duration-200"
              aria-label="Close modal"
            >
              &#10005;
            </button>
            <h3 className="text-2xl font-semibold mb-4">Apply for {selectedJob.title}</h3>

            <form onSubmit={handleSubmit} className="space-y-4 ">
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
                  className="w-full border border-gray-100 bg-gray-100/50 rounded px-3 py-2"
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
                  className="w-full border border-gray-300 bg-gray-100/50 rounded px-3 py-2"
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
                  className="w-full border border-gray-300 bg-gray-100/50 rounded px-3 py-2"
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
                  className="w-full border bg-gray-100/50 border-gray-300 rounded px-3 py-2"
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
                  className="w-full border bg-gray-100/50 border-gray-300 rounded px-3 py-2"
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
                  className="border border-gray-600 rounded px-3 py-2 w-full text-gray-700 file:cursor-pointer file:rounded file:border-0 file:bg-blue-600 file:text-white file:px-4 file:py-2 hover:file:bg-blue-700"
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
                  loading ? "bg-gray-400" : "bg-[#1D4ED8]"
                }`}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}