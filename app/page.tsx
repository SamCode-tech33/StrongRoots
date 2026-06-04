import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <nav className="flex justify-between py-6 px-12 text-2xl items-center">
        <Link href="/" className="flex justify-center items-center">
          {" "}
          <Image
            src="/SVG/Badge Green L.svg"
            alt="image missing"
            width={80}
            height={80}
          />{" "}
          <span>StrongRoots</span>
        </Link>
        <Link href="/audio">Pod-Casts</Link>
        <Link href="/video">Vidoes</Link>
        <Link href="/about">About</Link>
        <Link href="/consultations">Consultations</Link>
        <Link href="/login">Sign-up / Login</Link>
      </nav>
      <div className="w-full flex justify-center">
        <Image
          src="/PNG/Wordmark Green.png"
          alt="image missing"
          width={1500}
          height={1500}
        ></Image>
      </div>
    </div>
  );
};

export default Home;
