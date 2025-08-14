import React, { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JOBS from "./jobData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function JobDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = JOBS.find((j) => j.id === parseInt(id));

  if (!job)
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Job not found</p>
      </div>
    );
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(job);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    otherQualification: "",
    specialization: "",
    experience: "",
    linkedin: "",
    githubRepos: "",
    resume: null,
    expectedSalary: "",
    relocate: "",
    noticePeriod: ""
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
      linkedin: "",
      otherQualification: "",
      githubRepos: "",
      resume: null,
      expectedSalary: "",
      relocate: "",
      noticePeriod: ""
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
      !formData.experience ||
      !formData.linkedin ||
      !formData.expectedSalary ||
      !formData.relocate ||
      !formData.noticePeriod ||
      (formData.qualification === "Others" && !formData.otherQualification) ||
      !formData.resume
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }


    setLoading(true);
    setMessage("");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append(
      "qualification",
      formData.qualification === "Others" ? formData.otherQualification : formData.qualification
    );
    formDataToSend.append("specialization", formData.specialization);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("linkedin", formData.linkedin);
    formDataToSend.append("jobTitle", selectedJob.title);
    formDataToSend.append("githubRepos", formData.githubRepos || ""); // Ensure this is always sent
    formDataToSend.append("expectedSalary", formData.expectedSalary);
    formDataToSend.append("relocate", formData.relocate);
    formDataToSend.append("noticePeriod", formData.noticePeriod);


    if (formData.resume) formDataToSend.append("resume", formData.resume);

    try {
      const response = await fetch("https://intelliod-backend.onrender.com/apply", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

    if (data.success) {
      toast.success("Application submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setMessage("Application submitted successfully!");
      setTimeout(() => {
        closeModal();
      }, 2000);
    } else {
      throw new Error(data.message || "Failed to submit");
    }

    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to send application. Please try again later.", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
      setMessage("Failed to send application. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Main Content */}
      <main className=" md:max-w-[70%] mx-auto px-8 sm:px-6 lg:px-8 py-10">
        {/* Back Button */}
        <button
          onClick={() => navigate("/careers")}
          className="mb-6 text-blue-400 hover:text-blue-300 flex items-center gap-2 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Jobs
        </button>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
          <p className="text-lg text-gray-400 max-w-3xl">{job.description}</p>
        </header>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Job Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">About the Role</h2>
              <p className="text-gray-400 leading-relaxed">{job.fullDescription}</p>
            </section>

            {/* Responsibilities */}
            {job.responsibilities && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
                <ul className="space-y-2 list-disc pl-5 text-gray-400">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Qualifications */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Qualifications</h2>
              <ul className="space-y-2 list-disc pl-5 text-gray-400">
                {job.basicQualifications.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Preferred Qualifications */}
            {job.preferredQualifications?.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Preferred Qualifications</h2>
                <ul className="space-y-2 list-disc pl-5 text-gray-400">
                  {job.preferredQualifications.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Skills Required</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-900/40 text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Job Summary</h3>
              <ul className="space-y-3 text-gray-400">
                <li><strong className="text-white">Location:</strong> {job.location}</li>
                <li><strong className="text-white">Type:</strong> {job.type}</li>
                <li><strong className="text-white">Salary:</strong> {job.salary}</li>
                <li><strong className="text-white">Experience:</strong> {job.experience}</li>
              </ul>
            </div>

            {/* Apply Now Button */}
            <div className="mt-6">
              <button
                onClick={() => openApplyModal(job)}
                className="w-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-medium py-3 rounded-lg shadow-md transition duration-200 transform hover:scale-[1.02]"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Apply Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl p-4 sm:p-4 md:p-6 relative text-gray-800 shadow-xl mx-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-800 text-xl"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">Apply for {selectedJob.title}</h3>

            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm md:text-base">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block font-medium mb-1 text-xs sm:text-sm">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 sm:px-3 sm:py-2 bg-gray-50 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-medium mb-1 text-xs sm:text-sm">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 sm:px-3 sm:py-2 bg-gray-50 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm"
                  required
                />
              </div>

              {/* Qualification */}
              <div>
                <label htmlFor="qualification" className="block font-medium mb-1 text-xs sm:text-sm">Qualification *</label>
                <select
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 sm:px-3 sm:py-2 bg-gray-50 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm"
                  required
                >
                  <option value="">Select Qualification</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Post Graduation">Post Graduation</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {formData.qualification === "Others" && (
                <div>
                  <label htmlFor="otherQualification" className="block font-medium mb-1 text-xs sm:text-sm">Other Qualification</label>
                  <input
                    id="otherQualification"
                    name="otherQualification"
                    type="text"
                    value={formData.otherQualification || ""}
                    onChange={(e) => setFormData({ ...formData, otherQualification: e.target.value })}
                    placeholder="Specify"
                    className="w-full border border-gray-300 rounded px-2 py-1 sm:px-3 sm:py-2 bg-gray-50 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm"
                  />
                </div>
              )}

              {/* Specialization */}
              <div>
                <label htmlFor="specialization" className="block font-medium mb-1 text-xs sm:text-sm">Specialization *</label>
                <input
                  id="specialization"
                  name="specialization"
                  type="text"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  placeholder="E.g. CS"
                  className="w-full border border-gray-300 rounded px-2 py-1 sm:px-3 sm:py-2 bg-gray-50 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm"
                  required
                />
              </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block font-medium mb-1 text-xs sm:text-sm">Experience *</label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={2}
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-2 py-1 sm:px-3 sm:py-2 bg-gray-50 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm"
                    required
                  ></textarea>
                </div>
                {/* Expected Salary */}
                <div>
                  <label htmlFor="expectedSalary" className="block font-medium mb-1 text-xs sm:text-sm">Expected Salary (₹) *</label>
                  <input
                    id="expectedSalary"
                    name="expectedSalary"
                    type="number"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-2 py-1 sm:px-3 sm:py-2 bg-gray-50 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Relocate to Vizag */}
                <div>
                  <label htmlFor="relocate" className="block font-medium mb-1 text-xs sm:text-sm">Willing to Relocate *</label>
                  <select
                      id="relocate"
                  name="relocate"
                  value={formData.relocate}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 sm:px-3 sm:py-2 bg-gray-50 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm"
                  required
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Notice Period */}
              <div>
                <label htmlFor="noticePeriod" className="block font-medium mb-1 text-xs sm:text-sm">Notice Period (in days) *</label>
                <input
                  id="noticePeriod"
                  name="noticePeriod"
                  type="number"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 sm:px-3 sm:py-2 bg-gray-50 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm"
                  required
                />
              </div>
              </div>
              {/* LinkedIn URL */}
              <div>
                <label htmlFor="linkedin" className="block font-medium mb-1 text-xs sm:text-sm">LinkedIn URL *</label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 sm:px-3 sm:py-2 bg-gray-50 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm"
                  required
                />
              </div>

              {/* GitHub Repositories */}
              <div>
                <label htmlFor="githubRepos" className="block font-medium mb-1 text-xs sm:text-sm">GitHub Repositories (Optional)</label>
                  <textarea
                  id="githubRepos"
                  name="githubRepos"
                  rows={2}
                  value={formData.githubRepos || ""}
                  onChange={handleInputChange}
                  placeholder="Enter GitHub repository links, one per line"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs"
                ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                  Share one or more GitHub links related to this job.
                </p>
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block font-medium mb-1 text-xs sm:text-sm">Upload Resume</label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded px-2 py-1 sm:px-3 sm:py-2 w-full bg-gray-50 file:rounded file:border-0 file:bg-blue-600 file:text-white file:px-2 file:py-1 file:text-xs sm:file:px-3 sm:file:py-2 sm:file:text-sm hover:file:bg-blue-700 cursor-pointer text-xs sm:text-sm"
                />
                {formData.resume && (
                  <p className="mt-1 text-xs sm:text-sm text-gray-500 truncate">{formData.resume.name}</p>
                )}
              </div>

              {/* Message */}
              {message && (
                <p className={`font-medium text-xs sm:text-sm ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
                  {message}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 sm:py-3 rounded text-white font-semibold text-xs sm:text-sm ${
                  loading ? "bg-gray-400" : "bg-[#1D4ED8] hover:bg-blue-700"
                }`}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    </div>
  );
}