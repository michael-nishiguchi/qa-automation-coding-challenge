# Test Flows

1. Verify valid Github user

   1. Type my username (michael-nishiguchi)
   2. Submit by clicking
   3. Check "found xx repos"
   4. Verify that "Success!" message appears
   5. Check clickable links
   6. Check if description or '-'

2. Verify blank username (also doubles as invalid username)

   1. Clear username field
   2. Hit enter instead of clicking
   3. Verify that "Github user not found" message appears
   4. Verify that no rows appear

3. Verify invalid username

   1. Enter an invalid username like "asdfasdfasdfasdfasdfasdf"
   2. Should have same results as blank username

4. Verify username with 0 repos

   1. Should displayy "Success!" but with 0 repos

5. Verify username with a large number of repos
   1. Ensure that all data properly appears on screen
