import useOnScreen from "./utils/useScreen"
export default function Step ({number, title , content}){
   const [ref,isVisible] = useOnScreen({
    threshold : 0.1
  })

  return (
      <div  ref={ref}
      className={` flex flex-col items-center  gap-5 max-w-[276px] text-[#00305A] text-lg py-4 px-2 h-[350px] fade-down ${isVisible? " visible" : ""}` }>
  <div className='bg-[#E4BB39] montserrat w-16 h-16 rounded-[50%] flex text-4xl  font-bold items-center justify-center' >
    <p >{number}</p>
  </div>
  <h4 className='font-semibold  text-xl text-[#00305A]' >{title}</h4>
  <p className='text-center font-normal text-white-800 text-gray-800'>{content}</p>
</div>
  )
}