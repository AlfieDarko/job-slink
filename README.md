
<h1 align="center">JobSlink</h1>

<h6 align="center">

 A web based job allocation system that allows businesses to manage sub-contractor tasks via SMS.

</h6>


<div align="center">
<hr>

<b>
<br>Contents:<br>
[Spec ](#spec) |
[User Stories ](#user-stories) |
[Feature List ](#feature-list) |
[Models ](#models) |
<div align="center">

[Technologies ](#technologies) |
[Why These ](#why-these) |
[Installation ](#installation) |
[Usage Examples ](#usage) |

</div>
<div align="center">

[Development Setup ](#development-setup) |
[Release History ](#release-history) |
[TODO ](#todo) |
[Meta ](#meta) |
[Contributing ](#contributing) |


</div>

<hr>

</div>
</b>

<div align="center">

<b>Follow the JobSlink development as it happens!</b><br>

<a href="https://www.medium.com/JobSlink"><img src="https://cdn.mos.cms.futurecdn.net/xJGh6cXvC69an86AdrLD98-320-80.jpg"></a>
<br>

<a href="https://www.trello.com/jobslink-dev-board"><img src="https://static.crozdesk.com/web_app_library/providers/logos/000/002/374/original/atlassian-trello-1502570118-logo.png?1502570118"></a>

</div>
<hr>
## Intro

This idea had come out of our company ClickCleanit losing a valuable client due to miscommunication between our company and sub-contractors regarding job details. I felt we needed more of our communications recorded and sent digitally.<br>

I then realised this is something that is faced by alot of other companies in this industry so I decided to develop a demo product that provides a solution to this problem. <br> I spoke to the other co-founders to find out what their needs was in a system like this and I developed a spec based on this.

## Spec

Our users can buy a monthly account (or use a demo account in this instance) so that they can hold all their contractor details and assign jobs via the JobSlink system.

Users can assign them manually or decide that they can let JobSlink assign them automatically, according to job acceptance rate and how close that contractor is to the job. <br> The aim is to automate job allocation in order to free up time for business owners and staff management to focus on more important tasks.

Job assignments are sent via SMS and all a contractor has to do is reply 'OK' to accept a job. <br> When the job is finished, the contractor replies 'DONE' & the job will be marked as complete on the system.

This can potentially save businesses alot of time especially when it comes to routine tasks that do not need a certain level of Owner-Contractor communication.


## User Stories
> As a User,<br>
> So that I can have contractors details on standby,<br>
> I want to be able to save their details to a contact list.

> As a User,<br>
> So that I can manage my contact book,<br>
> I want to be able to add, remove and edit contacts at will.

> As a User,<br>
> So that my contractors can get job details,<br>
> I want to be able to assign jobs to workers on the contact list.

> As a User,<br>
> So that I can know which contractor done a certain job last week,<br>
> I want to be able to view a contractors jobs history.

> As a User,<br>
> So I can chck if there are any outstanding jobs,<br>
> I want to able to check complete and incomplete jobs.

> As a User,<br>
> So I can assign a job to the closest contractor,<br>
> I want to be able to view contractors by area.

> As a Contractor,<br>
> So I can know where to go to complete a job,<br>
> I want to recieve a text with the time and location details of a job.

> As a Contractor,<br>
> So I can let the employer know I have accepted the job,<br>
> I can reply 'OK' to a job text to mark it as accepted.

> As a Contractor,<br>
> So I can let the employer know I have finished their job,<br>
> I can reply 'DONE' to a job text to mark it as complete.

## Feature List
#### MVP
> Users can
- CRUD Contractors
- CRUD Jobs
- Assign Jobs to contractors
- Send Contractors Job details

#### (Post MVP)
>Users can:
- Check contractors by location
- Check contractors by acceptance rate
- auto-allocate job to nearest contractor
- auto-allocate job by acceptance rate.

>Contractors can:
- Reply OK to SMS to accept jobs
- reply DONE to indicate job finished
- find out if job allocated has already been accepted by the time they reply OK
#### (Super-Post MVP)
> React Native APP
## Models
<b>1st Proposal Class Diagram</b>


<img src="https://raw.githubusercontent.com/AlfieDarko/job-slink/master/Diagrams/classDiagram.jpg"><br><br>

<b>2nd Proposal Class Diagram</b>


## Technology Used
- Javascript
- Node.JS
- Prism
- GraphQL
- React
- ESLint (Linting)
- Jest  (Testing)
- Enzyme (Testing)
- Selenium (Integration Testing)
- CodeClimate(Coverage)
- TravisCI (CI/CD)
- AWS

#### Why these?

I wanted to develop my Javascript development skills while at the same time using brand new tech that I've not used before so that it provides me with enough technical challenge to make this a great learning experience.

I've been reading alot about GraphQL as I really like how easy queries are to write compared to things like SQL. GraphQL makes it super easy to expand and manipulate info from your API. I feel like this would be a great project to test this out and keep things interesting.

After researching testing technologies for React, I decided to go with Jest & Enzyme. I had been recommended these two by various Makers Academy alumni who test and develop React web apps in production.

Using TravisCI and AWS will allow me to develop my devops skills. Being able to deploy features as part of a dev team means this is an important part I need to master.

## Installation



## Usage example



## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

## Release History

## TODO

## Meta

Alfie Darko – me@alfiedarko.co.uk

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/AlfieDarko/job-slink](https://github.com/AlfieDarko/job-slink)

## Contributing

1. Fork it (<https://github.com/AlfieDarko/job-slink/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
