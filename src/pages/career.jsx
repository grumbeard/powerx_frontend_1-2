import * as React from "react";
import { CareerItem } from "../components/career-item";
import { CareerForm } from "../components/career-form";
import { exampleJobs } from "../data/jobs-data";

export const Career = () => {
    const [jobs, setJobs] = React.useState(exampleJobs);

    function handleAddJob(job) {
        setJobs([...jobs, job]);
    }

    function handleDeleteJob(id) {
        setJobs([...jobs].filter(job => job._id !== id));
    }

    return (
        <section className="max-w-6xl mx-auto px-3 py-12 space-y-6">
            <div className="mb-8">
                <div>
                    <h1 className="text-6xl mb-4 font-extrabold">
                        Careers
                    </h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div class="md:w-1/2">
                    <CareerForm
                        addJob={handleAddJob}
                    />
                </div>
                <ul id="careerList" className="md:flex-1 space-y-3">
                    {jobs.map((job) => (
                        <CareerItem
                            jobId={job._id}
                            title={job.title}
                            department={job.department}
                            level={job.level}
                            onEdit={() => alert("Edit btn clicked, populate the form!")}
                            onDelete={handleDeleteJob}
                            key={job._id}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};
