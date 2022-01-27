const fireBaseURL = 'https://job-listings-app-21d09-default-rtdb.firebaseio.com/';
const jsonEXT = '.json';

(function(){
    $.ajax({
        type: "GET",
        url: `${fireBaseURL}${jsonEXT}`,
        success: (data) => {
            let jobData = {...data}

            Object.entries(jobData).forEach(([key, value]) => {


                let JobListingFeatured = `
                    <div class="jobListing"
                    <div id="logoCircle"> <img id="logoImage" src="${value.logo}"> </img> </div>
                    <div id="companyName"> ${value.company} </div>
                    <div id="featuredTag">FEATURED</div>
                    <div id="position"> ${value.position} </div>
                    <div id="timeLocaleTags">${value.postedAt} • ${value.contract} • ${value.location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags"><button class="requirementsTagsButton">
                    ${value.tags.join('</button> <button class="requirementsTagsButton">')}
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
                    <div class="requirementsTags"><button class="requirementsTagsButton">
                    ${value.tags.join('</button> <button class="requirementsTagsButton">')}
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
                    <div class="requirementsTags"><button class="requirementsTagsButton">
                    ${value.tags.join('</button> <button class="requirementsTagsButton">')}
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
                    <div class="requirementsTags"><button class="requirementsTagsButton">
                    ${value.tags.join('</button> <button class="requirementsTagsButton">')}
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


$(document).on("click", ".requirementsTagButton", function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    console.log('test')

})