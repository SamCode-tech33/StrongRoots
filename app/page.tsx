import Link from "next/link";
import Image from "next/image";
import TestimonialSlider from "./components/TestimonialSlider";
import HeroBannerVideo from "./components/HeroBannerVideo";

const Home = () => {
  return (
    <div>
      <nav className="flex justify-between py-4 px-28 text-lg items-center">
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
          <Link className="nav-button px-2 py-1 rounded-lg" href="/audio">
            About
          </Link>
          <Link className="nav-button px-2 py-1 rounded-lg" href="/video">
            Services
          </Link>
          <Link className="nav-button px-2 py-1 rounded-lg" href="/about">
            Media
          </Link>
          <Link
            className="nav-button px-2 py-1 rounded-lg"
            href="/consultations"
          >
            Support Us
          </Link>
          <Link
            className="nav-button px-2 py-1 rounded-lg"
            href="/consultations"
          >
            Contact
          </Link>
          <Link
            className="nav-button px-2 py-1 rounded-lg flex items-center"
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
      <div className="h-[88vh] w-[88vw] m-auto">
        <HeroBannerVideo
          imageSrc="/PNG/SR Lockup Light@3x.png"
          videoSrc="/standin-promo.mp4"
          alt="Hero banner"
          fadeDurationMs={8000}
        />
      </div>
      <section className="flex justify-center my-16">
        <TestimonialSlider />
      </section>
      <section className="flex justify-center items-center">
        <div className="h-[50vh] w-[35vw] bg-taupe-600 rounded-lg mx-12 flex justify-center">
          Individual Life Coaching
        </div>
        <div className="h-[50vh] w-[35vw] bg-taupe-600 rounded-lg mx-12 flex justify-center">
          Group Coaching
        </div>
        <div className="h-[50vh] w-[35vw] bg-taupe-600 rounded-lg mx-12 flex justify-center">
          Public Speaking Events
        </div>
      </section>
    </div>
  );
};

export default Home;
