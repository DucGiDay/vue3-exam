<template>
<div class="full">
  <div class="aside">
    <div class="user-info">
      <h3>Admin</h3>
      <span>admin@gmail.com</span>
    </div>
    <div class="aside-menu">
      <ul>
        <li><router-link to="#">Go to view 1</router-link></li>
        <li><router-link to="#">Go to view 2</router-link></li>
      </ul>
    </div>

    <div class="">
      <!-- <router-link to="/test">Logout</router-link> -->
      <button type="button" class="btn-logout" @click="showModal">
        Log Out!
      </button>
      
      <Modal 
        v-show="isModalVisible" 
        @close="closeModal" 
        v-bind:props="props" 
        v-on:accept-click="handleClickInParent"  
      />
    </div>
  </div>
  <div class="main">
    <router-view />
  </div>
</div>
  
</template>

<script>
import Modal from '../components/modals/LogoutModal.vue';
export default {
  name: 'AppLayout1',
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      title: "",
      message: "",
      acceptLabel: "",
      cancelLabel: "",
      props: {}
    };
  },
  mounted() {
    this.title = "SIGN OUT"
    this.content = "Are you sure you wanna sign out?"
    this.acceptLabel = "Accept"
    this.cancelLabel = "Cancel"
    this.props = {
      title: this.title,
      content: this.content,
      acceptLabel: this.acceptLabel,
      cancelLabel: this.cancelLabel
    } // em chưa biết truyền cùng lúc nhiều biến cho component con nên em cho nó vào 1 object rồi vứt xuống :v
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    /// Hứng dữ liệu từ component con gửi lên
    handleClickInParent (title, content) {
      console.log("title: ", title)
      console.log("content: ", content)
    }
  }
};
</script>

<style scoped>
#app{
  margin: 0px;
}
.full{
  display: flex;
}
.full .aside{
  position: relative;
  background-color: rgb(33, 33, 33);
  max-width: 300px;
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
}

.full .aside .user-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0px;
}
.full .aside .aside-menu ul{
  display: flex;
  flex-direction: column;
}
.full .aside .aside-menu ul li{
  display: flex;
}
.full .aside .aside-menu ul li a{
  padding: 15px 20px;
  width: 100%;
  cursor: pointer;
}
.full .aside .aside-menu ul li a:hover{
  background-color: rgb(40, 39, 39);
}
.full .aside .aside-menu ul li.active{
  background-color: rgb(40, 39, 39);
}
.btn-logout {
  position: absolute;
  bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: rgb(232, 64, 31);
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2;
}
.btn-logout:hover{
  color: rgb(236, 90, 61);
}
.full .main{
  display: flex;
  padding: 20px;
  width: 100%;;
}
</style>

