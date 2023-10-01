import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col
    gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
            <h1 className='mt-10 font-palanquin text-8xl
            max-sm:text-[72px] max-sm:leading-[82]'>
                <span className='xl:bg-white
                xl:whitespace-nowrap relative z-10 pr-10'>
                    The New New
                </span>
                <br />
                <span className='text-coral-red
                inline-block mt-3'>
                    Nike
                </span>
                Shoes
            </h1>
            <p className='font-montserrat
            text-slate-gray text-lg leading-8 mt-6 mb-10
            sm:max-w-sm
            '>Drippy Nike Shoes
            </p>
            <Button label="View More"/>
      </div>
    </section>
  )
}

export default SuperQuality