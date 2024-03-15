export default function UserCard(props) {
  return (
    <div className="user-card">
      <div className="images">
        {props.data.avatar_url ? (
          <img src={props.data.avatar_url} alt={props.data.login} />
        ) : (
          <img src="https://placehold.co/100x100/png" alt="Placeholder" />
        )}{" "}
      </div>
      <div className="card-container">
        <div className="user-name"> 
          <p>Name: {props.data.name}</p>
          <p>UserName: {props.data.bio}</p>
        </div>
        <div className="user-info">
          <p>Followers: {props.data.followers}</p>
          <p>Following: {props.data.following}</p>
          <p>Public Repos: {props.data.public_repos}</p>
        </div>
      </div>
    </div>
  );
}
