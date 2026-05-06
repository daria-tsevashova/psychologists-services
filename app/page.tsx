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
        <Link to="/psychologists" className={}>
          Get started
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
        <img src="#" alt="#" />
        <div>
          <span>Experienced psychologists</span>
          <strong>15,000</strong>
        </div>
      </div>
    </main>
  );
}
