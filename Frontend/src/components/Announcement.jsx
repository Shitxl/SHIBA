import { Typewriter } from "react-simple-typewriter";

const Announcement = () => {
  return (
    <div className="!bg-[#e9acd9] !flex !justify-center !items-center !h-[30px] !text-white">
        <Typewriter
        words={["Shiba", "Beauty", "Everything", "on", "Discount", "20% off"]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
        </div>
  );
};

export default Announcement;
