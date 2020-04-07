---
layout: default
title: Mobile Application
nav_order: 30
has_children: true
has_toc: false
---

# Mobile Applications

<script src="/auth.js"></script>

<style>
  .flex {display:flex;flex-wrap: wrap;}
  .flex .flex-item {
    flex-grow: 1;
    width: 10%;
    text-align: center;
    box-shadow: #ebebeb 1px 1px 5px 1px;
    border-radius: 8px;
    margin: 2%;
  }
  .flex-item a {
    border-radius: 8px;
    text-align:center;
    text-decoration: none;
    padding: 30px 20px;
    display:block;
    color:#222;
  }
  .flex-item img{
    vertical-align: top;
    width: 80%;
    opacity:0.75;
  }
  .flex-item a span{
    display:block;
    font-size: 1.5vh;
  }
</style>

<div class="flex">

  <div class="flex-item">
    <a href="/app/admin-app/">
      <img src="../assets/images/mobile.svg" width="75" />
      <span>Admin App</span>
    </a>
  </div>

  <div class="flex-item">
    <a href="/app/parent-app/">
      <img src="../assets/images/mobile.svg" width="75" />
      <span>Parent App</span>
    </a>
  </div>

  <div class="flex-item">
    <a href="/app/trainer-app/">
      <img src="../assets/images/mobile.svg" width="75" />
      <span>Trainer App</span>
    </a>
  </div>

</div>
