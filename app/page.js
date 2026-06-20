import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container text-center">
      <h1 className="hero-title">Welcome to Beginner Houseplant Helper</h1>
      <p className="hero-subtitle">
        Uncertain about your plant's needs? We provide clear, concise care guides to help your green friends thrive.
      </p>
      <div className="glass-card home-intro-card">
        <h2>Problem</h2>
        <p>
          New houseplant enthusiasts often struggle with the diverse needs of different plants,
          leading to guesswork about watering, light, and humidity. This uncertainty can result in
          unhealthy plants or even plant death, discouraging further engagement with the hobby.
        </p>
        <h2>Solution</h2>
        <p>
          The Beginner Houseplant Helper offers a curated database of common houseplants with
          detailed, static care instructions. Users can browse plants, add them to a 'My Plants'
          list (stored client-side), and access personalized care guides and task trackers to manage
          their plant collection effectively and confidently.
        </p>
        <div className="flex-center" style={{ gap: '1.5rem', marginTop: '2rem' }}>
          <Link href="/plant-library" className="btn">
            Browse Plants
          </Link>
          <Link href="/my-plants" className="btn btn-secondary">
            My Plants Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
