const fireBaseURL = 'https://job-listings-app-21d09-default-rtdb.firebaseio.com/'
const jsonEXT = '.json';

(function(){
    $.ajax({
        type: "GET",
        url: `${fireBaseURL}${jsonEXT}`,
        success: (data) => {
            let jobData = {...data}
            //console.log(jobData)

            Object.entries(jobData).forEach(([key, value]) => {
                //console.log('this is a value')


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
                    //$('.requirementsTags').append(tags)
                } else if(value.new == true && value.featured == false){
                    $('.mainContentContainer').append(JobListingNew)
                    //$('.requirementsTags').append(tags)
                } else if(value.new == false && value.featured == true){
                    $('.mainContentContainer').append(JobListingFeatured)
                    //$('.requirementsTags').append(tags)
                } else if(value.new == false && value.featured == false){
                    $('.mainContentContainer').append(JobListingDefault)
                    //$('.requirementsTags').append(tags)
                }



                console.log('end of iteration')
                

                    
                })



            // Object.values(jobList).forEach(item => {
            //     //console.log(jobList)
            //     //let tagsList = []
            //     let tagsP = item[11]
            //     let company = item[0]
            //     let contract = item[1]
            //     let value.featured = item[2]
            //     let level = item[4]
            //     let location = item[5]
            //     let logo = item[6]
            //     let value.new = item[7]
            //     let position = item[8]
            //     let posted = item[9]
            //     let role = item[10]
            //})

        },
        error: (error) =>{
            console.log('error');
        }
    })
})()


//let jobList = []
//console.log(tagsList)