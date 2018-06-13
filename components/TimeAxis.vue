<template>
  <section class="time-axis">
    <div v-for="(item, index) in list" :key="index" class="axis" v-bind:class="{closure: index == length}">
      <slot name="time" v-bind:row="item"></slot>
      <div class="content">
        <slot name="content" v-bind:row="item"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      length: 0,
    };
  },

  props: {
    list: {
      type: Array,
    },
  },

  mounted() {
    if (!this.list) return;
    this.length = this.list.length - 1;
  },

  watch: {
    list(nv, ov) {
      if (!nv) return;
      this.length = nv.length - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.time-axis {
  .axis {
    display: flex;

    .content {
      position: relative;
      display: flex;
      min-height: 1.22rem;
      margin-left: .04rem;
    }

    .content::before {
      display: inline-block;
      margin: 0rem 0.22rem 0rem 0rem;
      content: '';
      width: .02rem;
      height: 100%;
      background-color: rgba(213, 184, 115, 1);
    }

    .content::after {
      position: absolute;
      content: '';
      display: block;
      width: .1rem;
      height: .1rem;
      top: 0rem;
      left: -.04rem;
      background-color: rgba(213, 184, 115, 1);
      border-radius: 50%;
    }
  }

  .closure {
    .content::before {
      display: inline-block;
      margin: 0rem .22rem 0rem 0rem;
      content: '';
      width: .02rem;
      height: 0rem;
      background-color: rgba(213, 184, 115, 1);
    }
  }
}
</style>
