<template>
  <div>
    <slotchild>
      <template v-slot:one>
        <p>1插槽</p>
      </template>
      <template v-slot:two> 2插槽 </template>
    </slotchild>
  </div>
</template>

<script>
import slotchild from "../components/slotchild.vue";
export default {
  components: {
    slotchild,
  },
  data() {
    return {};
  },
};
</script>
