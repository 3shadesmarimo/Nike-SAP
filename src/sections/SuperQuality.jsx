import Button from "../components/Button";
import shoe8 from "../assets/images/shoe8.svg";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col
    gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
            <h2 className='mt-10 font-palanquin text-8xl
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
            </h2>
            <p className='mt-4 lg:max-w-lg info-text
            '>Drippy Nike Shoes
            </p>

            <div className="mt-11">
              <Button label="View More"/>
            </div>    
      </div>

      <div className="flex-1 flex justify-center items-center">

        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className="object-contain"
        />

      </div>

    </section>
  )
}

export default SuperQuality