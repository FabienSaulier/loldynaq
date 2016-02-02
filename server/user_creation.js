Accounts.onCreateUser(function(options, user) {
   // Use provided profile in options, or create an empty object
   user.profile = options.profile || {};
   // Assigns first and last names to the newly created user object
   user.profile.summonerName = options.summonerName;
   user.profile.communityName = options.communityName;
    user.profile.server = options.server;

   // Returns the user object
   return user;
});