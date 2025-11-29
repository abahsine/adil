import useOnScreen from "./utils/useScreen"
export default function Step ({number, title , content}){
   const [ref,isVisible] = useOnScreen({
    threshold : 0.2
  })

  return (
      <div  ref={ref}
      className={` flex flex-col items-center  gap-3 max-w-[276px]  text-[#00305A] text-lg py-0 px-2  fade-down ${isVisible? " visible" : ""}` }>
  <div className='bg-amber-400 montserrat w-16 h-16 rounded-[50%] flex text-4xl  font-bold items-center justify-center' >
    <p >{number}</p>
  </div>
  <h4 className='font-semibold  text-xl text-[#00305A]' >{title}</h4>
  <p className='text-center font-normal text-white-800 leading-[22px] tracking-tight roboto italic text-gray-600'>{content}</p>
</div>
  )
}