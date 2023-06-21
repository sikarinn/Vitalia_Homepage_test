import Image from "next/image";
import rightIcon from "../public/assets/arrow/rightIcon.svg";
import bannerIcon1 from "../public/assets/arrow/banner_Layer_1.svg";
import bannerIcon2 from "../public/assets/arrow/banner_Layer_2.svg";
import bannerIcon3 from "../public/assets/arrow/banner_Layer_3.svg";
import bannerIcon4 from "../public/assets/arrow/banner_Layer_4.svg";
import line from "../public/assets/arrow/Line.svg";

export default function Banner() {
  return (
    <div className="pt-[84px]">
      <div className="bg-banner bg-cover w-[1543px] h-[891px]">
        <div className="absolute pl-[227px] top-[184px]">
          <h1 className="leading-[74px] text-5xl">
            ให้คำปรึกษา <br />
            และดูแลสุขภาพ
          </h1>
          <h2 className="text-[#999999] font-medium mt-[16px] leading-[48px]">
            ทั้งด้านสุขภาพภายในและความงามภายนอก <br />
            ให้คุณดูเด็กลงและแลดูอ่อนเยาว์อยู่เสมอ
          </h2>

          <button className="flex bg-[#274084] text-white leading-[42px] items-center gap-4 text-2xl px-8 py-2 mt-9">
            รับคำปรึกษา
            <Image src={rightIcon} alt="icon" />
          </button>

          <div className="mt-[68px] w-[985px]">
            <div className="bg-white shadow-xl shadow-[#B9C8FF73] flex gap-20 px-16 py-7">
              {/* 1 */}
              <div className="flex flex-col items-center gap-3">
                <Image src={bannerIcon1} alt="bannerIcon" />
                <p className="text-center font-medium">
                  การดูแล <br />
                  และความเอาใจใส่
                </p>
              </div>
              <Image src={line} alt="line" />

              {/* 2 */}
              <div className="flex flex-col items-center gap-3">
                <Image src={bannerIcon2} alt="bannerIcon" />
                <p className="text-center font-medium">
                  การตรวจวิเคราะห์ <br />
                  ร่างกายระดับเซลล์
                </p>
              </div>
              <Image src={line} alt="line" />

              {/* 3 */}
              <div className="flex flex-col items-center gap-3">
                <Image src={bannerIcon3} alt="bannerIcon" />
                <p className="text-center font-medium">สเต็มเซลล์</p>
              </div>
              <Image src={line} alt="line" />

              {/* 4 */}
              <div className="flex flex-col items-center gap-3">
                <Image src={bannerIcon4} alt="bannerIcon" />
                <p className="text-center font-medium">
                  แอพลิเคชั่น <br />
                  ติดตามผล
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
