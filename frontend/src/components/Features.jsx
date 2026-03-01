export default function Features() {
  const items = [
    {
      title: "Real-Time Multiplayer",
      desc: "Play with friends or match with players around the world."
    },
    {
      title: "Islamic Knowledge",
      desc: "Questions from Qur’an, Hadith, Seerah, Fiqh, and more."
    },
    {
      title: "Rank & Rewards",
      desc: "Win games, climb the leaderboard, and earn achievements."
    }
  ];

  return (
    <section className="features">
      <h2 className="section-title">Why DeenDuel?</h2>

      <div className="feature-grid">
        {items.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}