import img1 from "../img/k1.png"
import img2 from "../img/k2.png"
import img3 from "../img/k3.png"

export default function Project () {
    return (
        <section id="project" className="pt-20 px-[122px]">
        <div className="container mx-auto">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className="text-2xl font-semibold text-second">My Services</h4>
                <h2 className="text-[40px] font-bold text-primary">What I Do</h2>
                </div>
            </div>
            
            
            <div className="w-full mt-[71px] flex flex-wrap mx-auto justify-center">
                <div className="p-8 w-[354px] ring-2 ring-primary rounded-3xl mr-14 mb-10">
                    <div className="flex justify-center">
                        <img src={img1} alt="Fullstack" width="195" className="mb-11 " />
                    </div>
                    <h3 className="text-center text-second text-2xl font-semibold mb-11">Fullstack Web Dev.</h3>
                    <p className="text-xl text-second font-light text-center">strive to create visually impact designs that effectively communicate ,messages & meet their unique needs.</p>
                </div>
                <div className="p-8 w-[354px] ring-2 ring-primary rounded-3xl mr-14 mb-10">
                    <div className="flex justify-center">
                        <img src={img2} alt="Fullstack" width="195" className="mb-11 " />
                    </div>
                    <h3 className="text-center text-second text-2xl font-semibold mb-11">Front-end Web Dev.</h3>
                    <p className="text-xl text-second font-light text-center">strive to create visually impact designs that effectively communicate ,messages & meet their unique needs.</p>
                </div>
                <div className="p-8 w-[354px] ring-2 ring-primary rounded-3xl mr-14 mb-10">
                    <div className="flex justify-center">
                        <img src={img3} alt="Fullstack" width="195" className="mb-11 " />
                    </div>
                    <h3 className="text-center text-second text-2xl font-semibold mb-11">Back-end Web Dev.</h3>
                    <p className="text-xl text-second font-light text-center">strive to create visually impact designs that effectively communicate ,messages & meet their unique needs.</p>
                </div>
            </div>
              
        </div>
        </section>

    
    )
}