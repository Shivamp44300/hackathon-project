import Link from "next/link";

function Logo() {
  return (
    <div className=" text-2xl font-medium">
      <Link href="/">
        <img src="/gateway200.png" alt="gateway logo" className="w-24 h-24" />
      </Link>
    </div>
  );
}

export default Logo;
