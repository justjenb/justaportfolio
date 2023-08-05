export default function RepoDetails({ name, description }) {
  return (
    <section className="ms-2 me-auto">
      <h4>{name}:</h4>
      <h5 className="card-text">{description}</h5>
    </section>
  );
}
