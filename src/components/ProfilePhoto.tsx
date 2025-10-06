import { useTheme } from "@/components/ThemeProvider";

const ProfilePhoto = () => {
  const { theme } = useTheme();

  const getImage = () => {
    if (theme === "dark") return "/images/profile-dark.jpg";
    if (theme === "beach") return "/images/profile-beach.jpg";
    return "/images/profile-light.jpg"; // default/light
  };

  return (
    <div className="flex justify-center mt-10">
      <img
        src={getImage()}
        alt="Profile"
        className="
          w-40 h-40 
          sm:w-48 sm:h-48 
          lg:w-56 lg:h-56 
          rounded-full shadow-xl object-cover 
          border-4 border-primary 
          transition-transform duration-300 hover:scale-105
        "
      />
    </div>
  );
};

export default ProfilePhoto;
