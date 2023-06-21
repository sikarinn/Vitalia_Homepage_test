import Image from "next/image";
import rightIcon from "../public/assets/arrow/rightIcon2.svg";

export default function ContactLine() {
  return (
    <div id="contactLine" className="bg-[#D1E4FF] py-[46px] px-[227px]">
      <div className="text-center">
        <h1 className="text-[40px]">ตรวจเช็คสุขภาพจากไลฟ์สไตล์คุณ</h1>
        <p className="font-bold text-[#999999]">
          เริ่มขั้นตอนการวิเคราะห์สุขภาพของคุณได้ที่นี่
        </p>

        <div className="flex items-center justify-center">
          <button className="flex font-bold bg-white leading-[42px] items-center gap-4 text-2xl px-[22px] py-2 mt-10 shadow-[0_0_54px_rgba(91,157,255,0.35)]">
            เริ่มการตรวจ
            <Image src={rightIcon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
