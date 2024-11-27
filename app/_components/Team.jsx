import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const people = [
  {
    name: "Himanshu Kumar",
    role: "UI AND UX DESIGNER",
    imageUrl: "/himo.jpeg",
    linkedin: "https://www.linkedin.com/in/imhimo/",
    instagram: "https://www.instagram.com/print.himanshu/",
    twitter: "https://x.com/himo_in",
  },
  {
    name: "Piyush Kumar",
    role: "FULL-STACK DEVELOPER",
    imageUrl: "/david.jpg",
    linkedin: "https://www.linkedin.com/in/davidpiyush/",
    instagram: "https://www.instagram.com/david_piyush/",
    twitter: "https://x.com/david__piyush/",
  },
  {
    name: "Mayank Kushwaha",
    role: "GRAPHIC DESIGNER",
    imageUrl: "/mayank.jpg",
    linkedin: "https://www.linkedin.com/in/the-spidey-933475312",
    instagram: "https://www.instagram.com/offical_mayank_sk/",
    twitter: "https://x.com/spideythe53974/",
  },
  {
    name: "Saurabh Kumar ",
    role: "CONTENT WRITER",
    imageUrl: "/saurabh.jpeg",
    linkedin: "https://www.linkedin.com/in/saurabh-raj-malhotra-07244328a/",
    instagram: "https://www.instagram.com/me_saurabh_raj_malhotra/",
    twitter: "https://x.com/himo_inhttps://x.com/K6583161Saurav",
  },
  {
    name: "Shivam Kumar",
    role: "CONTENT WRITER",
    imageUrl: "/shivam.jpg",
    linkedin: "https://www.linkedin.com/in/shivam-kumar-336471334/",
    instagram: "https://www.instagram.com/sk__assassin/",
    twitter: "https://x.com/shivamkumar4430",
  },
  {
    name: "Shivam Singh ",
    role: "CONTENT WRITER",
    imageUrl: "/shivams.jpg",
    linkedin: "#",
    instagram: "#",
    twitter: "",
  },
  {
    name: "Aryan Tiwary ",
    role: "CONTENT WRITER",
    imageUrl: "/aryan.jpg",
    linkedin: "#",
    instagram: "#",
    twitter: "#",
  },
  {
    name: "Ujala Kumari ",
    role: "CONTENT WRITER",
    imageUrl: "/ujala.png",
    linkedin: "#",
    instagram: "#",
    twitter: "#",
  },
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We&apos;re a dynamic group of individuals who are passionate about
            what we do and dedicated to delivering the best results for our
            clients.
          </p>
        </div>

        {/* Team Member Section */}
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col items-center transition-transform transform hover:scale-105 duration-300"
            >
              {/* Profile Image with Square Frame */}
              <div className="relative w-72 h-72 mb-6 rounded-lg overflow-hidden">
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="w-[300px] h-[400px] object-cover transition-transform transform hover:scale-110 duration-300"
                />
              </div>

              {/* Name and Role */}
              <div className="text-center">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base font-medium text-gray-600 mt-[3px]">
                  {person.role}
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-4 justify-center">
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-400 hover:text-gray-500 transition duration-200"
                  >
                    <FaLinkedinIn />
                  </a>
                )}
                {person.instagram && (
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-400 hover:text-gray-500 transition duration-200"
                  >
                    <FaInstagram />
                  </a>
                )}
                {person.twitter && (
                  <a
                    href={person.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-400 hover:text-gray-500 transition duration-200"
                  >
                    <FaTwitter />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
