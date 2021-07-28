// src/ Category.js

import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

// const Item = () => {
//   const { name } = useParams();

//   return (
//     <div>
//       <h3>{name}</h3>
//     </div>
//   );
// };

const Category = () => {
  const { url, path } = useRouteMatch();

  return (
    
    <div>
       <div class="col justify-content-center text-center">
          <h3>
            Choose a cathegory to start your journey!
          </h3>
         </div> 
      <div class="row justify-content-center mx-auto">
          <a class="col-sm bg-dark text-light">
              <h4>
              <Link to="/products/tools" ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools" width="84" height="84" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                <polyline points="12 8 7 3 3 7 8 12" />
                <line x1="7" y1="8" x2="5.5" y2="9.5" />
                <polyline points="16 12 21 17 17 21 12 16" />
                <line x1="16" y1="17" x2="14.5" y2="18.5" />
                
              </svg><h4 class="class=mb-0 text-light">Tools</h4></Link>
              
              </h4>
              
          </a>
          <a class="col-sm bg-dark text-light">
              <h4>
              <Link to="/products/seeds"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-seeding" width="84" height="84" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
                <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
                <line x1="12" y1="20" x2="12" y2="10" />
              </svg><h4 class="text-light">Seeds</h4></Link>
              
              </h4>
              
          </a>
          <a class="col-sm bg-dark text-light">
              <h4>
              <Link to="/products/fertilizers"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="84" height="84"><g id="Fertilizer"><g id="Glyph"><path d="M298.214,330.984c22.3-11.955,36.542-44.691,37.138-46.079a8.1,8.1,0,0,0-5.912-11.024c-1.485-.273-36.636-6.519-58.931,5.434a41.62,41.62,0,0,0-14.879,13.278,41.615,41.615,0,0,0-14.88-13.278c-22.293-11.953-57.444-5.707-58.931-5.434a8.087,8.087,0,0,0-5.911,11.024c.595,1.388,14.842,34.124,37.137,46.079,12.28,6.585,24.468,6.112,34.955,2.531v19.034A48.11,48.11,0,0,0,207.939,392H192a7.83,7.83,0,1,0,0,15.657H320A7.83,7.83,0,1,0,320,392H302.58A48.11,48.11,0,0,0,264,352.812V333.576C274.412,336.614,287.377,336.8,298.214,330.984Z"/><path d="M256,0C218.173,0,152.674,55.889,111.13,98.41A8,8,0,0,0,116.855,112H394.692a8,8,0,0,0,5.669-13.648C358.015,55.888,291.053,0,256,0ZM184,96a8,8,0,1,1,8-8A8,8,0,0,1,184,96Zm32-32a8,8,0,1,1,8-8A8,8,0,0,1,216,64Zm16,32a8,8,0,1,1,8-8A8,8,0,0,1,232,96Zm8-64a8,8,0,1,1,8-8A8,8,0,0,1,240,32Zm16,24a8,8,0,1,1,8-8A8,8,0,0,1,256,56Zm16,40a8,8,0,1,1,8-8A8,8,0,0,1,272,96Zm8-56a8,8,0,1,1,8-8A8,8,0,0,1,280,40Zm16,32a8,8,0,1,1,8-8A8,8,0,0,1,296,72Zm32,24a8,8,0,1,1,8-8A8,8,0,0,1,328,96Z"/><path d="M472,312c0-20.64-7.121-66.493-13.634-104.118A23.982,23.982,0,0,0,473.869,168a23.9,23.9,0,0,0,6.1-17.167C479.358,137.958,468.382,128,455.493,128H48a16,16,0,0,0-16,16h0a16,16,0,0,0,16,16H312a8,8,0,0,1,8,8h0a8,8,0,0,1-8,8H40.014A8.041,8.041,0,0,0,32,184a24.032,24.032,0,0,0,21.634,23.882C47.121,245.507,40,291.36,40,312c0,83.12,5.14,116.06,7.39,126.49C45.41,442.21,32,459.59,32,464c0,19.03,19.8,31.31,37.44,24.37,133.82,29,224.96,32.12,373.12,0C459.95,495.22,480,483.08,480,464c0-4.42-13.34-21.79-15.39-25.51C466.86,428.06,472,395.12,472,312ZM292,448H220a108,108,0,0,1,0-216h72a108,108,0,0,1,0,216ZM423.726,176H360a8,8,0,0,1-8-8h0a8,8,0,0,1,8-8h64a8,8,0,0,1,7.983,8.533A8.182,8.182,0,0,1,423.726,176Z"/></g></g></svg><h4 class="text-light">Fertilizers</h4></Link>
              

              </h4>
              
          </a>
          <a class="col-sm bg-dark text-light">
              <h4>
              <Link to="/products/plants"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plant-2" width="84" height="84" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M2 9a10 10 0 1 0 20 0" />
                <path d="M12 19a10 10 0 0 1 10 -10" />
                <path d="M2 9a10 10 0 0 1 10 10" />
                <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
                <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
              </svg><h4 class="text-light">Plants</h4></Link>
              
              </h4>
              
          </a>
      </div>
      
      
      
    </div>
  );
};

export default Category;