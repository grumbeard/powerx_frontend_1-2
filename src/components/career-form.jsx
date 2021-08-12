import { v4 as uuid } from "uuid";

function CareerForm({ addJob }) {
    const title = document.getElementById('job-title');
    const level = document.getElementById('job-level');
    const department = document.getElementById('job-department');
    const summary = document.getElementById('job-summary');
    const headcount = document.getElementById('headcount');

    function handleAdd(e) {
        e.preventDefault();
        const formData = e.target.elements

        const job = {
            title: formData['job-title'].value,
            department: formData['job-department'].value,
            level: formData['job-level'].value,
            summary: formData['job-summary'].value,
            headcount: formData['headcount'].value,
            _id: uuid()
        };

        addJob(job);
    }

    return (
        <form id="career-form" onSubmit={handleAdd}>
            <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                <div class="px-4 py-5 sm:px-6 text-lg">Add Job Posting</div>
                <div class="px-4 py-5 sm:p-6">
                    <div class="space-y-5">
                        <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                            <label for="job-title" class="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                sm:mt-px sm:pt-2
                                ">
                                Job Title
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="job-title"
                                    id="job-title"
                                    required="required"
                                    class="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                            <label for="job-level" class="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                sm:mt-px sm:pt-2
                                ">
                                Level
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <select
                                    id="job-level"
                                    name="job-level"
                                    required=""
                                    class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
                                >
                                    <option value="internship">Internship</option>
                                    <option value="entry">Entry</option>
                                    <option value="experienced">Experienced</option>
                                    <option value="manager">Manager</option>
                                </select>
                            </div>
                        </div>

                        <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                            <label for="job-department" class="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                sm:mt-px sm:pt-2
                                ">
                                Department
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="job-department"
                                    id="job-department"
                                    required=""
                                    placeholder="e.g. Engineering"
                                    class="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                            <label for="job-summary" class="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                sm:mt-px sm:pt-2
                                ">
                                Summary
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <textarea
                                    id="job-summary"
                                    name="job-summary"
                                    rows="4"
                                    required=""
                                    class="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
                                ></textarea>
                            </div>
                        </div>

                        <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                            <label for="headcount" class="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                sm:mt-px sm:pt-2
                                ">
                                Headcount
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <div class="relative w-32">
                                    <button type="button" class="
                                    absolute
                                    left-0
                                    inset-y-0
                                    px-1.5
                                    text-gray-400
                                    " id="headcount-minus-btn">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                                        </svg>
                                    </button>
                                    <input
                                        type="text"
                                        name="headcount"
                                        id="headcount"
                                        required=""
                                        class="block w-full px-9 text-center shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
                                        value="1"
                                        readonly=""
                                    />
                                    <button type="button" class="
                                    absolute
                                    right-0
                                    inset-y-0
                                    px-1.5
                                    text-gray-400
                                    " id="headcount-plus-btn">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                    </button>
                                    <div id="headcount-error" class="text-red-500 text-xs pt-1 hidden"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-4 py-4 sm:px-6 text-right">
                    <button class="
                        inline-flex
                        justify-center
                        py-2
                        px-4
                        border border-transparent
                        shadow-sm
                        text-sm
                        font-medium
                        rounded-md
                        text-white
                        bg-pink-600
                        hover:bg-pink-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-pink-500
                        ">
                        ADD
                </button>
                </div>
            </div>
        </form>
    )
}

export { CareerForm }