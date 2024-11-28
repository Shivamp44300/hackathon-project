function Feature() {
  return (
    <section className="py-16 bg-gray-50" id='feature'>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          Key Features
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Empowering your business with the tools you need for seamless and
          secure operations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Feature 1 */}
          <article className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <img
              src="transaction.png"
              alt="Secure Transactions"
              className="mx-auto mb-4 w-32 h-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
             User-Friendly Dashboard
            </h3>
            <p className="text-gray-600">
             Navigate and control all your integrations with an intuitive dashboard designed for simplicity and ease of use.
            </p>
          </article>

          {/* Feature 2 */}
          <article className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <img
              src="analytics.png"
              alt="Real-Time Analytics"
              className="mx-auto mb-4 w-32 h-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Real-Time Analytics
            </h3>
            <p className="text-gray-600">
              Gain actionable insights and monitor system performance with
              real-time data analytics at your fingertips.
            </p>
          </article>

          {/* Feature 3 */}
          <article className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <img
              src="api.png"
              alt="Developer-Friendly APIs"
              className="mx-auto mb-4 w-32 h-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Developer-Friendly APIs
            </h3>
            <p className="text-gray-600">
              Simplify integrations with our easy-to-use REST and GraphQL APIs,
              designed to save time and boost productivity.
            </p>
          </article>

          {/* Feature 4 */}
          <article className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <img
              src="cross_platform.png"
              alt="Cross-Platform Compatibility"
              className="mx-auto mb-4 w-32 h-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Cross-Platform Compatibility
            </h3>
            <p className="text-gray-600">
              Seamlessly integrate across devices and systems, ensuring smooth
              communication between all your tools.
            </p>
          </article>

          {/* Feature 5 */}
          <article className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <img
              src="cloud_syn.jpg"
              alt="Cloud Sync"
              className="mx-auto mb-4 w-32 h-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Cloud Sync
            </h3>
            <p className="text-gray-600">
              Keep all your data in sync across devices, with automatic cloud
              backup ensuring no data is ever lost.
            </p>
          </article>

          {/* Feature 6 */}
          <article className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <img
              src="automation.jpg"
              alt="Automation Tools"
              className="mx-auto mb-4 w-32 h-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Automation Tools
            </h3>
            <p className="text-gray-600">
              Streamline repetitive tasks with automated workflows that save
              time and boost team productivity.
            </p>
          </article>

          {/* Feature 7 */}
          <article className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <img
              src="customization.avif"
              alt="Customization Options"
              className="mx-auto mb-4 w-32 h-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Customization Options
            </h3>
            <p className="text-gray-600">
              Tailor the system to your needs with a variety of customization
              options, ensuring your experience is unique.
            </p>
          </article>

          {/* Feature 8 */}
          <article className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <img
              src="support.avif"
              alt="24/7 Support"
              className="mx-auto mb-4 w-32 h-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Our dedicated support team is available around the clock to assist
              you with any questions or issues you may have.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Feature;
