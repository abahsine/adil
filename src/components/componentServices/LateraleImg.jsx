
import LateraleImageAvantage from "./LateraleImgeAvantage";
import { CallToAction } from "../CallToAction";

export default function LateraleImg({ titre, paragraphe, blue = false, details,img }) {
  return (
    <section
      className={
        "py-4 py-4 flex lg:flex-row  flex-col-reverse lg:px-16  my-9 " +
        (blue ? "bg-[#000000e8] lg:flex-row-reverse sm:py-10 rounded-t-xl" : "")
      }
    >
      <div className="flex flex-col gap-4 my-10 lg:my-0 px-8 items-center lg:justify-center flex-1  ">
        <h2
          className={
            "montserrat lg:font-extrabold lg:text-3xl md:text-2xl text-3xl font-bold  md:leading-11 leading-9 lg:max-w-2/3 self-start " +
            (blue ? "text-[#fff] " : "prussColor")
          }
        
        >
          {titre}
        </h2>

        <div className="flex flex-col gap-2">
          <p
            className={
              "text-lg font-medium leading-6 raleway mb-2 " +
              (blue ? "text-white" : "text-[#555] ")
            }
          >
            {" "}
            {paragraphe}
          </p>

          {details.map((i, index) => {
            return (
              <LateraleImageAvantage
                key={index}
                textBolder={i.textBolder}
                textMedium={i.textMedium}
                font={blue ? "text-white" : ""}
              />
            );
          })}
        </div>

        <CallToAction
         
        />
      </div>
      <div className="flex justify-center  flex-1 ">
        <img
          src={img}
          alt="Client a  recu sa voiture"
          className="w-[90%] xl:w-[90%] max-w-[800px] max-h-[550px] rounded-2xl"
        />
      </div>
    </section>
  );
}