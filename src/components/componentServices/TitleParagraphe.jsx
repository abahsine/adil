

export default function TitleParagraphe({ titre, slogan }) {
  return (
    <div className="flex flex-col montserrat sm:text-[1.3rem ] justify-center items-center text-[1rem] sm:text py-6">
      <p className="text-[#555] font-medium leading-9 ">{slogan}</p>
      <h2 className="sm:text-[2rem] text-[1.8rem] font-extrabold prussColor py-0 leading-9">
        {titre}
      </h2>
    </div>
  );
}