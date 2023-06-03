import Image from "next/image";
import "./loading.module.css";
import pfp from "./assets/banner_pic.webp";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <div className="pt-0 w-full h-full inline-block z-0 bg-light p-16">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1>home</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti reprehenderit animi distinctio sit velit similique soluta ut incidunt aperiam. Id est, possimus tempore culpa impedit doloremque optio aspernatur magnam iusto?</p>
          </div>
          <div className="w-1/2">
            <Image src={pfp} alt="picture" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}
