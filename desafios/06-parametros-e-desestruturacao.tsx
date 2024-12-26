// Parâmetros e Desestruturação

function updateUserRoute(body, params) {
  updateUserController(body, params);
}

function updateUserController(userData, routeParams) {
  const { name, email, password } = userData;
  const { id } = routeParams;

  userRepository.update({
    body: { name, email, password },
    params: { id },
  });
}

const userRepository = {
  update: ({ body: { name, email, password }, params: { id } }) => {},
};
