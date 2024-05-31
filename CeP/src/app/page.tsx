/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BoQSOjm6tlF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-100 dark:bg-gray-950">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-yellow-500 text-gray-950 justify-center">
        <section className="flex items-center bg-yellow-500 text-gray-950 justify-between w-full max-w-[1440px]">
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <DoorClosedIcon className="h-6 w-6" />
            <span className="sr-only">cortinas &amp; persianas</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Products
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </section>
      </header>
      <main className="flex-1 gap-5 flex flex-col">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <div className="bg-[url(../assets/cortina-1.jpg)] max-w-[500px] h-[400px]  bg-center bg-cover bg-no-repeat rounded-2xl"/>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-gray-950">
                    Eleve sua casa com cortinas &amp; persianas
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-400">
                    Descubra nossa requintada coleção de cortinas e persianas feitas sob medida, criadas para transformar o seu
                    espaços de vida.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    veja nossa coleção
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-yellow-500 text-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore nossa coleção de cortinas e persianas</h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Do clássico ao contemporâneo, a nossa diversificada gama de cortinas e cortinas irá elevar o ambiente de
                  qualquer sala.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <div className="bg-[url(../assets/veludo.jpg)] mx-auto aspect-video overflow-hidden rounded-xl bg-cover bg-center sm:w-full" />
                <div className="bg-gray-950 p-4 text-yellow-500">
                  <h3 className="font-bold text-xl">Cortina de veludo</h3>
                  <p className="text-sm">$99.99</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <div className="bg-[url(../assets/transparente.jpg)] mx-auto aspect-video overflow-hidden rounded-xl bg-cover bg-center sm:w-full" />
                <div className="bg-gray-950 p-4 text-yellow-500">
                  <h3 className="font-bold text-xl">Cortinas transparentes</h3>
                  <p className="text-sm">$79.99</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <div className="bg-[url(../assets/blackout.jpg)] mx-auto aspect-video overflow-hidden rounded-xl bg-cover bg-top sm:w-full" />
                <div className="bg-gray-950 p-4 text-yellow-500">
                  <h3 className="font-bold text-xl">Cortinas blackout</h3>
                  <p className="text-sm">$129.99</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-gray-950">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-950">
                  Criando elegância atemporal 
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Em Cortinas &amp; Persianas, temos orgulho de nosso compromisso com a qualidade e a satisfação do cliente. Para
                  há mais de uma década, transformamos espaços residenciais com nossa coleção requintada de peças personalizadas
                  cortinas e cortinas. Nossa experiente equipe de designers e artesãos trabalha incansavelmente para garantir que cada
                  peça que criamos é uma obra-prima.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="bg-[url(../assets/persiana-1.jpg)] max-w-[500px] h-[500px]  bg-center bg-cover bg-no-repeat rounded-2xl"/>   
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-gray-950">Qualidade incomparável</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Nossas cortinas e cortinas são confeccionadas com os melhores materiais e atenção aos detalhes, garantindo durabilidade e elegância duradouras.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-gray-950">Serviço personalizado</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Nossa equipe trabalha em estreita colaboração com cada cliente para entender suas necessidades e preferências exclusivas,
                        entregando soluções personalizadas que superam as expectativas.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-gray-950">Práticas Sustentáveis</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Estamos comprometidos com práticas ecológicas, utilizando materiais sustentáveis ​​e minimizando o nosso
                        impacto ambiental.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-yellow-500 text-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a custom project in mind? Fill out the form below and one of our design experts will be in touch
                  to discuss your needs.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[900px] space-y-2">
                <form className="flex flex-col space-y-2">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="max-w-[900px] flex-1 bg-zinc-200 text-yellow-500 placeholder:text-gray-500 focus:ring-0 focus:border-yellow-500"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="max-w-[900px] flex-1 bg-zinc-200 text-yellow-500 placeholder:text-gray-500 focus:ring-0 focus:border-yellow-500"
                  />
                  <Textarea
                    placeholder="Message"
                    className="max-w-[900px] flex-1 bg-zinc-200 text-yellow-500 placeholder:text-gray-500 focus:ring-0 focus:border-yellow-500"
                  />
                  <Button
                    type="submit"
                    className="bg-zinc-950 text-yellow-500 hover:bg-zinc-800 transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-yellow-700"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-950 p-6 md:py-12 w-full text-yellow-500">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Careers
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Curtains
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Drapes
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Blinds
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Design Ideas
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Inspiration Gallery
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Refund Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Support
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Sales
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DoorClosedIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <path d="M2 20h20" />
      <path d="M14 12v.01" />
    </svg>
  )
}