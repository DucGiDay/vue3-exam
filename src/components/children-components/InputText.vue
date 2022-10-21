<template>
  <label v-bind:for="props.idAndName" class="label-input">{{props.label}}:</label>
  <br />
  <input v-bind:type="props.type"  v-bind:id="props.idAndName"  v-bind:name="props.idAndName"  v-bind:placeholder="props.placeholder" class="input-text"/>
  <!-- <button @click="clickHere">click here</button> -->
</template>

<script>
export default {
  name: "InputText",
  props: ['props'],
  methods: {
    clickHere() {
      console.log(this.props)
    }
  }

}
</script>
<style>
.label-input {
  position: absolute;
  left: 13%;
  /* right: inherit; */
}
.input-text {
  border: 2px solid #eee;
  width: 70%;
  border-radius: 4px;
  padding: .6em .6em;
  margin: .5rem 0 1.5rem;
}
</style>