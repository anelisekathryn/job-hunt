# Job Hunt Tracker

https://github.com/anelisekathryn/job-hunt

This app is designed to organize of all those job applications when you're on the hunt for a new career. Enter important job details and keep track of your application status.

## Wireframes

![image](https://user-images.githubusercontent.com/90531123/138368114-792f12c0-504d-4de8-9ea2-903388a2deaf.png)

![image](https://user-images.githubusercontent.com/90531123/138368173-4cf974f1-4838-4e5d-8ba0-ef9d68e35f36.png)

## API & Data Sample

API Documentation: https://airtable.com/app3Ssx5AebBUdzmn/api/docs

```
{
    "records": [
        {
            "id": "recS4PGiylv5HqFaN",
            "fields": {
                "salary": "$70,000",
                "Status": "Application Submitted",
                "notes": "Notes about the job here. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
                "name": "Front End Developer",
                "company": "Amazon",
                "link": "https://www.amazon.jobs/en/",
                "description": "Front end web developer description here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
            },
            "createdTime": "2021-10-21T23:12:50.000Z"
        },
        {
            "id": "recuWudNvwd0U915N",
            "fields": {
                "salary": "not specified",
                "Status": "Application In Progress",
                "notes": "Notes about the job here. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
                "name": "Junior Mobile Developer",
                "company": "Shopify",
                "link": "https://www.shopify.com/careers/search",
                "description": "Junior mobile developer job description here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            },
            "createdTime": "2021-10-21T23:12:50.000Z"
        },
        {
            "id": "recglvnnVtIbeLWCn",
            "fields": {
                "salary": "$60,000–$80,000 DOE",
                "Status": "Interviewing",
                "notes": "Notes about the job here. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
                "name": "Web Designer",
                "company": "Air bnb",
                "link": "https://careers.airbnb.com/",
                "description": "Web designer description goes here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            },
            "createdTime": "2021-10-21T23:12:50.000Z"
        },
        {
            "id": "reckONrKAiQnKD8eV",
            "fields": {
                "salary": "$40/hour",
                "Status": "Offer Accepted",
                "notes": "Notes about the job here. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
                "name": "Contract Developer",
                "company": "Adobe",
                "link": "https://www.adobe.com/careers.html",
                "description": "Junior developer placeholder description. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            },
            "createdTime": "2021-10-21T23:22:50.000Z"
        }
    ]
}
```

## MVP FEATURES

- Home page listing current job applications and clickable links to job details.
- Detail page for each job application.
- Form to create new job application tracking.
- Include header and footer with links/nav.
- Use CSS to style and create media queries.

## POST MVP FEATURES

- Change status on homepage list (not just on detail page)
- Use Bootstrap or MUI to incorporate additional styling.
- Allow user to edit job details.
- Allow user to delete or "archive" job application.
- Add a second API for random motivational quotes on home page
- Add a resource section with links to career sites, etc.
- Add to-do list within each job detail page.
- Add a user log-in so the app can be used in real-life scenarios.

## Project Schedule

| Date          | Deliverable                                                       |   Status   |
| :------------ | :---------------------------------------------------------------- | :--------: |
| October 21    | Prep project pitch / draw wireframes / Establish API with Postman |  Complete  |
| October 22    | Project Pitch / Connect API / Set up React App                    |  Complete  |
| October 23–24 | Complete homepage and detail page components                      |  Complete  |
| October 25    | Work on components                                                |  Complete  |
| October 26    | Deploy Project / Work on components                               |  Complete  |
| October 27    | CSS Styling / Post MVP Goals                                      |  Complete  |
| October 28    | Post MVP goals / Code clean up                                    | Incomplete |
| October 29    | Project presentation                                              | Incomplete |

## Project Timeframe:

| Component | Priority | Estimated Time | Actual Time |
| :-------- | :------: | :------------: | :---------: |
| item here |    H     |     x hrs      |    x hrs    |
| item here |    H     |     x hrs      |    x hrs    |
| item here |    H     |     x hrs      |    x hrs    |
| item here |    H     |     x hrs      |    x hrs    |
| item here |    H     |     x hrs      |    x hrs    |
| item here |    H     |     x hrs      |    x hrs    |
| item here |    H     |     x hrs      |    x hrs    |
| item here |    H     |     x hrs      |    x hrs    |
| item here |    H     |     x hrs      |    x hrs    |
| item here |    L     |     x hrs      |    x hrs    |
| item here |          |     xx hrs     |   xx hrs    |

## SWOT Analysis:

**Strengths:**

I have a good understanding of what I want my app to look like and what I want it to do. I have a strong wireframe and plan to know what needs to be done in order to complete the MVP and post MVP goals. I have a strong understanding of the concept of react and how to organize and set up the frame of my components, routes, and links.

**Weaknesses:**

The execution of the API and actually creating the routes and links correctly can be more of a challenge for me. I understand the concept but I am often hung up on small nuances of each project that challenge my knowledge and usually necessitate additional help.

**Opportunities:**

There is a lot of opportunity in my Post MVP goals to learn more concepts and challenge my app to be more usable in real life.

**Threats:**

Time will be a threat — it will be important to stay organized and focus on the completion of the MVP goals first and not get caught up in the desire to make everything perfect up front.
