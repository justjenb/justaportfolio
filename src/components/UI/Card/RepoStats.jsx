export default function RepoStats({ stars, forks, issues }) {
  return (
    <div className="text-start m-3">
      <ul className="list-group">
        <h6 className="ps-3 bg-secondary list-group-item m-0" style={{ '--bs-bg-opacity': 0.075 }}>
          Repository Stats:
        </h6>
        <li className="list-group-item">Stars: {stars}</li>
        <li className="list-group-item">Forks: {forks}</li>
        <li className="list-group-item">Issues: {issues}</li>
      </ul>
    </div>
  );
}