import Image from "next/image";

function ProfileBox({ userData }) {
  return (
    <div className="mt-16">
      <div className="w-[300px] h-[300px] relative overflow-hidden ">
        <Image
          src={`${userData?.profile_photo || "/avatar.jpg"}`}
          alt="avatar image"
          fill
          className="rounded-lg z-10 hover:scale-105"
        />
        <div className="z-50 absolute w-full bottom-0 bg-slate-600 backdrop-blur-xl bg-white/40 px-2 flex items-center justify-between ">
          <div>
            <h4 className="text-xl ">{userData?.name}</h4>
            <p className="">{userData?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
