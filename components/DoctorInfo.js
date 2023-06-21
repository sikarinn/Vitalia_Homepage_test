import Image from "next/image";
import doctorImg from "../public/assets/image/doctor.png";

export default function DoctorInfo() {
  return (
    <div className="px-[132px] py-20 grid md:grid-cols-2 gap-36">
      <Image src={doctorImg} alt="doctorImg" />
      <div>
        <h1 className="leading-[56px] mt-[-12px]">แพทย์ผู้บริหาร</h1>
        <h2 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#D8BCAB] via-[#D8BCAB] to-[#C08E7B] pt-2">
          หมอแชมป์ ( พญ.นภาพร ธรรมพัฒนากูล )
        </h2>

        <div className="pt-10">
          <div class="overflow-y-scroll overflow-hidden h-[500px]">
            {/* 1 */}
            <div className="flex">
              <div className="grid grid-cols-10">
                <div className="w-2 h-2 rounded-full mt-2 bg-gradient-to-r from-[#D8BCAB] via-[#E2CAB6] to-[#C5A690]"></div>
                <p className="text-lg col-start-2 col-span-10">
                  MSc Dermatology Skills and Treatment , Hertfordshire
                  University, United kingdom
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex pt-16">
              {/* <div className="border-l-4 h-[640px]"></div> */}
              <div className="grid grid-cols-10">
                <div className="w-2 h-2 rounded-full mt-2 bg-gradient-to-r from-[#D8BCAB] via-[#E2CAB6] to-[#C5A690]"></div>
                <p className="text-lg col-start-2 col-span-10">
                  10 years Experiences in Filler, Mesotherapy
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex pt-16">
              {/* <div className="border-l-4 h-[640px]"></div> */}
              <div className="grid grid-cols-10">
                <div className="w-2 h-2 rounded-full mt-2 bg-gradient-to-r from-[#D8BCAB] via-[#E2CAB6] to-[#C5A690]"></div>
                <p className="text-lg col-start-2 col-span-10">
                  10 years Experiences in Q-switch ND Yag Laser, Ulthera,
                  Fractional Laser & Radiofrequency (Fractora, Viva, Finescan,
                  Ultradeep), Pulse Dye Laser (V-beam), IPL (Intense Pulse
                  Laser), CO2 Laser, Thermage
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex pt-16">
              {/* <div className="border-l-4 h-[640px]"></div> */}
              <div className="grid grid-cols-10">
                <div className="w-2 h-2 rounded-full mt-2 bg-gradient-to-r from-[#D8BCAB] via-[#E2CAB6] to-[#C5A690]"></div>
                <p className="text-lg col-start-2 col-span-10">
                  Certificate of Masterclass of Injectables for Facial
                  Enhancement and Pigmented lesion and Tattoos in Laser Europe
                  Conference, Amsterdam, Netherlands
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="flex pt-16">
              {/* <div className="border-l-4 h-[640px]"></div> */}
              <div className="grid grid-cols-10">
                <div className="w-2 h-2 rounded-full mt-2 bg-gradient-to-r from-[#D8BCAB] via-[#E2CAB6] to-[#C5A690]"></div>
                <p className="text-lg col-start-2 col-span-10">
                  Certificate of Attended in GALAA (Global association of
                  Leaders in Aesthetics & Anatomy), Medical Conference,
                  Chulalongkorn University, Thailand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
