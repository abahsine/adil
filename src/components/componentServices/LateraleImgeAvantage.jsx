
import { GiCheckMark } from "react-icons/gi";

export default function LateraleImageAvantage({ textBolder, textMedium, font = "" }) {
  return (
    <ul
      className={`flex  gap-1 raleway text-[#555] text-lg leading-5 py-2  ${font}`}
    >
      <li className={`text-2xl text-[#0bdf0b] font-bold `}>
        <GiCheckMark />
      </li>
      <li className={font}>
        <span className={`font-bold ${font}`}>{textBolder}</span> {textMedium}
      </li>
    </ul>
  );
}