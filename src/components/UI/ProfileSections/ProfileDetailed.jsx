import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';

export default function ProfileDetailed({ user, repos }) {
  return (
    <div>
      <CardHeader user={user} />
      {repos.slice(-10).reverse().map(repo => (
        <div className="card">
          <CardBody repo={repo} />
        </div>
      ))}
    </div>
  );
}
