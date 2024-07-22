"use client";
import { useState, useEffect } from "react";
import { allDocuments } from "contentlayer/generated";
import { ChevronDown } from "lucide-react";
import { Mdx } from "@/components/mdx";

export default function Home() {
    const [isFaded, setIsFaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 0) {
                setIsFaded(true);
            } else {
                setIsFaded(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleClick() {
        console.log("a");
        const changelogs = document.getElementById("changelogs");

        changelogs?.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <main className="min-h-screen snap-mandatory snap-y *:snap-start">
            <div className="min-h-screen grid place-items-center relative">
                <img src="logo.png" alt="logo" className="w-5/6 lg:w-1/2" />
                <button onClick={handleClick} className={`cursor-pointer absolute bottom-0 -translate-x-1/2 -translate-y-1/2 size-12 animate-bounce transition-opacity duration-500 ${isFaded ? 'opacity-0' : 'opacity-100'}`}>
                    <ChevronDown className="size-12 text-white" />
                </button>
            </div>
            <div id="changelogs" className="w-full lg:w-2/3 mx-auto lg:rounded-3xl bg-black/60 text-white flex flex-col min-h-screen px-3">
                <div className="text-5xl text-center pt-2 flex items-center font-semibold pb-4 justify-center border-b">
                    Changelogs
                </div>
                <div className="flex gap-3 flex-col">
                    {allDocuments.map((post) => (
                        <Mdx code={post.body.code} />
                    ))}
                </div>
            </div>
        </main>
    );
}
