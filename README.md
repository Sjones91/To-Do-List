Project Information

This project was created to test my ability to create a basic CRUD app. The app displays by default 4 tasks which are imported from "taskData.js". 
The add task button allows the user to add a new task with a title, description and a due date. when submitted ("Add Task" button), new task window is closed and the task list now displays the recently added task aswell as any other tasks which were not already marked off.

Further functionality to be added is a sortby fuction, a lightmode/darkmode fuction and a search task function. Buttons and components are already present on the application however lack functionality.

Challenges.

Building the app layout, buttons and implementing individual components was pretty straight forward. In the main content I stored the default data in a state value and mapped each list item by deconstruction the values in the array store in the state and populated the page with them.

Creating the "Add task" component wasnt to challenging either. The first challenge faced was passing the completed task fuction (Green tick) to the child and ensuring it filtered the original array, removing the current/clicked task item. With some trial and error I figured this out and the completed task fuctionality worked.

The final, and probably the hardest challenge, was adding the new task to the current array of tasks. 
This required me to pass a function to the child component that used a state, only present in the child, and update the parent state with said data.
Again, more testing, trial and error and I managed to pass the data into the parent components array. The only problem was it was passing the object inside an object into an array. This then caused the map function to go bananas an not display the array or tasks. I played around alot with the syntax, researched a little deeper online into parent/child state values and found i was passing updating the parent state with this:

setTasks({...tasks, taskItem})

This was creating a mess of arrays stored in objects that held objects nested in objects. The correct syntax was:

setTasks([...tasks, taskItem])

Finally the project was functional to a level I was happy with. I decided not to persue adding the rest of the functionality for the time being as I was eager to resume the udemy course I was working through and learn new react concepts.

This project really gave me a much deeper understanding of map functions, passing props, and updating state values across components. 