**Team name**: MACY
**Members**: Anita Guo, Casey Hou, Michelle Lin, Yunkai Li
**What was your original goal and how much of it were you able to achieve?**
Our goal is to build a React-based Animal Adoption web app using the Petfinder API. Users can search for adoptable pets with features like searching by type, breed, age, and size, as well as letting users save their favorites pets for future reference.

However, we ran into challenges with our API early on – we couldn’t access its data. While waiting for a response from their support team, we considered shifting our focus to a Farmers Market Search Site with a farmers market API provided by USDA. This new site shared similar functionality with the animal adoption site. Unfortunately, we faced technical issues with the Farmers Market API again…

Ultimately, we returned to our original idea with a reliable alternative API – we were able to achieve almost all the features we initially planned, even though we didn’t end up using the Petfinder API.

**A description of what your project does and the functionality that it provides** 
Through our animal adoption web app project, users can explore and filter adoptable pets based on age, sex, species, breed, and size. The home page presents preview cards for each animal profile, displaying basic information for users’ convenience. Each card can be clicked to open a personal profile and reveal more detailed information about the animal. Additional information includes activity level, whether they are good with kids, whether they are vaccinated, and their adoption fee. A more comprehensive description about each animal – which is provided by each lister – is displayed below the main information card. Users can save specific animals to their saved list to return to for their reference/convenience.

**What did you learn from the project? Talk about the mistakes you made, challenges you overcame or the tools that you got to learn etc**

Finding a reliable API turned out to be much harder than we anticipated. Before finalizing our project idea, we should have tested whether the API worked. When we submitted the proposal, we hadn’t requested an API key or written any code to fetch data from the API. When we started working, we discovered that the PetFinder API had stopped issuing keys back in 2022. This forced us to pivot to a different animal adoption API.

Unfortunately, none of the animal adoption APIs we found provided an immediate API key. Instead, we had to apply for one, and with the assignment deadline approaching, we had no idea how long it would take for the organizations to respond. As a result, we temporarily switched our topic to finding farmer’s markets instead of adoptable animals while waiting for API approvals.

When working with the farmer’s markets API, we successfully tested it in Postman, but it wouldn’t work when we tried to fetch data using React. Thankfully, just as we hit this roadblock, we heard back from one of the animal adoption APIs we had applied to. This allowed us to pivot back to our original topic of animal adoption. Lesson learned: always verify that your chosen API works before committing to a grant plan.

Once we had a working API, we learned how to explore its JSON data, extract the necessary information from nested structures, and use various React functions like useContext, useState, and useNavigate. We also learned how to use BrowserRouter to navigate between pages. Additionally, we focused on structuring our React app neatly, creating separate folders for contexts, pages, components, assets, and more. Writing proper documentation for our teammates was another important step to ensure that everyone understood the codebase.

As this was a group project, we divided tasks among the team. Eventually, we had to merge all our work, which turned out to be another challenge. We learned how to use Git branches effectively to preserve and track individual contributions. We also discovered the importance of communication, updating each other in Slack like, “I have pushed,” “I have pulled,” or “I’m working on this bug, so please wait until I’ve pushed the changes”, so as to minimize merge conflicts.

One of the most memorable and STRESSFUL lessons we learned was also related to Git branches. While Git branches are powerful, they can be tricky for newbies like us. We nearly lost 5.5 hours of work because we didn’t realize that running a git checkout to switch to a different branch could overwrite our local files. We hadn’t made any backups or copies of my work, and we panicked. Luckily, we had made one commit just before switching branches, and that single commit saved all our work. This experience taught us an invaluable lesson: commit often!!! We don’t have to wait for big milestones to commit, and we can commit for even tiny steps. So COMMIT OFTEN! Every 5 minutes maybe:)

