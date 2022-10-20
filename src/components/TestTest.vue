<template>
  <button @click="onChangeMaxLength">Change max lenghth</button>
  <br/>
  <textarea v-model="text" type="text" placeholder="ví dụ" rows="4"></textarea>
  <br />Dữ liệu Text:
  <p>{{`${length}/${maxLength}`}}</p>
  <p>{{text}}</p>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      length: 0,
      maxLength: 0
    }
  },

  mounted() {
    this.maxLength = this.onChangeMaxLength()
  },

  watch: {
    text() {
      let str = this.text
      const length = str.length

      if ((length - 1) === this.maxLength) {
        const newStr = str.slice(0, this.maxLength)
        this.text = newStr
      }
      this.length = this.text.length
    }
  },
  methods: {
    inputMaxlength() {
      var maxLength
      do {
        maxLength = window.prompt("imput the max length", 0)
      } while (!Number(maxLength) || Number(maxLength) <= 0)
      return Number(maxLength)
    },
    onChangeMaxLength() {
      this.maxLength = this.inputMaxlength()
    }
  },
}
</script>

<style>

</style>
