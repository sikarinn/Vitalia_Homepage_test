import Image from "next/image";
import feedback_back from "../public/assets/arrow/feedback_back.svg";
import feedback_next from "../public/assets/arrow/feedback_next.svg";
import avatar1 from "../public/assets/image/RobertImage.png";
import avatar2 from "../public/assets/image/VanseenaImage.png";
import comment from "../public/assets/arrow/comment.svg";
import star from "../public/assets/arrow/Star.svg";

export default function Feedback() {
  return (
    <div className="grid md:grid-cols-3">
      <div className=" bg-[#D1E4FF] px-[131px]">
        <div className="flex items-start relative flex-col  pt-[68px]">
          <div className=" bg-gradient-to-r from-[#D8BCAB] via-[#E2CAB6] to-[#C5A690] p-[1px]">
            <h3 className="uppercase font-OldStandardTT text-lg leading-6 bg-[#EDF4FF] py-2 px-6 tracking-[.25em]">
              feedback
            </h3>
          </div>
          <h1 className="pt-5">
            คามประทับใจ
            <br />
            จากคนไข้
          </h1>
        </div>

        <div>
          <div>
            <button className="bg-[#CCCCCC] bg-opacity-25 py-3 px-4 mt-9 mr-8">
              <Image src={feedback_back} />
            </button>

            <button className="bg-[#EDF4FF] bg-opacity-75 py-3 px-4 mt-9">
              <Image src={feedback_next} />
            </button>
          </div>

          <div></div>
        </div>
      </div>

      <div className="bg-feedback bg-[#274084] pb-[120px] col-start-2 col-span-3 flex items-center gap-6">
        <div className=" flex gap-6 pt-[120px] overflow-x-hidden ">
          <div className="bg-white px-12">
            <div className="flex gap-5 pt-12">
              <Image
                className="w-[68px] h-[68px]"
                src={avatar1}
                alt="Avatar_Robert"
              />
              <div>
                <div>
                  <h2 className="font-OldStandardTT leading-8 text-[#1C1C1C]">
                    Robert Davis
                  </h2>
                  <p className="text-sm leading-5 text-[#999999]">Patient</p>
                  <Image className="ml-[268px] -mt-10" src={comment} />
                </div>
              </div>
            </div>

            <div className="mt-5 border bg-[#CDCDCD]"></div>

            <p className="font-bold text-[#999999] pt-5">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate.
            </p>

            <Image className="pt-[14px] pb-6" src={star} />
          </div>

          <div className="bg-white px-12">
            <div className="flex gap-5 pt-12 ">
              <Image
                className="w-[68px] h-[68px]"
                src={avatar2}
                alt="Avatar_Robert"
              />
              <div>
                <div>
                  <h2 className="font-OldStandardTT leading-8 text-[#1C1C1C]">
                    Vanseena Adams
                  </h2>
                  <p className="text-sm leading-5 text-[#999999]">Patient</p>
                  <Image className="ml-[268px] -mt-10" src={comment} />
                </div>
              </div>
            </div>

            <div className="mt-5 border bg-[#CDCDCD]"></div>

            <p className="font-bold text-[#999999] pt-5">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate.
            </p>

            <Image className="pt-[14px] pb-6" src={star} />
          </div>
        </div>
      </div>
    </div>
  );
}
