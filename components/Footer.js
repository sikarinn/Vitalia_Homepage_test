import Image from "next/image";
import Logo from "../public/assets/image/logo.svg";

export default function Footer() {
  return (
    <div className="pl-[131px] pr-[30px] text-[#999999] pt-14">
      <div className="grid grid-cols-8">
        <Image
          className="col-start-1 col-span-2 w-[160px]"
          src={Logo}
          alt="logo"
        />
        <div>
          <p className="text-lg font-bold pb-6">หน้าหลัก</p>
          <div className="text-sm">
            <p className="pb-3">บริการของเรา</p>
            <p className="pb-3">ตรวจเช็คสุขภาพ</p>
            <p className="pb-3">เกี่ยวกับแพทย์ผู้บริหาร</p>
            <p className="pb-3">บทความแนะนำ</p>
            <p className="pb-3">วีดีโอความรู้</p>
            <p>ความประทับใจจาากคนไข้</p>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold pb-6">เกี่ยวกับ</p>
          <div className="text-sm">
            <p className="pb-3">เกี่ยวกับคลินิค</p>
            <p>เกี่ยวกับหมอแชมป์</p>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold pb-12"></p>
          <div className="text-sm">
            <p>ทีมงานทั้งหมด</p>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold pb-6">ตรวจเช็คสุขภาพ</p>
          <div className="text-sm">
            <p className="pb-3">คำถามเบื้องต้น</p>
            <p className="pb-3">ผลตรวจ</p>
            <p>แนะนำโปรแกรม</p>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold pb-6">บทความ</p>
          <div className="text-sm">
            <p className="pb-3">บทความแนะนำ</p>
            <p>วิดิโอความรู้</p>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold pb-6">ติดต่อ</p>
          <div className="text-sm">
            <p className="pb-3">ช่องทางติดต่อ</p>
            <p>แผนที่</p>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-10 grid grid-cols-2">
        <p className="text-[13px]">
          All rights Reserved © Vitalia Wellness Clinic, 2023
        </p>
        <p className="text-[13px] text-right">Privacy Policy</p>
      </div>
    </div>
  );
}
