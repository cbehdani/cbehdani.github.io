window.onload = function(){

    //array to store input objects
    //var inputStorage = [];
    var categoryDivStorage = [];
    

    //var addGradeButton = document.getElementById('addGradeButton');
    var calculateButton = document.getElementById('calculateButton');
    var addCategoryButton = document.getElementById('addCategoryButton');

    var addGradeButtons = document.getElementsByClassName('addGradeButtons');

    //function to add a new grade input box
    // addGradeButton.addEventListener("click", function(){
    // var newGradeValueEntryBox = document.createElement("input");
    // newGradeValueEntryBox.type = "number";
    // newGradeValueEntryBox.classList.add('gradeInputSpacing');
    // inputStorage.push(newGradeValueEntryBox);
    // console.log(inputStorage.length);
    // document.getElementById("numberInputArea").appendChild(document.createElement("br"));
    // document.getElementById("numberInputArea").appendChild(newGradeValueEntryBox);
    // });

    //function to add a new grade category when the button is clicked
    addCategoryButton.addEventListener("click", function(){
    var newGradeCategory = document.createElement("div");
    newGradeCategory.classList.add('categoryBoxSize');

     categoryDivStorage.push(newGradeCategory);
    console.log(categoryDivStorage);

    //add closeCategoryButton
    var closeCategoryButton = document.createElement("button");
    closeCategoryButton.innerHTML = "X";
    closeCategoryButton.classList.add('closeCategoryButton');
    newGradeCategory.appendChild(closeCategoryButton);
    //break in front of button
    newGradeCategory.appendChild(document.createElement("br"));
    //add categoryNameInputBox
    var categoryNameInputBox= document.createElement("input");
    categoryNameInputBox.placeholder = "Enter Category Name Here";
    categoryNameInputBox.classList.add('categoryNameBoxSpacing');
    newGradeCategory.appendChild(categoryNameInputBox);
    //add categoryWeightInputBox
    var categoryWeightInputBox= document.createElement("input");
    categoryWeightInputBox.type = "number";
    categoryWeightInputBox.placeholder = "Enter weight % here";
    categoryWeightInputBox.min = "0"
    categoryWeightInputBox.classList.add('categoryWeightBoxSpacing');
    newGradeCategory.appendChild(categoryWeightInputBox);
    //add section average
    var categoryAverage= document.createElement("p");
    categoryAverage.innerHTML = "The average is <span class='categoryAverage'>...<span>";
    newGradeCategory.appendChild(categoryAverage);
    //add grade button for each new grade category
    var newGradeCategoryButton = document.createElement("button");
    newGradeCategoryButton.innerHTML = "Add new Grade";
    newGradeCategoryButton.classList.add('addGradeButtons');
    newGradeCategory.appendChild(document.createElement("br"));
    newGradeCategory.appendChild(newGradeCategoryButton);
    
    //after appending the button to the new category area, append the new category area to the numberInputArea/html page
    document.getElementById("numberInputArea").appendChild(document.createElement("br"));
    document.getElementById("numberInputArea").appendChild(newGradeCategory);
    });

    //add new grade name and grade value box
    document.addEventListener( "click", someListener );
    function someListener(event){
        var element = event.target;
        //if you clicked the add new grade button
        if(element.classList.contains("addGradeButtons")){
            var divContainingButton = element.parentNode;

            var gradeRow = document.createElement("div");
            gradeRow.classList.add('gradeRow');

            var newGradeNameEntryBox = document.createElement("input");
            newGradeNameEntryBox.placeholder = "Grade Name";
            newGradeNameEntryBox.classList.add('gradeInputSpacing');
            gradeRow.appendChild(newGradeNameEntryBox);

            var newGradeValueEntryBox = document.createElement("input");
            newGradeValueEntryBox.type = "number";
            newGradeValueEntryBox.placeholder = "Grade %";
            newGradeValueEntryBox.min = "0";
            newGradeValueEntryBox.classList.add('gradeInputSpacing');
            newGradeValueEntryBox.classList.add('gradeBox');
            gradeRow.appendChild(newGradeValueEntryBox);

            var closeGradeBoxButton = document.createElement("button");
            closeGradeBoxButton.innerHTML = "X";
            closeGradeBoxButton.classList.add('closeGradeBoxButton');
            gradeRow.appendChild(closeGradeBoxButton);

            //console.log(gradeRow);
            divContainingButton.appendChild(gradeRow);
            
        }
        
        if(element.classList.contains("closeCategoryButton")){
            console.log("closing pre size " + categoryDivStorage);
            var divContainingButton = element.parentNode;
            var testIndex = categoryDivStorage.indexOf(divContainingButton);
            if (testIndex > -1) {
            categoryDivStorage.splice(testIndex, 1);
            }

            //parent of the div to delete
            var parentOfDiv = divContainingButton.parentNode;
            parentOfDiv.removeChild(divContainingButton);
            console.log("closing post size " + categoryDivStorage);
        }

        // if(element.classList.contains("closeCategoryButton")){
        //     var divContainingButton = element.parentNode;
        //     var testIndex = categoryDivStorage.indexOf(divContainingButton);
        //     categoryDivStorage.splice(testIndex, 1);
        //     //parent of the div to delete
        //     var parentOfDiv = divContainingButton.parentNode;
        //     parentOfDiv.removeChild(divContainingButton);
        // }

        if(element.classList.contains("closeGradeBoxButton")){
            console.log(element);
            console.log(element.parentNode);
            var divContainingButton = element.parentNode;
            var categoryDiv = divContainingButton.parentNode;
            //create a parent div of Grade name, percent and x
            categoryDiv.removeChild(divContainingButton);
        }
    }

    //function to add up all input in boxes and output grade
    calculateButton.addEventListener("click", function(){
        var summedFinalGrade = 0;

        for (var i = 0; i < categoryDivStorage.length; i++){
            console.log(i + " is the current object in categoryDiv Storage, which is the size of " + categoryDivStorage.length);
            // var checkingWeightPercentage = categoryDivStorage[i].getElementsByClassName("categoryWeightBoxSpacing");
            //the weight you will use for the overall final grade
            var sectionAverage = 0;
            var weightedSectionAverage = 0;
            var accurateGrades = 0;
            //referring to the weighted location
            var checkingWeightPercentage = categoryDivStorage[i].childNodes[3];

            if (checkingWeightPercentage.value == ""){
                alert("Error in box " + (i + 1) + "- You have not entered a weight for this type of grade");
                break;
            }

            var numberOfGradeBoxes = categoryDivStorage[i].getElementsByClassName('gradeBox');
            
            for (var j = 0; j < numberOfGradeBoxes.length; j++){
                console.log(j + " is the current gradebox we are on out of a total of " + numberOfGradeBoxes.length + " gradeboxes with a value of " + numberOfGradeBoxes[j].value);
                //console.log(parseInt(numberOfGradeBoxes[j].value));
                if (!isNaN(parseInt(numberOfGradeBoxes[j].value))){
                    sectionAverage += parseInt(numberOfGradeBoxes[j].value);
                    accurateGrades++;
                }
                
            }
            sectionAverage = sectionAverage / accurateGrades;
            
            var changingAverageInCategory = categoryDivStorage[i].getElementsByClassName("categoryAverage");
            changingAverageInCategory[0].innerText = sectionAverage;

            weightedSectionAverage = sectionAverage * (checkingWeightPercentage.value * .01);
            // console.log (sectionAverage);
            // console.log (checkingWeightPercentage);
            console.log(weightedSectionAverage);
            summedFinalGrade += weightedSectionAverage;
        }
        var finalGradeLocation = document.getElementById("finalGradeLocation");
        finalGradeLocation.innerHTML = summedFinalGrade;
    });

}

