export default function Header({ appName }) {
  return (
    <header className="mb-4">
      <h1 className="h2 text-dark-emphasis">
        <span className="me-2">👍🏻</span> {appName}
      </h1>
      <hr />
    </header>
  );
}
