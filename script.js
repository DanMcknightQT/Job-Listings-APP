const fireBaseURL = 'https://job-listings-app-21d09-default-rtdb.firebaseio.com/';
const jsonEXT = '.json';

(function(){
    $.ajax({
        type: "GET",
        url: `${fireBaseURL}${jsonEXT}`,
        success: (data) => {
            let jobData = {...data}

            Object.values(jobData).forEach(value => {
                
                let jobDataToArray = Object.values(value)

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

            Object.values(jobDataSortList).forEach(item => {
                let timePosted = item[0]
                let newT = item[1]
                let featured = item[2]
                let companyName = item[3]
                let contract = item[4]
                let id = item[5]
                let level = item[6]
                let location = item[7]
                let logo = item[8]
                let title = item[9]
                let role = item[10]
                let tags = item[11]

                let JobListingFeatured = `
                    <div class="jobListing">
                    <div id="logoCircle"> <img id="logoImage" src="${logo}"> </img> </div>
                    <div id="companyName"> ${companyName} </div>
                    <div id="featuredTag">FEATURED</div>
                    <div id="position"> ${title} </div>
                    <div id="timeLocaleTags">${timePosted} • ${contract} • ${location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags"><button href="#" id="tagButtonID" class="requirementsTagsButton">
                    ${tags.join('</button> <button href="#" id="tagButtonID" class="requirementsTagsButton">')}
                    </button>
                    </div>
                    </div>`
                let JobListingNew = `
                    <div class="jobListing">
                    <div id="logoCircle"> <img id="logoImage" src="${logo}"> </img> </div>
                    <div id="companyName"> ${companyName} </div>
                    <div id="newTag">NEW!</div>
                    <div id="position"> ${title} </div>
                    <div id="timeLocaleTags">${timePosted} • ${contract} • ${location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags"><button href="#" id="tagButtonID" class="requirementsTagsButton">
                    ${tags.join('</button> <button href="#" id="tagButtonID" class="requirementsTagsButton">')}
                    </button>
                    </div>
                    </div>`
                let JobListingNewFeatured = `
                    <div class="jobListing">
                    <div id="logoCircle"> <img id="logoImage" src="${logo}"> </img> </div>
                    <div id="companyName"> ${companyName} </div>
                    <div id="newTag">NEW!</div>
                    <div id="featuredTag">FEATURED</div>
                    <div id="position"> ${title} </div>
                    <div id="timeLocaleTags">${timePosted} • ${contract} • ${location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags"><button href="#" id="tagButtonID" class="requirementsTagsButton">
                    ${tags.join('</button> <button href="#" id="tagButtonID" class="requirementsTagsButton">')}
                    </button>
                    </div>
                    </div>`
                let JobListingDefault = `
                    <div class="jobListing">
                    <div id="logoCircle"> <img id="logoImage" src="${logo}"> </img> </div>
                    <div id="companyName"> ${companyName} </div>
                    <div id="position"> ${title} </div>
                    <div id="timeLocaleTags">${timePosted} • ${contract} • ${location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags"><button href="#" id="tagButtonID" class="requirementsTagsButton">
                    ${tags.join('</button> <button href="#" id="tagButtonID" class="requirementsTagsButton">')}
                    </button>
                    </div>
                    </div>`
                    

                if(newT == true && featured == true){
                    $('.mainContentContainer').append(JobListingNewFeatured)
                } else if(newT == true && featured == false){
                    $('.mainContentContainer').append(JobListingNew)
                } else if(newT == false && featured == true){
                    $('.mainContentContainer').append(JobListingFeatured)
                } else if(newT == false && featured == false){
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
