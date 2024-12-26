// Causa vs Efeito

import { useEffect, useState } from "react";

interface User {
  name: string;
  github: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        name: "Joseph Oliveira",
        github: "https://github.com/josepholiveira",
      },
    },
  };
}

export function UserProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    function loadUser() {
      setIsLoading(true);

      const response = fetchUser();
      setUser(response.data.user);

      setIsLoading(false);
    }

    loadUser();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={`${user?.github}.png`} alt={`${user?.name}'s avatar`} />
      <a href={user?.github} target="_blank" rel="noopener noreferrer">
        {user?.name}
      </a>
    </div>
  );
}
