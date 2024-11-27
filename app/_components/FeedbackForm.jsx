const FeedbackForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        We&apos;d Love to Hear From You
      </h2>
      <p className="text-lg text-center text-gray-600 mb-6">
        Help us improve by sharing your thoughts and suggestions on our platform
        and documentation.
      </p>

      <form action="#" method="POST" className="space-y-6">
        {/* Name Field */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            required
          />
        </div>

        {/* Feedback Field */}
        <div className="flex flex-col">
          <label
            htmlFor="feedback"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Share your feedback..."
            rows="5"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
