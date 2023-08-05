export default function ProfileTeaser({
  user: {
    avatar_url,
    login,
    name,
    email,
    bio,
    followers,
    following,
    public_repos,
    created_at,
    updated_at
  },
}) {
  const profileCreationDate = new Date(created_at).toDateString();
  const profileUpdateDate = new Date(updated_at).toDateString();

  return (
    <>
      <div className="profile-section">
        <img src={avatar_url} alt={`${login}'s avatar`} className="profile-avatar" />
        <div className="profile-details">
          <h2 className="fw-bold mb-1">{name} ({login})</h2>
          <a href={`mailto:${email}`}>{email}</a>
          <p>{bio}</p>
          <h5>Followers: {followers}</h5>
          <h5>Following: {following}</h5>
          <h5>Public Repositories: {public_repos}</h5>
          <p>Profile created at: {profileCreationDate}</p>
          <p>Last updated at: {profileUpdateDate}</p>
        </div>
      </div>
    </>
  );
}
