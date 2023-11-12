import React from "react";
//made a card component 
//gave address its default value, if we does not pass its value while using component , this value will be shown
function Card({username, address="India"}){
    return (
        <>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
         <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
           <blockquote>
             <p class="text-lg font-medium">
               “Tailwind CSS is the only framework that I've seen scale
               on large teams. Its easy to customize, adapts to any design,
               and the build size is tiny.”
             </p>
           </blockquote>
           <figcaption class="font-medium">
             <div class="text-sky-500 dark:text-sky-400">
               {username}
             </div>
             <div class="text-slate-700 dark:text-slate-500">
               Staff Engineer, {address}
             </div>
           </figcaption>
         </div>
       </figure>
       </>
    )
}
export default Card;