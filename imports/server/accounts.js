Accounts.onCreateUser((options, user) => {
  console.log(options, user);
  user.car = 'bmw';
  return user;
})