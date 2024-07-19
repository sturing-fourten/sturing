import { ICONS } from "@/constant/icons";
import { GuestSection, UserSection } from "./sideBar/userSection";
import { FooterLinks, NavigationLinks } from "./sideBar/links";
import { EditProfileType } from "@/types/editProfile";

interface SideBarProps {
  sideBar: boolean;
  setSideBar: (value: boolean) => void;
  user: EditProfileType | null;
}

export default function SideBar({ sideBar, setSideBar, user }: SideBarProps) {
  const handleSidebarToggle = () => setSideBar(!sideBar);

  const userSection = user ? <UserSection user={user} /> : <GuestSection />;

  return (
    <div
      className={`w-[323px] h-screen flex flex-col gap-[40px] pt-[40px] px-6 pb-56 bg-white fixed sm:absolute top-0 left-0 z-overlay transition-transform duration-500 will-change-transform ease-in-out transform overflow-scroll sm:overflow-visible scrollbar-hide ${
        sideBar ? "translate-x-0" : "-translate-x-full"
      }`}>
      <button className="flex justify-end" onClick={handleSidebarToggle}>
        <img src={ICONS.close.src} alt={ICONS.close.alt} width={15} height={15} />
      </button>
      {userSection}
      <NavigationLinks user={user} />
      <FooterLinks user={user} />
    </div>
  );
}
