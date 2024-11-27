import { FaArrowDownLong } from "react-icons/fa6";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image"; // Import Image component from next/image

function Hero() {
  return (
    <section
      className="w-full h-screen flex justify-center items-center relative"
      id="home"
    >
      {/* Background Image with full viewport and proper backdrop */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/hero.jpg" // Update with the path to your background image
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        {/* Semi-transparent backdrop to improve text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Text content with z-10 to ensure it appears on top */}
      <div className="text-center space-y-6 z-10 text-white  ">
        <h1 className="text-6xl font-bold leading-tight">
          Empowering Connections <br /> with{" "}
          <span className="text-fuchsia-300">Seamless Integration</span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover the ultimate gateway solution for secure, fast, and scalable
          connections. Unlock the power of automation, real-time analytics, and
          developer-friendly APIs.
        </p>

        <div className="space-x-6 mt-6">
          <Button
            backgroundColor="bg-fuchsia-900"
            hoverColor="hover:bg-fuchsia-700"
          >
            Get Started Now
          </Button>
          <Button
            border="border-2 border-fuchsia-700 "
            color="text-[#333] hover:text-white"
            hoverColor="hover:bg-fuchsia-700"
          >
            <Link
              href="#feature"
              className="flex items-center gap-2 justify-center text-[#eee]"
            >
              <span>
                <FaArrowDownLong />
              </span>
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
