import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
        <section className="flex relative h-screen items-center bg-cover bg-center bg-[url(../images/placeholder-hero.jpg)]">
            <div className="flex flex-col px-20 gap-7">
                <h1 className="text-9xl text-center sm:text-left">KEVIN SUPA</h1>
                <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
                    <li className="mb-2 tracking-[-.01em]">
                    Setup webpage layout
                    </li>
                    <li className="mb-2 tracking-[-.01em]">
                    Style webpage
                    </li>
                    <li className="tracking-[-.01em]">
                    Add Content
                    </li>
                </ol>
                <div>
                    <Button variant="destructive">Button</Button>
                </div>
            </div>
        </section>
    </main>
  );
}
