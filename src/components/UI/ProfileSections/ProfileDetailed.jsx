import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import React, { useState } from 'react';

export default function ProfileDetailed({ user, repos }) {
  return (
    <div>
      <CardHeader user={user} />
      <div className="card-grid">
        {repos.slice(-10).reverse().map(repo => (
          <div key={repo.id} className="card">
            <CardBody repo={repo} />
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function ProfileDetailed({ user, repos }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % repos.length);
//   };

//   return (
//     <div>
//       <CardHeader user={user} />
//       <div className="card">
//         <CardBody repo={repos[currentIndex]} />
//       </div>
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// }

