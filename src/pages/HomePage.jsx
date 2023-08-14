import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileDetailed from '../components/UI/ProfileSections/ProfileDetailed';
import ListItem from '../components/UI/ListItem';
import API from '../utils/API';

export default function HomePage() {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);

  const fetchData = async () => {
    try {
      const userResponse = await API.getUser();
      console.log('User response:', userResponse);
  
      const repoResponse = await API.getRepos();
      console.log('Repo response:', repoResponse);
  
      setUser(userResponse.data);
  
      // Sort repos by id in ascending order
      const sortedRepos = repoResponse.data.sort((a, b) => a.id - b.id);
      setRepos(sortedRepos);
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  };
    
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        <ListItem key={user}>
          <ProfileDetailed user={user} repos={repos} />
        </ListItem>
      </ul>
    </div>
  );
}
