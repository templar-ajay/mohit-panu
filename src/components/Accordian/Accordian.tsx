import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const data = [
  {
    title: "Group 1",
    servers: [
      { title: "server1", status: "online", address: "192.0.0.1" },
      { title: "server1", status: "online", address: "192.0.0.1" },
      { title: "server1", status: "online", address: "192.0.0.1" },
    ],
  },
  {
    title: "Group 2",
    servers: [
      { title: "server1", status: "online", address: "192.0.0.1" },
      { title: "server1", status: "online", address: "192.0.0.1" },
      { title: "server1", status: "online", address: "192.0.0.1" },
    ],
  },
  {
    title: "Group 3",
    servers: [
      { title: "server1", status: "online", address: "192.0.0.1" },
      { title: "server1", status: "online", address: "192.0.0.1" },
      { title: "server1", status: "online", address: "192.0.0.1" },
    ],
  },
];

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map(({ title, servers }, i) => {
        return (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent className="">
              {servers.map(({ title, status, address }, i) => {
                return (
                  <div
                    key={i}
                    className="block w-full bg-gray-200 rounded-sm my-1 px-2 py-1"
                  >
                    <span className="mx-2">{title}</span>|
                    <span className="mx-2">{status}</span>|
                    <span className="mx-2">{address}</span>|
                    <span className="mx-2">
                      <Button className="">
                        <Link href="#">View</Link>
                      </Button>
                    </span>
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
