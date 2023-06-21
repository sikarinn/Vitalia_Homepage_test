import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import ContactLine from "@/components/ContactLine";
import DoctorInfo from "@/components/DoctorInfo";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Slider from "@/components/Slider";
import Video from "@/components/Video";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vitalia Wellness Clinic</title>
        <meta name="description" content="Vitalia Homepage" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Banner />
      <Service />
      <ContactLine />
      <DoctorInfo />
      <Blog />
      <Slider />
      <Video />
      <Feedback />

      <Footer />
    </div>
  );
}
