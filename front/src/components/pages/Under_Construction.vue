<template>
  <main class="main">
    <div class="main-content">
      <div class="bg uc">
        <img src="../../assets/under-construction.gif" style="margin: auto" />
      </div>
    </div>
  </main>
</template>

<script></script>

<style>
.bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 44px;
  overflow: auto;
  overflow-x: hidden;
}
.uc {
  display: flex;
  justify-content: center !important; /* align horizontal */
  align-items: center !important; /* align vertical */
  background: #fcfefc;
}
</style>
