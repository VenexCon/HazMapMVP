import Image from "next/image";
import Container from "./container";


const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap " id="About">
        <div className="flex items-center w-full lg:w-1/2 p-4 ">
          <div className="max-w-2xl mb-8">
            <h1 className="py-2 text-2xl font-bold leading-snug tracking-tight text-blue-500 lg:text-2xl lg:leading-tight xl:text-2xl xl:leading-tight">
                Your All-in-One Hazard Insight Tool.
            </h1>
            <p className="py-2 text-lg leading-normal text-gray-500 lg:text-lg xl:text-lg">
              <span className="font-bold text-blue-500">HazMap</span>{" "}
              The free to use hazard identifier produces hazard identification reports for specific locations. Including flood risks, weather and historical data.
            </p>

            <p className=" py-2 text-lg leading-normal text-gray-500 lg:text-lg xl:text-lg">
              <span className="font-bold text-blue-500">HazMap</span>{" "}
              helps project managers to be informed of potential environmental hazards, before encountering them on-site. 
            </p>

            
          </div>
        </div>
        <div className="flex items-center justify-center w-full  lg:w-1/2">
          <div className="">
           {/*  <Image
              src={TBC},
              width="616"
              height="617"
              className={"object-cover, rounded-2xl"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            /> */}
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col p-4 justify-center">
          <div className="text-lg  text-gray-700 ">
            Over <span className="text-blue-500 font-bold">1000</span> searches for hazards!
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;