Accounts.onCreateUser((options, user) => {
  if(options.email === 'g@g.com') {
    user.roles = ['admin'];
  }
  return user;
})