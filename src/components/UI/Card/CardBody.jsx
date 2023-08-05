import RepoDetails from './RepoDetails';
import RepoStats from './RepoStats';

export default function CardBody({ repo }) {
  return (
    <div className="card-body">
      <RepoDetails {...repo} />
      <RepoStats {...repo} />
    </div>
  );
}