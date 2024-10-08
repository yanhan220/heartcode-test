export default function Home() {
    return (
      <div className="bg-fixed bg-[url('/Drugs.jpg')] bg-no-repeat bg-cover ">
        <div className="bg-blue-500 opacity-40"></div>
        <div className="pt-20 flex flex-col justify-center ">  {/*bg-gray-500 opacity-25*/}
            <p className="text-white font-bold text-7xl text-center">Substance Abuse</p>
            <p className=" pt-2 text-white text-center">
                Is the use of a drug in amounts or by methods that are harmful to the individual or others, and differs from addiction. <br/>
                Many people with substance abuse problems are able to quit or can change their unhealthy behavior. <br/>
                Addiction, on the other hand, is a disease. It means you can’t stop using even when your condition causes you harm. <br/>
                There are various substances and drugs that acan be abused.</p>
                <br/><br/><br/>
            <p className="text-white font-bold text-3xl text-center">Alcohol</p>

            <p className="text-white text-center">
            Alcohol affects everyone differently. But if you drink too much and too often, your chance of an injury or accident goes up. <br/>
            Heavy drinking also can cause liver and other health problems or lead to a more serious alcohol disorder.<br/>
            If you’re a man and you drink more than four drinks on any day or more than 14 in a week, you’re drinking too much. <br/>
            For women, heavy drinking means more than three drinks in one day or more than seven drinks a week.
            </p>
            <br/><br/><br/>
            <p className="text-white font-bold text-3xl text-center"> Prescription and Over-the-Counter (OTC) Medicine </p>

            <p className="text-white text-center">
            Prescription drug abuse is the use of a prescription medicine in a way not intended by the prescriber. <br/> 
            Prescription drug abuse, also called prescription drug misuse, includes everything from taking a friend's <br/>
            prescription painkiller for your backache to inhaling or injecting ground-up pills to get high. <br/> 
            </p>

            <br/><br/><br/>
            <p className="text-white font-bold text-3xl text-center"> Thank you </p>

        </div>
      </div>
    );
}
