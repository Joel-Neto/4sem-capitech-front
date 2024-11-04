import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

interface IHomeCardFrames {
  img: string;
  title: string;
  content: string;
  color: string;
}

export default function HomeCardFrames({
  img,
  color,
  content,
  title,
}: IHomeCardFrames) {
  return (
    <Card className={`py-4 ${color}`}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center basis-1/3">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={img}
          width={80}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 text-black text-center">
        <h3 className="font-headline text-xl font-bold my-1">{title}</h3>

        <p className="text-sm">{content}</p>
      </CardBody>
    </Card>
  );
}
