import Image from "next/image";
import CardDestinasi from "~/components/card/card-destinasi";

const destinasi = () => {
  const data = [
    {
      title: "ASHFA LEBAH",
      description: `<p className='mb-2'>Ashfa Madu Borobudur jadi salah satu sentra penjualan madu kaliandra di kawasan Candi Borobudur. Wisatawan yang berkunjung di tempat itu juga bisa melihat langsung peternakan lebah.</p>  <p className='mb-2'>Ashfa Madu Borobudur jadi salah satu sentra penjualan madu kaliandra di kawasan Candi Borobudur. Wisatawan yang berkunjung di tempat itu juga bisa melihat langsung peternakan lebah.</p>  <p className='mb-2'> Liburan sambil menambah wawasan baru merupakan kegiatan yang sangat menguntungkan khususnya bagi anak-anak. Setelah merasakan penatnya bekerja, maka bisa luangkan waktu bersama keluarga untuk mengunjungi kawasan Magelang yang penuh dengan cerita ini.</p>  `,
      image: "/assets/destinasi/card-1.png",
    },
    {
      title: "BATIK TULIS WANUREJO",
      description:
        " <p className='mb-2'>Ashfa Madu Borobudur jadi salah satu sentra penjualan madu kaliandra di kawasan Candi Borobudur. Wisatawan yang berkunjung di tempat itu juga bisa melihat langsung peternakan lebah.</p>  <p className='mb-2'>Ashfa Madu Borobudur jadi salah satu sentra penjualan madu kaliandra di kawasan Candi Borobudur. Wisatawan yang berkunjung di tempat itu juga bisa melihat langsung peternakan lebah.</p>  <p className='mb-2'> Liburan sambil menambah wawasan baru merupakan kegiatan yang sangat menguntungkan khususnya bagi anak-anak. Setelah merasakan penatnya bekerja, maka bisa luangkan waktu bersama keluarga untuk mengunjungi kawasan Magelang yang penuh dengan cerita ini.</p>",
      image: "/assets/destinasi/card-2.png",
    },
    {
      title: "SENTRA GERBAH NGLIPOH",
      description:
        " <p className='mb-2'>Ashfa Madu Borobudur jadi salah satu sentra penjualan madu kaliandra di kawasan Candi Borobudur. Wisatawan yang berkunjung di tempat itu juga bisa melihat langsung peternakan lebah.</p>  <p className='mb-2'>Ashfa Madu Borobudur jadi salah satu sentra penjualan madu kaliandra di kawasan Candi Borobudur. Wisatawan yang berkunjung di tempat itu juga bisa melihat langsung peternakan lebah.</p>  <p className='mb-2'> Liburan sambil menambah wawasan baru merupakan kegiatan yang sangat menguntungkan khususnya bagi anak-anak. Setelah merasakan penatnya bekerja, maka bisa luangkan waktu bersama keluarga untuk mengunjungi kawasan Magelang yang penuh dengan cerita ini.</p>",
      image: "/assets/destinasi/card-3.png",
    },
    {
      title: "GUBUK KOPI KARANGREJO",
      description:
        " <p className='mb-2'>Ashfa Madu Borobudur jadi salah satu sentra penjualan madu kaliandra di kawasan Candi Borobudur. Wisatawan yang berkunjung di tempat itu juga bisa melihat langsung peternakan lebah.</p>  <p className='mb-2'>Ashfa Madu Borobudur jadi salah satu sentra penjualan madu kaliandra di kawasan Candi Borobudur. Wisatawan yang berkunjung di tempat itu juga bisa melihat langsung peternakan lebah.</p>  <p className='mb-2'> Liburan sambil menambah wawasan baru merupakan kegiatan yang sangat menguntungkan khususnya bagi anak-anak. Setelah merasakan penatnya bekerja, maka bisa luangkan waktu bersama keluarga untuk mengunjungi kawasan Magelang yang penuh dengan cerita ini.</p>",
      image: "/assets/destinasi/card-4.png",
    },
  ];
  return (
    <div className="mt-20 mb-40">
      <h1 className="text-center text-[128px] leading-[128px] font-bold text-[#2E4F4F] mb-10">WISATA EDUKASI</h1>
      <div className="grid grid-cols-2 gap-[40px]">
        <img className="col-span-1" src="/assets/destinasi/destinasi-1.png"  alt="Picture of the author" />
        <img className="col-span-1" src="/assets/destinasi/destinasi-2.png"  alt="Picture of the author" />
      </div>
      <p className="mt-[65px] text-center text-[18px] leading-[27px] text-[#1A093CCC]">
        Siapa sih yang tidak kenal dengan Candi Borobudur? Salah satu ikon Indonesia yang terkenal di mata dunia ini ternyata memiliki spot wisata edukasi yang seru dan menyenangkan. Saat mengunjungi wisata edukasi Borobudur, maka Anda
        bersama dengan keluarga bisa bermain sambil belajar nantinya. Para pengunjung bisa menemukan spot edukasi di area dekat Candi Borobudur dengan budget yang sangat terjangkau. Jadi sambil membuat Borobudur temple video, Anda bisa
        mengajak anak untuk mengunjungi spot edukasi sambil memperkenalkannya dengan hal-hal baru yang ada di sekitar wisata. Liburan sambil menambah wawasan baru merupakan kegiatan yang sangat menguntungkan khususnya bagi anak-anak.
        Setelah merasakan penatnya bekerja, maka bisa luangkan waktu bersama keluarga untuk mengunjungi kawasan Magelang yang penuh dengan cerita ini.
      </p>
      <div className="mt-10 flex flex-col gap-y-10">
        {data.map((val, index) => (
          <CardDestinasi title={val.title} description={val.description} imageUrl={val.image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default destinasi;
