export default function Porto() {
    return (
        <section id="porto" className="pt-20">
            <div className="container mx-auto">
                <div className="w-full px-4">
                    <div className="w-auto mx-auto text-center mb-16 lg:max-w-[1000px]">
                        <h2 className="text-[40px] font-bold text-second">Recent <span className="text-primary">Project</span></h2>
                        <p className="mt-[16px] text-2xl font-normal text-second">I bring a passion for creating user-friendly experiences and a drive  design trends and technologies to deliver top-notch designs that meet needs and exceed their expectations</p>
                    </div>
                </div>

                <div className="w-full mt-[71px] flex flex-wrap justify-center">
                    <div className="p-8 w-[704px] h-auto ring-2 ring-primary rounded-3xl bg-boxproject">
                        <div className="flex justify-center">
                            <img src="src/img/p1.png" alt="porto1" width="auto" />
                        </div>
                        <h3 className="text-center text-second text-2xl font-semibold pt-3 mb-auto">Project 1</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}