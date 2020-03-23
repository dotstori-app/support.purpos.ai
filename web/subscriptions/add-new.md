---
layout: post
title: Add New Subscription
grand_parent: Web Application
parent: Subscriptions
nav_order: 1
has_toc: false
---

<script src="/auth.js"></script>

# Add New Subscription

To add a new subscription. Please click on <a>Configurations</a> from the left menu and click on <a>Add New</a> to fill the details. You can create monthly, Day based or Session-based subscriptions.

![](/assets/images/subscriptions/add-new.jpg)

<br />

![](/assets/images/subscriptions/submit.jpg)

<br />

#### Help

-   Step 1: Click on “Add New” Button
-   Step 2: Fill the name of subscription, eg. Basic 3 Months Package, Select type (Monthly Package, Daily Package or Session-based Package” <br />
    -- If “Monthly” package, please select number of months (You can select up to 12 months). <br />
    ![](/assets/images/subscriptions/monthly.png) <br />
    -- If the “Days” package, select the number of days.<br />
    ![](/assets/images/subscriptions/days.png) <br />
    -- If “Sessions” package, select minutes (30, 60, 90, 120, minimum 30 minutes to 2hours). Enter the number of sessions in session count, for eg. 20 sessions. Enter the number of days that the session is valid. For example 20 sessions and valid up to 60 days. <br />
    ![](/assets/images/subscriptions/session.png) <br />
-   Step 3: Enter the amount of the fees
- Steo 4: Click “Submit” to create the subscription

<br />

<script>
  const page_queryString = window.location.search;
const page_urlParams = new URLSearchParams(page_queryString);
var is_onboard = page_urlParams.get('onboard') || '';
if (is_onboard) {
  document.write('<a href="/web/students/add-new.html" style="float:right;" class="btn btn-primary fs-5 mb-4 mb-md-0 mr-2">Next: Add Student/Member</a>');
}
</script>

<br />
<br />
