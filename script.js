const fireBaseURL = 'https://job-listings-app-21d09-default-rtdb.firebaseio.com/'
const jsonEXT = '.json';

(function(){
    $.ajax({
        type: "GET",
        url: `${fireBaseURL}${jsonEXT}`,
        success: (data) => {
            let jobData = {...data}
            console.log(jobData)

            Object.entries(jobData).forEach(([key, value]) => {
                let companyName = key;
                let companyTitle = value.company;
                let jobContract = value.contract;
                let jobfeatured = value.featured;
                let jobid = value.id;
                let joblevel = value.level;
                let jobLocation = value.location;
                let jobLogo = value.logo;
                let jobNew = value.new;
                let jobPosition = value.position;
                let jobWhenPosted = value.postedAt;
                let jobRole = value.role;
                let jobTags = value.tags;
                let jobListing = [companyTitle, jobContract, jobfeatured, jobid, joblevel, jobLocation, jobLogo, jobNew, jobPosition, jobWhenPosted, jobRole, jobTags]
                jobList.push(jobListing)                
            })

            Object.values(jobList).forEach(item => {
                let tags = item[11]
                let company = item[0]
                let contract = item[1]
                let featuredT = item[2]
                let level = item[4]
                let location = item[5]
                let logo = item[6]
                let newT = item[7]
                let position = item[8]
                let posted = item[9]
                let role = item[10]

                console.log(tags)

                let JobListingFeatured = `
                    <div class="jobListing"
                    <div id="logoCircle"> <img id="logoImage" src="${logo}"> </img> </div>
                    <div id="companyName"> ${company} </div>
                    <div id="featuredTag">FEATURED</div>
                    <div id="position"> ${position} </div>
                    <div id="timeLocaleTags">${posted} • ${contract} • ${location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags">
                    ${tags}
                    </div>
                    </div>`
                let JobListingNew = `
                    <div class="jobListing">
                    <div id="logoCircle"> <img id="logoImage" src="${logo}"> </img> </div>
                    <div id="companyName"> ${company} </div>
                    <div id="newTag">NEW!</div>
                    <div id="position"> ${position} </div>
                    <div id="timeLocaleTags">${posted} • ${contract} • ${location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags">
                    ${tags}
                    </div>
                    </div>`
                let JobListingNewFeatured = `
                    <div class="jobListing">
                    <div id="logoCircle"> <img id="logoImage" src="${logo}"> </img> </div>
                    <div id="companyName"> ${company} </div>
                    <div id="newTag">NEW!</div>
                    <div id="featuredTag">FEATURED</div>
                    <div id="position"> ${position} </div>
                    <div id="timeLocaleTags">${posted} • ${contract} • ${location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags">
                    ${tags}
                    </div>
                    </div>`
                let JobListingDefault = `
                    <div class="jobListing">
                    <div id="logoCircle"> <img id="logoImage" src="${logo}"> </img> </div>
                    <div id="companyName"> ${company} </div>
                    <div id="position"> ${position} </div>
                    <div id="timeLocaleTags">${posted} • ${contract} • ${location}</div>
                    <div class="break"></div>
                    <div class="requirementsTags">
                    ${tags}
                    </div>
                    </div>`

                if(newT == true && featuredT == true){
                    $('.mainContentContainer').append(JobListingNewFeatured)
                } else if(newT == true && featuredT == false){
                    $('.mainContentContainer').append(JobListingNew)
                } else if(newT == false && featuredT == true){
                    $('.mainContentContainer').append(JobListingFeatured)
                } else if(newT == false && featuredT == false){
                    $('.mainContentContainer').append(JobListingDefault)
                }
            })

        },
        error: (error) =>{
            console.log('error');
        }
    })
})()

let jobList = []
console.log(jobList)