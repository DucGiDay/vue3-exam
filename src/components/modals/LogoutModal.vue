<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <b>{{props.title}}</b>
        </slot>
        
      </header>
  
      <section class="modal-body">
        <slot name="body">
          {{props.content}}
        </slot>
      </section>
  
      <footer class="modal-footer">
        <div class="grid-contaiter">
          <button type="button" class="btn-accept" @click="acceptClick">
            {{props.acceptLabel}}
          </button>
          <button type="button" class="btn-cancel" @click="close">
            {{props.cancelLabel}}
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoutModal',
  props: ['props'],
  methods: {
    close() {
      this.$emit('close');
    },
    acceptClick() {
      this.$emit('accept-click', this.props.title, this.props.content);
      this.close()
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  min-width: 400px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: black;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  font-weight: 300;
  color: black;
}


.btn-accept {
  color: white;
  background: #25b700;
  border: 1px solid #fff;
  border-radius: 2px;
  cursor: pointer;
  margin-right: .5rem;
  border-radius: 5px;
  padding: 10px 15px;
}
.btn-cancel {
  color: white;
  background: #db1919;
  border: 1px solid #fff;
  border-radius: 2px;
  cursor: pointer;
  margin-right: .5rem;
  border-radius: 5px;
  padding: 10px 15px;
}
.grid-contaiter {
  /* float: right; */
  display: flex;
  justify-content: end;
}
</style>