import Image from "next/image";
import blog_1 from "../public/assets/image/blog1.png";
import blog_2 from "../public/assets/image/blog2.png";
import blog_3 from "../public/assets/image/blog3.png";
import rightIcon from "../public/assets/arrow/rightIcon2.svg";

export default function Blog() {
  return (
    <div id="blog" className="bg-blog bg-[#EDF4FF] pt-[68px]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative bg-gradient-to-r from-[#D8BCAB] via-[#E2CAB6] to-[#C5A690] p-[1px]">
          <h3 className="uppercase font-OldStandardTT text-lg leading-6 bg-[#EDF4FF] py-2 px-6 tracking-[.25em]">
            Our Blog
          </h3>
        </div>
        <h1 className="pt-5">บทความแนะนำ</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-3 pt-9 px-[131px]">
        {/* 1 */}
        <div className="bg-white">
          <Image src={blog_1} alt="blogImage" />
          <div className="p-7">
            <p className="font-OldStandardTT font-bold text-sm text-[#5B9DFF] bg-[#EDF4FF] absolute px-5 py-2 shadow-sm shadow-[0_0_28px_rgba(0, 0, 0, 0.6)]">
              Health
            </p>
            <p className="font-medium text-lg pt-14">
              Jokowi Pakai Kemeja Putih <br />
              'Indonesia Maju' di Hari Reshuffle
              <br />
              Kabinet
            </p>
            <p className="text-sm underline text-[#999999] pt-3 text-right">
              เพิ่มเติม
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="bg-white">
          <Image src={blog_2} alt="blogImage" />
          <div className="p-7">
            <p className="font-OldStandardTT font-bold text-sm text-[#73BCBC] bg-[#E7F3F3] absolute px-5 py-2 shadow-sm shadow-[0_0_28px_rgba(0, 0, 0, 0.6)]">
              Health
            </p>
            <p className="font-medium text-lg pt-14">
              Jokowi Pakai Kemeja Putih <br />
              'Indonesia Maju' di Hari Reshuffle
              <br />
              Kabinet
            </p>
            <p className="text-sm underline text-[#999999] pt-3 text-right">
              เพิ่มเติม
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="bg-white">
          <Image src={blog_3} alt="blogImage" />
          <div className="p-7">
            <p className="font-OldStandardTT font-bold text-sm text-[#5B9DFF] bg-[#EDF4FF] absolute px-5 py-2 shadow-sm shadow-[0_0_28px_rgba(0, 0, 0, 0.6)]">
              Health
            </p>
            <p className="font-medium text-lg pt-14">
              Jokowi Pakai Kemeja Putih <br />
              'Indonesia Maju' di Hari Reshuffle
              <br />
              Kabinet
            </p>
            <p className="text-sm underline text-[#999999] pt-3 text-right">
              เพิ่มเติม
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-12">
        <button className="flex items-center text-lg pt-10 gap-4">
          ดูบทความทั้งหมด
          <Image className="-[#274084]" src={rightIcon} alt="icon" />
        </button>
      </div>
    </div>
  );
}
