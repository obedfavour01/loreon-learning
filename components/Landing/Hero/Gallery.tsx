import Image from "next/image"


const Gallery = () => {
  return (
    <div className="mx-32 
    xs:max-lg:mx-0
    xs:max-lg:gap-2
    mt-16 flex 
    xs:max-lg:overflow-hidden
    items-center 
    justify-center h-[500px] gap-6">

      <div className=" self-start mt-10">
        <div className="text-center mb-6">
          <h1 className="font-black  text-4xl">620+</h1>
          <p className="text-sm">Projects Completed</p>
        </div>
        <Image alt="first"
          src={"/assets/images/firstGall.jpg"}
          width={400}
          height={211}
          className=" w-[204px] h-[221px] object-cover rounded-lg"
        />
      </div>

      <div className=" flex flex-col gap-4">

        <div className="w-[226px] h-[160px] bg-bg_blue px-3 py-4 rounded-lg">
          <p className="text-xl text-white">
            Continuous improvement is better than delayed perfection
          </p>
        </div>

        <div>
          <Image alt="sec"
            src={"/assets/images/board.jpg"}
            width={500}
            height={235}
            className=" w-[226px] h-[235px] rounded-lg object-cover"
          />
        </div>
      </div>
      <div className=" rounded-lg h-full">
        <Image alt="mid"
          src={"/assets/images/midGall.jpg"}
          width={1000}
          height={500}
          className=" w-[259px] h-[500px] rounded-lg object-cover" />
      </div>
      <div className="">

        <div className=" flex flex-col gap-4">

          <div>
            <Image alt="fourth"
              src={"/assets/images/table.jpg"}
              width={400}
              height={240}
              className=" w-[226px] h-[240px] rounded-lg object-cover"
            />
          </div>

          <div className="w-[226px] h-[160px] bg-bg_orange px-3 py-4 rounded-lg">
            <p className="text-xl text-white">
              Continuous improvement is better than delayed perfection
            </p>
          </div>
        </div>
      </div>
      <div className="">

        <Image alt="last"
          src={"/assets/images/lastGall.jpg"}
          width={400}
          height={231}
          className="w-[204px] h-[221px] object-cover rounded-lg"

        />
      </div>

    </div>
  )
}

export default Gallery