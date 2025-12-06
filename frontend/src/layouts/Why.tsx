
 const Why = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
        <h1 className="text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl text-center">Why use CVFORGE’s Resume Builder?</h1>
        <div>
            <ul className="w-[90%] mx-auto flex lg:flex-row flex-wrap gap-4 sm:gap-8 md:gap-12 lg:gap-16 items-center justify-center">
                <WhyItem title="Easy to use" description="Create your CV in minutes. No need to worry about formatting, and you can easily share your resume with your friends and colleagues." />
                <WhyItem title="Customizable" description="Choose from a variety of templates, colors, and fonts to create a resume that reflects your personality and style." />
                <WhyItem title="Mobile-friendly" description="Your resume is optimized for mobile devices, ensuring that it looks great and functions seamlessly on any device." />
                <WhyItem title="Secure" description="Your data is protected with end-to-end encryption, ensuring that your information remains private and secure." />
            </ul>
        </div>
    </div>
  ) 
}


function WhyItem(props: any) {
    return (
        <li className="flex  items-center gap-4 w-full lg:w-1/3 p-4 rounded-lg bg-purple-700 shadow-md text-white">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            </div>
            <div className="flex flex-col gap-2">
            <p className="text-lg font-medium">{props.title}</p>
            <p className="text-sm">{props.description}</p>
            </div>
        </li>
    )
}
export default Why