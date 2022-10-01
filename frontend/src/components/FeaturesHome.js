import React from "react";

function FeaturesHome() {
    return (
        <div>
            {/* <section className="container mx-auto px-6 p-10  bg-white-purple">
                <h2 className="text-4xl font-bold text-center text-lightmode-text-color mb-8">Features</h2>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2 bg-background-dark-color rounded-lg">
                        <h4 className="text-3xl text-bright-purple font-bold mb-3">Shareable</h4>
                        <p className="text-darkmode-text-color mb-8">Our DynaList Application is able to share shopping lists with anyone you choose to join your DynoPack.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="assets/health.svg" alt="Shareable" />
                    </div>
                </div>

                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <img src="assets/report.svg" alt="Editable" />
                    </div>
                    <div className="w-full md:w-1/2 pl-10">
                        <h4 className="text-3xl text-bright-purple font-bold mb-3">Editable</h4>
                        <p className="text-lightmode-text-color mb-8">Our DynaList Application can provide all Dynos the ability to modify, add, and delete their DynaLists or list items within for all their shopping needs.</p>
                    </div>
                </div>

                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl text-bright-purple font-bold mb-3">Mobile Friendly</h4>
                        <p className="text-lightmode-text-color mb-8">Our DynaList Application allows you to access your list data across all your mobile devices whether iOS, Android or Windows OS.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="assets/sync.svg" alt="Mobile Friendly" />
                    </div>
                </div>
            </section> */}
            <section id="features-section" className="p-8">     
                <h2 className=" text-4xl font-bold text-center text-background-dark-grey pb-6">Features</h2>           
                <div className="hover:text-white-purple p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 leading-6">
                    <div className="hover:bg-background-dark-grey group w-full flex flex-col rounded-lg leading-6 font-medium py-5">
                        <div className="mx-4">
                            <div className="mx-4">
                                <h4 className="text-3xl text-bright-purple font-bold mb-3">Shareable</h4>
                                <p className="text-background-dark-color group-hover:text-white-purple mb-8">Our DynaList Application is able to share shopping lists with anyone you choose to join your DynoPack.</p>
                            </div>
                        </div>
                    </div>
                    <div className="group w-full flex flex-col rounded-lg leading-6font-medium py-5">
                        <div className="mx-4">
                            <div className="mx-4">
                            </div>
                        </div>
                    </div>
                    <div className="group w-full flex flex-col rounded-lg leading-6 font-medium py-5">
                        <div className="mx-4">
                            <div className="mx-4">
                            </div>
                        </div>
                    </div>
                    <div className="hover:bg-background-dark-grey group w-full flex flex-col rounded-lg leading-6 font-medium py-5">
                        <div className="mx-4">
                            <div className="mx-4">
                                <h4 className="text-3xl text-bright-purple font-bold mb-3">Live Updates</h4>
                                <p className="text-background-dark-color group-hover:text-white-purple mb-8">Our DynaList Application can provide all Dynos the ability to modify, add, and delete their DynaLists or list items within for all their shopping needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="hover:bg-background-dark-grey group w-full flex flex-col rounded-lg leading-6 font-medium py-5">
                        <div className="mx-4">
                            <div className="mx-4">
                                <h4 className="text-3xl text-bright-purple font-bold mb-3">Mobile Friendly</h4>
                                <p className="text-background-dark-color group-hover:text-white-purple mb-8">Our DynaList Application allows you to access your list data across all your mobile devices whether iOS, Android or Windows OS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="group w-full flex flex-col rounded-lg leading-6 font-medium py-5">
                        <div className="mx-4">
                            <div className="mx-4">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesHome;