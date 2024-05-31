import Image from "next/image"
import bcg from "../../public/bcg.png"
import img1 from "../../public/img1.png"
import dr from "../../public/dr.png"

const Hero = () => {
    return (
        <div className="relative">
            <div className="absolute bg-[#066AABE5] w-full h-[791px] opacity-90 px-48 pt-24 flex justify-around">
                <div className="w-1/3">
                    <Image src={img1} alt="24/7" height={200} width={200} className="m-auto"/>
                    <p className="text-white text-[100px]">We Care </p>
                    <p className="text-[#C3ED11] text-[100px]"> We Heal </p>
                    <p className="text-white text-[100px]">We Lead</p>
                </div>
                <div className="w-2/3 flex justify-center">
                    <Image src={dr} alt="doctor" height={500} width={500} className="h-[741px] w-[741px] relative top-[-50px] left-[75px]"/>
                </div>
            </div>
            <Image src={bcg} alt="background image" height={1440} width={792}
                className="w-full object-cover"
            />
        </div>
    )
}

export default Hero