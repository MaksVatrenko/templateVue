<template>
  <div class="layout default-layout" ref="page">
    <LayoutResize class="layout__resize">
      <Header class="layout__header" ref="header" />
      <main id="main-content" class="layout__main">
        <Index />
      </main>
      <Footer class="layout__footer" />
      <ModalWrapper class="layout__modal" />
    </LayoutResize>
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import LayoutResize from '@/components/layout/Resize.vue'
import ModalWrapper from '@/components/layout/Modal.vue'
import Index from '@/views/Index.vue'
</script>

<style scoped lang="scss"></style>
