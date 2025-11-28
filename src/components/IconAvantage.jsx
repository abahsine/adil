// IconAvantage.tsx
export function  IconAvantage({content , children}){
  return(
    <div className='flex flex-col  md:gap-8 gap-3 items-center ' >
              <div className='md:size-[80px] size-[70px] bg-[#E4BB39] flex justify-center items-center rounded-[50%] '>
               {children}
              </div>
              <h3 className='prussColor roboto font-medium md:text-xl text-md  whitespace-nowrap'>{content}</h3>

            </div>
  )
}


