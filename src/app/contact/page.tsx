export default function ContactPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold mb-6">Connect With Tefline</h1>
            <p className="text-lg mb-8">
                Reach out to learn more about our programs or book a free
                masterclass for your organization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        Get In Touch
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold">Visit Us</h3>
                                <p>
                                    Embassy Golf Links Business Park, Cinnabar
                                    Hills, Bangalore - 560071, India
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold">Email Us</h3>
                                <p>team@tefline.org</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold">Call Us</h3>
                                <p>+91 98451 71490</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">
                            Free Masterclass
                        </h3>
                        <p className="mb-4">
                            We offer free Wellness Intelligence™ masterclasses
                            for corporates and communities. Contact us to
                            schedule a session for your organization.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                            Book a Masterclass
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6">
                        <h2 className="text-2xl font-semibold">
                            Send Us a Message
                        </h2>
                        <p>
                            Fill out the form below and our team will get back
                            to you shortly.
                        </p>
                    </div>

                    <form className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                className="w-full p-2 border rounded-md"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <section className="bg-blue-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
                <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">
                        Map placeholder - integrate Google Maps here
                    </p>
                </div>
            </section>
        </div>
    );
}
