import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import JOBS from "./jobData";

export default function CareersPage() {
  const navigate = useNavigate();

  // Filters for job search
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  // Filtered jobs based on search and location
  const filteredJobs = JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      filterLocation === "" || job.location.toLowerCase().includes(filterLocation.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-6xl min-h-screen mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Join Our Team</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Explore exciting career opportunities and grow with us in a dynamic environment.
        </p>
        <div className="grid gap-4 md:grid-cols-2 mb-10">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid gap-6 grid-cols-1">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-800 border border-gray-700 rounded-lg shadow hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              onClick={() => navigate(`/job/${job.id}`)}
            >
              <div className="p-5 flex items-start justify-between">
                <div className="w-full md:w-10/12">
                  <h2 className="text-lg font-semibold mb-1">{job.title}</h2>
                  <p className="text-sm text-gray-400 mb-2 line-clamp-2 h-10">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="text-xs text-gray-500">+{job.skills.length - 3} more</span>
                    )}
                  </div>

                  <div className="mt-4 space-y-1 text-sm text-gray-400">
                    <p>
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p>
                      <strong>Type:</strong> {job.type}
                    </p>
                    <p>
                      Posted On: {job.postedDate}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/job/${job.id}`);
                    }}
                    className="mt-4 text-sm text-blue-400 hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10">No jobs found.</p>
        )}
      </div>
        </main>
      <Footer />
    </div>
  );
}
