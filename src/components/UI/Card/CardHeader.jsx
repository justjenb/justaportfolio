import ProfileTeaser from '../ProfileSections/ProfileTeaser';

export default function CardHeader({ user }) {
  return (
    <div className="card-header">
      <ProfileTeaser user={user} />
      <a href={`mailto:${user.email}`} className="ms-2 me-auto">
        {user.email}
      </a>
    </div>
  );
}
