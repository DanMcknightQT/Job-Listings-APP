const fireBaseURL = 'https://job-listings-app-21d09-default-rtdb.firebaseio.com/';
const jsonEXT = '.json';
// const filters = document.getElementById("TagButtonID");
// const filterContainer = document.getElementById()

// console.log(filters);

(function(){
    $.ajax({
        type: "GET",
        url: `${fireBaseURL}${jsonEXT}`,
        success: (data) => {
            let jobData = {...data}

            Object.values(jobData).forEach(value => {
                
                let jobDataToArray = Object.values(value)
                console.log(jobDataToArray)

                let companyName = jobDataToArray[0]
                let contract = jobDataToArray[1]
                let featured = jobDataToArray[2]
                let id = jobDataToArray[3]
                let level = jobDataToArray[4]
                let location = jobDataToArray[5]
                let logo = jobDataToArray[6]
                let newT = jobDataToArray[7]
                let title = jobDataToArray[8]
                let timePosted = jobDataToArray[9]
                let role = jobDataToArray[10]
                let tags = jobDataToArray[11]

                let jobList = [timePosted, newT, featured, companyName, contract, id, level, location, logo, title, role, tags]
                jobDataSortList.push(jobList)
            })

            jobDataSortList.sort()
            console.log(jobDataSortList)

            Object.entries(jobData).forEach(([key, value]) => {

                //console.log(value.company)

                

                let JobListingFeatured = `
                    <div class="jobListing"
                    <div id="logoCircle"> <img id="logoImage" src="${value.logo}"> </img> </div>
                    <div id="companyName"> ${value.company} </div>
                    <div id="featuredTag">FEATURED</div>
                    <div id="position"> ${value.position} </div>
                    <div id="timeLocaleTags">${value.postedAt} • ${value.contract} • ${value.location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags"><button href="#" id="tagButtonID" class="requirementsTagsButton">
                    ${value.tags.join('</button> <button href="#" id="tagButtonID" class="requirementsTagsButton">')}
                    </button>
                    </div>
                    </div>`
                let JobListingNew = `
                    <div class="jobListing">
                    <div id="logoCircle"> <img id="logoImage" src="${value.logo}"> </img> </div>
                    <div id="companyName"> ${value.company} </div>
                    <div id="newTag">NEW!</div>
                    <div id="position"> ${value.position} </div>
                    <div id="timeLocaleTags">${value.postedAt} • ${value.contract} • ${value.location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags"><button href="#" id="tagButtonID" class="requirementsTagsButton">
                    ${value.tags.join('</button> <button href="#" id="tagButtonID" class="requirementsTagsButton">')}
                    </button>
                    </div>
                    </div>`
                let JobListingNewFeatured = `
                    <div class="jobListing">
                    <div id="logoCircle"> <img id="logoImage" src="${value.logo}"> </img> </div>
                    <div id="companyName"> ${value.company} </div>
                    <div id="newTag">NEW!</div>
                    <div id="featuredTag">FEATURED</div>
                    <div id="position"> ${value.position} </div>
                    <div id="timeLocaleTags">${value.postedAt} • ${value.contract} • ${value.location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags"><button href="#" id="tagButtonID" class="requirementsTagsButton">
                    ${value.tags.join('</button> <button href="#" id="tagButtonID" class="requirementsTagsButton">')}
                    </button>
                    </div>
                    </div>`
                let JobListingDefault = `
                    <div class="jobListing">
                    <div id="logoCircle"> <img id="logoImage" src="${value.logo}"> </img> </div>
                    <div id="companyName"> ${value.company} </div>
                    <div id="position"> ${value.position} </div>
                    <div id="timeLocaleTags">${value.postedAt} • ${value.contract} • ${value.location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags"><button href="#" id="tagButtonID" class="requirementsTagsButton">
                    ${value.tags.join('</button> <button href="#" id="tagButtonID" class="requirementsTagsButton">')}
                    </button>
                    </div>
                    </div>`
                    

                if(value.new == true && value.featured == true){
                    $('.mainContentContainer').append(JobListingNewFeatured)
                } else if(value.new == true && value.featured == false){
                    $('.mainContentContainer').append(JobListingNew)
                } else if(value.new == false && value.featured == true){
                    $('.mainContentContainer').append(JobListingFeatured)
                } else if(value.new == false && value.featured == false){
                    $('.mainContentContainer').append(JobListingDefault)
                }

            })
        },
        error: (error) =>{
            console.log('error');
        }
    })
})()

let jobDataSortList = []


// $('.requirementsTagsButton').on('click', function(event){

//     event.stopPropagation();
//     event.stopImmediatePropagation();

//     let test = document.getElementById("tagButtonID").value


//     console.log(test)
// })