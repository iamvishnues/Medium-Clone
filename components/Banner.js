import Image from "next/image";
import MediumBanner from "../static/mediumbg.png";
const styles = {
  accentedButton: "bg-black text-white rounded-full px-6 py-3 ",
  content: "max-w-7xl flex justify-between flex-1 items-center py-4",
  wrapper:
    "h-max-[10rem] flex item-center justify-center  bg-[#FCC017] border-y border-black",
};

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-5 px-10 flex-[3]">
          <h1
            className="max-w-xl text-[6rem]
  font-mediumSerif"
          >
            Stay Curious.
          </h1>
          <h3 className="text-2xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>
          <button className={styles.accentedButton}>Start reading</button>
        </div>
        <Image
          className="hidden h-32 md:inline-flex object-contain flex-1"
          src={MediumBanner}
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;
