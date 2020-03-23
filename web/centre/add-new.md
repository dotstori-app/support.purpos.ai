---
layout: post
title: Add New Centre
grand_parent: Web
parent: Centre
nav_order: 1
has_toc: false
---

<script src="/auth.js"></script>

# Add New Centre

To add a new center. Please click on <a>Add New</a> from <a href="https://app.purpos.ai/groups" target="_blank">https://app.purpos.ai/groups</a> page and please fill the basic information.

![Centre screenshot](/assets/images/centre/add-new.jpg)
<br /><br />
![Centre screenshot](/assets/images/centre/add-new-form.jpg)

#### Help

-   Step 1: Click on “Add New” button
-   Step 2: Fill Center Name, Type, Category, Area Name, Opening Hours, Closing Hours, Address, Centre Photo.
-   Step 3: Click “Submit” to create a center
-   Step 4: Click on the created center to navigate.
-   Step 5: If you want to create another centre click on the logo to take you back to centres dashboard.

<br />

<script>
  const page_queryString = window.location.search;
const page_urlParams = new URLSearchParams(page_queryString);
var is_onboard = page_urlParams.get('onboard') || '';
if (is_onboard) {
  document.write('<a href="/web/subscriptions/add-new.html?onboard=true" style="float:right;" class="btn btn-primary fs-5 mb-4 mb-md-0 mr-2">Next: Create Subscriptions</a>');
}
</script>

<br />
<br />
