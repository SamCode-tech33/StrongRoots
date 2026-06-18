import Link from "next/link";
import Image from "next/image";
import TestimonialSlider from "./components/TestimonialSlider";
import HeroBannerVideo from "./components/HeroBannerVideo";

const Home = () => {
  return (
    <div>
      <nav className="flex justify-between py-2 px-16 items-center absolute top-0 z-10 w-full bg-[rgba(85,101,76,0.5)]">
        <Link href="/" className="flex justify-center items-center text-2xl">
          {" "}
          <Image
            src="/SVG/Badge Green L.svg"
            alt="image missing"
            width={80}
            height={80}
          />{" "}
          <span>StrongRoots</span>
        </Link>
        <div className="w-1/3 flex justify-around">
          <Link className="nav-button px-2 py-1 rounded-lg" href="/about">
            About
          </Link>
          <Link className="nav-button px-2 py-1 rounded-lg" href="/services">
            Services
          </Link>
          <Link className="nav-button px-2 py-1 rounded-lg" href="/media">
            Media
          </Link>
          <Link className="nav-button px-2 py-1 rounded-lg" href="/donations">
            Support Us
          </Link>
          <Link className="nav-button px-2 py-1 rounded-lg" href="/contact">
            Contact
          </Link>
          <Link
            className="nav-button p-1 rounded-2xl flex items-center"
            href="/login"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              {" "}
              <title>User</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>
        </div>
      </nav>
      <section className="h-screen w-full">
        <HeroBannerVideo
          imageSrc="/PNG/SR Lockup Light@3x.png"
          videoSrc="/standin-promo.mp4"
          alt="Hero banner"
          fadeDurationMs={8000}
        />
      </section>
      <section className="flex flex-col justify-center items-center my-16">
        <h1 className="text-5xl mb-16">Testimonials</h1>
        <TestimonialSlider />
      </section>
      <section className="grid grid-cols-3 gap-16 px-35 text-center">
        <div className="h-[60vh] bg-taupe-500/70 rounded-lg flex flex-col items-center justify-around text-xl p-12">
          <h2 className="text-3xl">Individual Sessions</h2>
          <h3 className="underline">
            Change your life with a 1 hour, spiritual deep dive.
          </h3>
          <div>
            <h3 className="mb-4">Single Session: $60 / 10 Sessions: $500</h3>
            <h3>College Students: $40 / 10 Sessions: $375</h3>
          </div>
          <button
            type="button"
            className="bg-[rgba(118,103,75,1)] px-4 py-2 rounded-lg text-2xl hover:bg-[#a58c5f]"
          >
            Book Now
          </button>
        </div>
        <div className="bg-taupe-500/70 rounded-lg flex flex-col items-center justify-around text-xl p-12">
          <h2 className="text-3xl">Group Sessions</h2>
          <h3 className="underline">
            Bring your friends and family together for a life-changing event
          </h3>
          <h3>For pricing please contact at: strongrootscoach@gmail.com</h3>
          <button
            type="button"
            className="bg-[rgba(118,103,75,1)] px-4 py-2 rounded-lg text-2xl hover:bg-[#a58c5f]"
          >
            Contact Here
          </button>
        </div>
        <div className="bg-taupe-500/70 rounded-lg flex flex-col items-center justify-around text-xl p-12">
          <h2 className="text-3xl">Public Speaking</h2>
          <h3 className="underline">Bringing the word to larger crowds</h3>
          <h3>For pricing please contact at: strongrootscoach@gmail.com</h3>
          <button
            type="button"
            className="bg-[rgba(118,103,75,1)] px-4 py-2 rounded-lg text-2xl hover:bg-[#a58c5f]"
          >
            Contact Here
          </button>
        </div>
      </section>
      <footer className="bg-[#55654c] text-white mt-24 border-white/20 border-t">
        <div className="max-w-7xl mx-auto px-16 py-24 grid grid-cols-1 md:grid-cols-3 gap-32">
          {/* Logo / Mission */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/SVG/Badge Green L.svg"
                alt="StrongRoots Logo"
                width={70}
                height={70}
              />
              <span className="text-2xl ml-3 font-semibold">StrongRoots</span>
            </div>

            <p className="text-sm text-gray-300">
              Helping individuals and communities grow through coaching,
              mentorship, and transformational speaking.
            </p>
          </div>
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/media">Media</Link>
              </li>
              <li>
                <Link href="/support">Support Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>strongrootscoach@gmail.com</p>
              <p>(555) 123-4567</p>
              <p>
                123 Community Way
                <br />
                Springfield, USA
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 py-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} StrongRoots. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
