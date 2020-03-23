---
layout: post
title: Add New Trainer/Staff
grand_parent: Web Application
parent: Trainers/Staffs
nav_order: 1
has_toc: false
---

<script src="/auth.js"></script>

# Add New Trainer/Staff

To add a new Trainer/Staff. Please click on <a>Trainers</a> / <a>Staffs</a> from the left menu and click on <a>Add New</a> to fill basic detail.

![](/assets/images/trainers/add-new.jpg)

#### Help
- Step 1: Click on “Add New” button
- Step 2: Fill the basic details

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
