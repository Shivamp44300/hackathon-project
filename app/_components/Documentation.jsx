import Link from "next/link";

const DocsPage = () => {
  return (
    <section className=" text-gray-800 pt-24" id="docs">
      <h2 className="text-5xl font-bold text-center  mb-6">
        Documentation
      </h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Your ultimate guide to getting started, integrating, and mastering our
        platform.
      </p>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-8">
        <section className="space-y-12">
          {/* Introduction */}
          <div className="my-8">
            <h3 className="text-2xl font-semibold text-fuchsia-800">
              Introduction
            </h3>
            <p className="text-lg mt-2 text-gray-700">
              Welcome to the Gateway App Documentation. Our platform is designed
              to enable seamless integration, real-time data exchange, and
              secure communication between your systems. This documentation will
              guide you through everything you need to get started.
            </p>
            <h4 className="text-lg font-semibold mt-4 text-fuchsia-600">
              Who is this for?
            </h4>
            <p className="text-lg text-gray-700">
              Developers, administrators, and businesses looking to simplify and
              enhance their connectivity solutions.
            </p>
          </div>

          {/* Getting Started */}
          <div className="my-8">
            <h3 className="text-2xl font-semibold text-fuchsia-800">
              Getting Started
            </h3>
            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>
                <strong>Step 1: Sign Up and Set Up Your Account</strong>
                <p className="ml-4">
                  Register on our platform, create an account, and obtain your
                  API key for integration.
                </p>
              </li>
              <li>
                <strong>Step 2: Explore the Dashboard</strong>
                <p className="ml-4">
                  Navigate through your personalized dashboard to configure
                  settings, monitor analytics, and manage workflows.
                </p>
              </li>
              <li>
                <strong>Step 3: Connect Your Systems</strong>
                <p className="ml-4">
                  Use our integration wizard or API documentation to link your
                  existing applications.
                </p>
              </li>
            </ol>
          </div>

          {/* API Reference */}
          <div className="my-8">
            <h3 className="text-2xl font-semibold text-fuchsia-800">
              API Reference
            </h3>
            <p className="mt-2 text-gray-700">
              Our APIs allow you to send, receive, and analyze data
              effortlessly.
            </p>
            <h4 className="text-lg font-semibold mt-4 text-fuchsia-600">
              Endpoints Overview
            </h4>
            <p className="text-gray-700">
              Common Use Cases: Authenticate users, route data, or monitor
              transactions using secure API calls.
            </p>
            <div className="bg-gray-100 p-4 my-4 rounded-md overflow-x-auto shadow-lg">
              <pre>
                <code className="text-gray-900">
                  {`GET /api/users  // Retrieve a list of users\nPOST /api/users/create     // Submit data for integration`}
                </code>
              </pre>
            </div>
          </div>

          {/* Tutorials */}
          <div className="my-8">
            <h3 className="text-2xl font-semibold text-fuchsia-800">
              Tutorials
            </h3>
            <p className="mt-2 text-gray-700">
              Follow these guides to accomplish common tasks like setting up
              integrations, monitoring analytics, or customizing workflows.
            </p>
            <h4 className="text-lg font-semibold mt-4 text-fuchsia-600">
              Example Tutorial: Create Your First Integration
            </h4>
            <ul className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Navigate to the Integrations section in the dashboard.</li>
              <li>Select the source and target systems.</li>
              <li>
                Use the provided API key to authenticate and complete the setup.
              </li>
            </ul>
          </div>

          {/* Troubleshooting */}
          <div className="my-8">
            <h3 className="text-2xl font-semibold text-fuchsia-800">
              Troubleshooting
            </h3>
            <h4 className="text-lg font-semibold mt-4 text-fuchsia-600">
              Common Issues
            </h4>
            <p className="text-gray-700">
              Having trouble? Here&apos;s how to resolve the most frequently
              encountered issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                API not responding? Ensure your API key is valid and has the
                required permissions.
              </li>
              <li>
                Data not syncing? Verify the source system is correctly
                configured.
              </li>
            </ul>
            <h4 className="text-lg font-semibold mt-4 text-fuchsia-600">
              Support
            </h4>
            <p className="text-gray-700">
              If you&apos;re still stuck, contact our support team at{" "}
              <Link
                href="mailto:support@yourgateway.com"
                className="text-blue-500 hover:text-blue-600"
              >
                support@yourgateway.com
              </Link>
              .
            </p>
          </div>

          {/* FAQs */}
          <div className="my-8">
            <h3 className="text-2xl font-semibold text-fuchsia-800">FAQs</h3>
            <ul className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>
                <strong>What is the Gateway App?</strong> The Gateway App
                bridges the gap between systems, allowing secure and seamless
                data exchange.
              </li>
              <li>
                <strong>Is there a free version available?</strong> Yes, we
                offer a free plan with limited features. Check our pricing page
                for details.
              </li>
              <li>
                <strong>How secure is my data?</strong> We use advanced
                encryption standards to ensure your data remains safe.
              </li>
            </ul>
          </div>

          {/* Advanced Features */}
          <div className="my-8">
            <h3 className="text-2xl font-semibold text-fuchsia-800">
              Advanced Features
            </h3>
            <p className="mt-2 text-gray-700">
              Our advanced features empower you with real-time data monitoring
              and customizable workflows.
            </p>
            <h4 className="text-lg font-semibold mt-4 text-fuchsia-600">
              Real-Time Data Monitoring
            </h4>
            <p className="text-gray-700">
              Visualize your data flow in real-time with our intuitive
              dashboards.
            </p>
            <h4 className="text-lg font-semibold mt-4 text-fuchsia-600">
              Custom Automation Workflows
            </h4>
            <p className="text-gray-700">
              Design workflows tailored to your needs for ultimate efficiency.
            </p>
          </div>

          {/* Feedback */}
          <div className="my-8">
            <h3 className="text-2xl font-semibold text-fuchsia-800">Feedback</h3>
            <p className="mt-2 text-gray-700">
              Help us improve by sharing your feedback on our platform and
              documentation.
            </p>
            <Link href="/feedback">
              <p className="text-fuchsia-600 font-semibold hover:text-indigo-700 transition duration-300">
                Submit Feedback
              </p>
            </Link>
          </div>
        </section>
      </main>
    </section>
  );
};

export default DocsPage;
