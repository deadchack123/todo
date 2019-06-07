<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
  color: #909b9c;
  font-size: 90%;
}
a {
  text-decoration: none;
}
#app {
  width: 50%;
  margin: 10% auto;
}

.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-wrap: nowrap;
}

h1 {
  text-transform: uppercase;
  font-weight: 700;
  color: #2c3e50;
  font-size: 210%;
  margin-bottom: 15px;
}

input[type="text"] {
  width: 50%;
  font-size: 100%;
}

.mainButton {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0 0 0;
}
.mainButton .button {
  background-color: #00bef1;
  border-radius: 5px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  cursor: pointer;
}

.mainButton .button:not(:last-child) {
  margin-right: 1%;
}

.mainButton .button:hover,
.mainButton .button:active {
  background-color: #008db4;
}
.col {
  width: 100%;
  text-align: center;
}

.list {
  margin: 3%;
  padding: 0;
  list-style: none;
}

.list li {
  display: flex;
  justify-content: space-between;
  margin: 1% 0;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 140%;
}

p {
  margin: 0;
  padding: 0;
  word-break: break-all;
  color: #2c3e50;
}
.iconButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 20%;
}
.iconButton a {
  margin: 0;
  padding: 0;
  width: 20%;
  height: 15%;
  display: flex;
  align-items: center;
}
.iconButton a img {
  max-width: 100%;
  margin: 0 5% 0 0;
}
.secondButton {
  margin-top: 2%;
}

.secondButton .button:not(:last-child) {
  margin-right: 0.5%;
}

.secondButton .button {
  background-color: #00bef1;
  border-radius: 5px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  cursor: pointer;
}

.active {
  background-color: #00c8ff;
}
.is-link {
  background: #4671d5 !important;
}
.is-Done {
  background-color: #85e5ff !important;
}
.disabled {
  background-color: #0197c0 !important;
}

@media screen and (max-width: 600px) {
  #app {
    width: 100%;
    margin: 0;
  }
  .mainButton .button:hover,
  .mainButton .button:active {
    background-color: #00bef1;
  }
}
</style>
