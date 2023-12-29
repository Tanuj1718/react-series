REACT SERIES
 
 Theoritical learnings:
 
 DAY 1:
 
 -> Library- It targets a specific functionality. While using a library , we are in control for flow of the code. Like we have a tool and we have the power when we have to use it within our application. Example: React
 
 -> Framework- It provides everything required to develop a complete application. While using a framework, it controls the flow of code. It is a blueprint like you have different blueprints of houses and you have to choose one of them. You don't have control over the architecture because it is already defined in paper. Example: Bootstrap, tailwind.
 
-> React has unidirectional flow of data where parent node shared it's functions or data with the child node.

-> Babel is a js compiler that converts js code into version compatible with all browsers.

-> Hooks are functions that enable developers to use state and other React features in functional components. These are used for UI updation.

DAY 2:

-> React Fiber- The algorithm behind updating the virtual dom is fiber. When we are updating the virtual dom and on that time itself, many other updation calls are coming from the server, then we try to directly update according to final call.

KEY FEATURES OF FIBER: It includes the ability to pause, abort or reuse work as new updates are come in and the ability to assign priority to different types of updates.

-> Reconciliation- It is a recursive algorithm of react which reconsider whom to update or not. It differentiate one tree with another tree to determine which parts need to be change in the actual tree.

-> useState- setState of useState can receive a callback function for tracking previous values in UI. For more hooks, visit react.dev

DAY 3: 

-> Custom Hooks- We can create our own hooks with the functionality as per our requirements.

-> How to handle APIs

DAY 4:

-> React Router- It gives link, navlink.
Link is used in place of 'a' tag. 'a' tag refreshes the whole page but in react we have not refresh concept. So it is good to use Link in place of 'a' tag.

DAY 5:

-> Context API: If we have to pass some data in the components which are nested, then we have to pass that data to all the components outside it. It was reducing the optimization ,so there comes a concept of context API, redux (redux toolkit for react).

DAY 6: 

-> More about Context API and how to do production level code.

-> Local Storage: How to use local storage and how to add application in local storage.

DAY 7:

-> Redux: Redux is most useful in cases when:

The app state is updated frequently. The logic to update that state may be complex. The app has a medium or large-sized codebase, and might be worked on by many people. You need to see how that state is being updated over time.

-> Redux Toolkit: Redux Toolkit eliminates accidental mutations, which have always been the #1 cause of Redux bugs. Redux Toolkit eliminates the need to write any action creators or action types by hand. Redux Toolkit eliminates the need to write manual and error-prone immutable update logic.
