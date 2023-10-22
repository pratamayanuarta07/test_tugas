import React from 'react';
import { Transition } from "@headlessui/react";
const About = () => {
    return (
        
        <div className="p-6 bg-white shadow-md rounded-lg">
      <Transition
          show={true}
          appear={true}
          enter="transition-opacity duration-5900"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-5900"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Tentang Kami</h1>
      <p className="text-gray-700">
        <span className="font-semibold">Nama:</span> Pratama Yanuarta
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Alamat:</span> Jl. Lunjuk Jaya Gg. Raglesia No. 88, Kota Palembang
      </p>
      <h2 className="text-2xl font-bold mt-4 text-blue-500">Pendidikan</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>
          <span className="font-semibold">SD:</span> SDN 4, Kota Palembang
        </li>
        <li>
          <span className="font-semibold">SMP:</span> SMPN 18, Kota Palembang
        </li>
        <li>
          <span className="font-semibold">SMA:</span> SMA Muhammadiyah 1, Kota Palembang
        </li>
        <li>
          <span className="font-semibold">Universitas:</span> Universitas Sriwijaya, Fakultas Ilmu Komputer, Jurusan Teknik Informatika
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-4 text-blue-500">Organisasi</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>
          <span className="font-semibold">SD:</span> SDN 4, Kota Palembang
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-4 text-blue-500">Pengalaman</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>
          <span className="font-semibold">Magang</span> di PT. Kereta Api Indonesia sebagai web developer selama 1 bulan 
        </li>
      </ul>
      </Transition>
    </div>
    );
}

export default About;
