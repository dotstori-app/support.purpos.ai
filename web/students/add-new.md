---
layout: post
title: Add New Student/Member
grand_parent: Web
parent: Students/Members
nav_order: 1
has_toc: false
---

<script src="/auth.js"></script>

# Add New Student/Member

To add a new Student/Member. Please click on <a>Students</a> / <a>Members</a> from the left menu and click on <a>Add New</a> to fill basic detail, subscription detail, category details, and profile details.

![](/assets/images/students/student-add-new.gif)

<br />

There are four steps in adding a new student. <br />
![](/assets/images/students/student-tab.png)

<br />

![](/assets/images/students/add-student-1.jpg)

<br />

![](/assets/images/students/add-student-2.jpg)

<br />

![](/assets/images/students/add-student-4.jpg)


#### Help

-   Step 1: Click on “Add New” Button
-   Step 2: Fill the basic details like name and mobile
-   Step 3: Assign Subscription and plan details (Your subscription list will show up here with amount and dates auto-filled based on the subscription type)
-   Step 4: Enter Category details
-   Step 5: Enter Profile details
-   Step 6: Click “Submit” to add new Student/Member


<br />

<script>
  const page_queryString = window.location.search;
const page_urlParams = new URLSearchParams(page_queryString);
var is_onboard = page_urlParams.get('onboard') || '';
if (is_onboard) {
  document.write('<a href="/web/trainers/add-new.html" style="float:right;" class="btn btn-primary fs-5 mb-4 mb-md-0 mr-2">Next: Add Trainers</a>');
}
</script>

<br />
<br />
