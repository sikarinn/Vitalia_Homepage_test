import Image from "next/image";
import service_1 from "../public/assets/image/service1.png";
import service_2 from "../public/assets/image/service2.png";
import service_3 from "../public/assets/image/service3.png";
import rightIcon from "../public/assets/arrow/rightIcon2.svg";

export default function Service() {
  return (
    <div id="service" className="text-center pt-[46px]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative bg-gradient-to-r from-[#D8BCAB] via-[#E2CAB6] to-[#C5A690] p-[1px]">
          <h3 className="uppercase font-OldStandardTT text-lg leading-6 bg-[#FAFCFF] py-2 px-6 tracking-[.25em]">
            Our Service
          </h3>
        </div>
        <h1 className="pt-5">บริการของเรา</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6 pt-14 px-[227px]">
        <div className="bg-[#EDF4FF]">
          <Image className="opacity-[45%]" src={service_1} alt="serviceImage" />
          <p className="font-bold text-xl py-4">
            โปรแกรมการฟื้นฟูร่างกาย
            <br />
            ระดับเซลล์
          </p>
        </div>

        <div className="bg-[#EDF4FF]">
          <Image className="opacity-[45%]" src={service_2} alt="serviceImage" />
          <p className="font-bold text-xl pb-4 pt-7">ศูนย์เวชศาสตร์ชะลอวัย</p>
        </div>

        <div className="bg-[#EDF4FF]">
          <Image className="opacity-[45%]" src={service_3} alt="serviceImage" />
          <p className="font-bold text-xl pb-4 pt-7">
            นวัตกรรมทางด้านสเต็มเซลล์
          </p>
        </div>
      </div>

      <div className="flex justify-center pb-12">
        <button className="flex items-center text-lg pt-10 gap-4">
          ดูบริการทั้งหมด
          <Image className="-[#274084]" src={rightIcon} alt="icon" />
        </button>
      </div>
    </div>
  );
}
