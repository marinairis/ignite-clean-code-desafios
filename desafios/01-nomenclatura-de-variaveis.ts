// Nomenclatura de variáveis

const categoryList = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

const API_BAD_REQUEST = 400;
const API_NOT_FOUND = 404;

export default async function getUserCategoty(request, response) {
  const userName = String(request.query.username);

  if (!userName) {
    return response.status(API_BAD_REQUEST).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const githubApi = await fetch(`https://api.github.com/users/${userName}`);

  if (githubApi.status === API_NOT_FOUND) {
    return response.status(API_BAD_REQUEST).json({
      message: `User with username "${userName}" not found`,
    });
  }

  const data = await githubApi.json();

  const categoryOrderList = categoryList.sort(
    (a, b) => b.followers - a.followers
  );

  const category = categoryOrderList.find((i) => data.followers > i.followers);

  const result = {
    userName,
    category: category.title,
  };

  return result;
}

getUserCategoty(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);
