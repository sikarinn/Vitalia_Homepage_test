import Image from "next/image";
import videoImg from "../public/assets/image/videoImg.png";
import rightIcon from "../public/assets/arrow/rightIcon2.svg";
import playVideo from "../public/assets/image/playVideo.svg";

export default function Video() {
  return (
    <div className="bg-[#EDF4FF] pt-[68px]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative bg-gradient-to-r from-[#D8BCAB] via-[#E2CAB6] to-[#C5A690] p-[1px]">
          <h3 className="uppercase font-OldStandardTT text-lg leading-6 bg-[#EDF4FF] py-2 px-6 tracking-[.25em]">
            Our Video
          </h3>
        </div>
        <h1 className="pt-5">วีดีโอความรู้</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-[52px] pt-12 px-[131px]">
        {/* 1 */}
        <div className="bg-white">
          <div className="flex justify-center items-center ">
            <Image className="w-[368px] " src={videoImg} alt="videoImage" />
            <div class="w-[600px] h-[296px] bg-[#274084] opacity-[45%] absolute"></div>
            <div class="w-32 h-32 bg-white/25 absolute rounded-full "></div>
            <Image src={playVideo} className="absolute ml-4" />
          </div>
          <div className="p-7 text-center bg-white px-12 pb-16">
            <h1 className="text-3xl pt-4">Perfect Stem Cell Program</h1>
            <p className="text-lg text-[#999999] pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br /> Quisque placerat Convallis felis vitae tortor augue.
              <br /> Velit nascetur massa in.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="bg-white">
          <div className="flex justify-center items-center ">
            <Image className="w-[368px] " src={videoImg} alt="videoImage" />
            <div class="w-[600px] h-[296px] bg-[#274084] opacity-[45%] absolute"></div>
            <div class="w-32 h-32 bg-white/25 absolute rounded-full "></div>
            <Image src={playVideo} className="absolute ml-4" />
          </div>
          <div className="p-7 text-center bg-white px-12 pb-16">
            <h1 className="text-3xl pt-4">Perfect Stem Cell Program</h1>
            <p className="text-lg text-[#999999] pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br /> Quisque placerat Convallis felis vitae tortor augue.
              <br /> Velit nascetur massa in.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-12">
        <button className="flex items-center text-lg pt-10 gap-4">
          ดูวีดีโอทั้งหมด
          <Image className="-[#274084]" src={rightIcon} alt="icon" />
        </button>
      </div>
    </div>
  );
}
