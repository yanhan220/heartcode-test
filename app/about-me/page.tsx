import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Catphoto from "@/app/assets/cat.jpg";
import Dogphoto from "@/app/assets/dog.jpg";
import Catglasses from "@/app/assets/glasses.jpg";
import Cathiding from "@/app/assets/hiding.jpg";
import Catlooking from "@/app/assets/looking.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function AboutMe() {
  return (
    <div className="p-5">
        Hello world this is the about me route
        <Card>
            <CardHeader>
                <CardTitle>
                    Yan Han
                </CardTitle>
                <CardDescription>
                    I am struggling
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Yan Han
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Computer Science</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>Crying</div>
            </CardContent>
        </Card>

        <Card className="">
            <style></style>
            <CardContent>
            <Carousel>
                    <CarouselContent>
                        <CarouselItem><Image src={Catphoto} alt="1" width={700} height={700}/></CarouselItem>
                        <CarouselItem><Image src={Dogphoto} alt="1" width={370} height={370}/></CarouselItem>
                        <CarouselItem><Image src={Cathiding} alt="1" width={370} height={370}/></CarouselItem>
                        <CarouselItem><Image src={Catglasses} alt="1" width={500} height={500}/></CarouselItem>
                        <CarouselItem><Image src={Catlooking} alt="1" width={370} height={370}/></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </CardContent>
        </Card>
    </div>
  );
}