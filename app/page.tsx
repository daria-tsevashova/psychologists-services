import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h1>
          The road to the <span>depths</span> of the human soul
        </h1>
        <p>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <Link href="/psychologists" className="inline-flex items-center">
          Get started
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 12L12 3M12 3H6M12 3V9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div>
        <Image
          src="/hero-image.jpg"
          alt="Psychologist working with a client"
          width={464}
          height={526}
          priority
          className="rounded-xl object-cover"
        />
        <div>
          <span>Experienced psychologists</span>
          <strong>15,000</strong>
        </div>
      </div>
    </main>
  );
}
