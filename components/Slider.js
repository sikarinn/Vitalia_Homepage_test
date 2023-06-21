import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import rectangle from "../public/assets/arrow/Rectangle1307.svg";

export default function Banner() {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      showStatus={false}
      interval={1800}
      className="relative w-full px-[131px] py-[68px]"
    >
      {/* 1 */}
      <div className="bg-slider1 bg-cover h-[663px]">
        <div className="pl-[68px] pt-20">
          <div className="w-[350px] text-left">
            <h1 className=" text-4xl leading-[56px]">
              ฟื้นฟูสุขภาพ
              <br />
              ด้วยศาสตร์ชะลอวัย
            </h1>
            <div className="relative pt-4">
              <Image className="h-10 pr-32" src={rectangle} />
              <div className="absolute top-4 left-3">
                <p className="font-OldStandardT font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#D8BCAB] via-[#D8BCAB] to-[#C08E7B] pt-2">
                  Perfect Stem Cell Program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="bg-slider2 bg-cover h-[663px]">
        <div className="flex items-center justify-center text-center pt-[340px]">
          <h1 className="font-AlegreyaSansSC text-[200px] text-transparent bg-clip-text bg-gradient-to-r from-[#D8BCAB] via-[#D8BCAB] to-[#C08E7B]">
            "
          </h1>
          <h1 className="text-3xl leading-[40px] text-white pt-16">
            ดูแลรักษาด้วยแพทย์เฉพาะทาง <br />
            <span className="text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#D8BCAB] via-[#D8BCAB] to-[#C08E7B]">
              ชำนาญการด้านศาสตร์ชะลอวัย
            </span>
          </h1>
          <h1 className="font-AlegreyaSansSC text-[200px] text-transparent bg-clip-text bg-gradient-to-r from-[#D8BCAB] via-[#D8BCAB] to-[#C08E7B]">
            "
          </h1>
        </div>
      </div>

      {/* 3 */}
      <div className="bg-slider3 bg-cover h-[663px]">
        <div className="pl-[68px] pt-20">
          <div className="w-[350px]">
            <h1 className="text-4xl leading-[56px]  text-center">
              มุ่งเน้น
              <br />
              การรักษาที่ต้นเหตุ
              <br />
              เพื่อคืนความอ่อนเยาว์ให้ผิวพรรณ
            </h1>
            <p className="text-xl text-center pt-8">
              ที่ปรึกษาด้านสุขภาพและความงามของคุณ
              <br />
              ให้คุณสวยสมวัยแลดูอ่อนเยาว์อยู่เสมอ
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
