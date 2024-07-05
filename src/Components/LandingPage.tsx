import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import Image from "next/image";
import heroImg from "../Components/assets/heroimages.avif";
import { JSX, SVGProps } from "react";
import Navbar from "./NavBar";

export default function LandingPage({ ContactRef, PricingRef, HomeRef }: any) {
  return (
    <>
      <Navbar ContactRef={ContactRef} PricingRef={PricingRef} />
      <div className="flex flex-col min-h-[100dvh]">
        <main ref={HomeRef} className="flex-1">
          <section className="w-full py-10 700:py-24 1024:py-24 1440:py-48">
            <div className="container px-4 700:px-6">
              <div className="grid gap-6 1024:grid-cols-[1fr_400px] 1024:gap-12 1440:grid-cols-[1fr_600px] 1024:px-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl 1440:text-6xl/none">
                      Streamline Your Supply Chain with Ease
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground 700:text-xl">
                      Our supply chain management platform helps you track
                      inventory, manage orders, and gain valuable insights to
                      optimize your operations.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Get Started
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <Image
                  src={heroImg}
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full 1024:order-last 1024:aspect-square"
                />
              </div>
            </div>
          </section>
          <section
            id="features"
            className="w-full py-12 700:py-24 1024:py-32 bg-muted"
          >
            <div className="container px-4 700:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Key Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Streamline Your Supply Chain
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground 700:text-xl/relaxed 1024:text-base/relaxed 1440:text-xl/relaxed">
                    Our supply chain management platform offers a comprehensive
                    set of tools to help you optimize your operations and stay
                    ahead of the competition.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 1024:grid-cols-3 1024:gap-12">
                <div className="grid gap-1">
                  <WarehouseIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Inventory Tracking</h3>
                  <p className="text-muted-foreground">
                    Real-time visibility into your inventory levels, with alerts
                    for low stock and automated reordering.
                  </p>
                </div>
                <div className="grid gap-1">
                  <ListOrderedIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Order Management</h3>
                  <p className="text-muted-foreground">
                    Streamline your order processing, from receiving to
                    fulfillment, with our intuitive order management tools.
                  </p>
                </div>
                <div className="grid gap-1">
                  <InfoIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Supply Chain Analytics</h3>
                  <p className="text-muted-foreground">
                    Gain valuable insights into your supply chain performance
                    with our advanced analytics and reporting.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="testimonials"
            className="w-full py-12 700:py-24 1024:py-32"
          >
            <div className="container px-4 700:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Testimonials
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What Our Customers Say
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground 700:text-xl/relaxed 1024:text-base/relaxed 1440:text-xl/relaxed">
                    Hear from our satisfied customers about how our supply chain
                    management platform has transformed their operations.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 1024:grid-cols-2 1024:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-lg font-bold">John Doe</h4>
                        <p className="text-sm text-muted-foreground">
                          CEO, ABC Inc.
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground">
                      &quot;The supply chain management platform has been a
                      game-changer for our business. It has helped us streamline
                      our operations, reduce costs, and improve customer
                      satisfaction.&quot;
                    </blockquote>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-lg font-bold">Jane Smith</h4>
                        <p className="text-sm text-muted-foreground">
                          Supply Chain Manager, XYZ Corp.
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground">
                      &quot;I highly recommend the supply chain management
                      platform to any business looking to optimize their
                      operations. The analytics and reporting features have been
                      invaluable in helping us make data-driven decisions.&quot;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            ref={PricingRef}
            id="pricing"
            className="w-full py-12 700:py-24 1024:py-1 bg-muted"
          >
            <div className="container px-4 700:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Pricing
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Affordable Pricing for Businesses of All Sizes
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground 700:text-xl/relaxed 1024:text-base/relaxed 1440:text-xl/relaxed">
                    Choose the plan that best fits your business needs and
                    budget.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 1024:grid-cols-3 1024:gap-12">
                <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Starter</h3>
                    <p className="text-4xl font-bold">
                      $49
                      <span className="text-sm font-normal text-muted-foreground">
                        /month
                      </span>
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Inventory Tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Order Management
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Basic Analytics
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6">Get Started</Button>
                </div>
                <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Pro</h3>
                    <p className="text-4xl font-bold">
                      $99
                      <span className="text-sm font-normal text-muted-foreground">
                        /month
                      </span>
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Inventory Tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Order Management
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Advanced Analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Automated Reporting
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6">Get Started</Button>
                </div>
                <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Enterprise</h3>
                    <p className="text-4xl font-bold">
                      $249
                      <span className="text-sm font-normal text-muted-foreground">
                        /month
                      </span>
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Inventory Tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Order Management
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Advanced Analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Automated Reporting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Dedicated Support
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6">Get Started</Button>
                </div>
              </div>
            </div>
          </section>
          <section
            ref={ContactRef}
            id="contact"
            className="w-full py-12 700:py-24 1024:py-32 border-t"
          >
            <div className="container px-4 700:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground 700:text-xl/relaxed 1024:text-base/relaxed 1440:text-xl/relaxed">
                    Have a question or want to learn more about our supply chain
                    management platform? Fill out the form below and we&apos;ll
                    be in touch.
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-sm space" />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ListOrderedIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

function TruckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function WarehouseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="12" height="12" x="6" y="10" />
    </svg>
  );
}
