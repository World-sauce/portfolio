/*
Name: Lilin Zeng
Date: Mar,12 2023
Section: CST 8285 section 314
Lab: Assignment 1
File: style.css
Lab objective: Create a personal portfolio. 
This part for search and select functions in courses part.
*/

/*-----------------Search Button-----------------------*/
// Get the search bar and buttons
function searchCourses() {
    // Get the user's search query from the input field
    let input = document.getElementById("course-search").value.toLowerCase();
  
    // Get all the course elements
    let courses = document.querySelectorAll(".course");

  
    // Loop through each course element and hide/show based on user input
    for (i = 0; i < courses.length; i++){
        let value = courses[i].textContent.toLowerCase() || courses[i].innerText.toLowerCase();
        if (value.indexOf(input) > -1) {
            courses[i].style.display = "";
        } else {
            courses[i].style.display = "none";
        }

    }
}

  // Add an event listener to the search input field
  const searchInput = document.getElementById("course-search");
  searchInput.addEventListener("input", searchCourses);

//Add an event listener to the search button
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", searchCourses);

 

 


  //Get reset search function
  function resetSearch() {
    // Reset the search input field
    document.getElementById("course-search").value = "";
  
    // Get all the course elements and show them
    let courses = document.querySelectorAll(".course");
    for (let i = 0; i < courses.length; i++) {
      courses[i].style.display = "";
    }
  
 
  }
  
  // Add an event listener to the reset button
  const resetBtn = document.getElementById("reset-btn");
  resetBtn.addEventListener("click", resetSearch);


/*------------------------------Filter Button------------------------------*/
//Filter course by level
function filterCourses() {
    let level = document.getElementById("level-filter").value.toLowerCase();
  
    // Get all the course elements
    let courses = document.querySelectorAll(".course");

  
    // Loop through each course element and hide/show based on user input
    for (i = 0; i < courses.length; i++){
        let value = courses[i].getAttribute("data-level"); 
        if (level === "" || value === level) {
            courses[i].style.display = "";
        } else {
            courses[i].style.display = "none";
        }

    }
}

//Add an event listener to the level filter dropdown
const levelFilter = document.getElementById("level-filter");
levelFilter.addEventListener("change", filterCourses);



/*--------------------------------Sort by Button----------------------------*/

//Sort by level from lowest to highest and vice versa
function sortCourses() {
  let courseList = document.getElementById("courseList");
  let courses = document.querySelectorAll(".course");
  let sortedCourses = Array.from(courses).sort(function(a, b) {
    let aLevel = a.getAttribute("data-level");
    let bLevel = b.getAttribute("data-level");
    if(document.getElementById("level-sort").value === "asc"){
          return aLevel - bLevel;
    }   else {
          return bLevel - aLevel;
    }
    });
   sortedCourses.forEach(course => courseList.appendChild(course));
   

}

// Add an event listener to the sort by dropdown
    const levelSort = document.getElementById("level-sort");
    levelSort.addEventListener("change", sortCourses);



// small screen menu
    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }

    function closemenu(){
        sidemenu.style.right = "-200px";
    }
       

        

       