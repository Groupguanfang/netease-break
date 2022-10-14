<script>
import { getLink } from "./api"

export default {
  name: "app",
  data() {
    return {
      url: "",
      id: "",
      buttonText: "请填写音乐id",
      disabled: true
    }
  },
  methods: {
    async action() {
      this.buttonText = "加载中"
      const data = await getLink(this.id)
      this.url = data.data.data[0].url
      this.buttonText = "狗叼，点击下载吧"
      this.disabled = false
    }
  },
}
</script>

<template>
  <div class="root">
  <div class="row">
      <input v-model="id" placeholder="请输入音乐id"/>
      <button @click="action">></button>
    </div>
    <a :href="url"><button :disabled="disabled">{{ buttonText }}</button></a>
  </div>
</template>

<style scoped>
input {
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  background-color: #1a1a1a;
  font-size: 1em;
  transition: border-color 0.25s;
}
input:focus {
  outline: 4px auto -webkit-focus-ring-color;
}
a {
  width: 100%;
}
.row {
  display: flex;
}
</style>
