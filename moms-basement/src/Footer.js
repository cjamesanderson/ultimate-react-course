export default function Footer({ taskMinutes }) {
  if (!taskMinutes)
    return (
      <footer className="footer-message">
        <em>You haven't logged any effort today!</em>
      </footer>
    );

  const goalPercent = Math.round((taskMinutes / 60) * 100);
  return (
    <footer className="footer-message">
      <em>
        You have logged {taskMinutes} minutes of effort today (%
        {goalPercent} of goal)
      </em>
    </footer>
  );
}
