<script setup>
import { ref } from 'vue';
import ArrayCheckbox from './components/ArrayCheckbox.vue';
import CountriesList from './components/CountriesList.vue';
import FacColors from './components/FacColors.vue';
import Quize from './components/Quize.vue';
import SampleSigninSingnUp from './components/SampleSigninSingnUp.vue';
import SelectInput from './components/SelectInput.vue';
import SimpleCheckBox from './components/SimpleCheckBox.vue';
import SingIn from './components/SingIn.vue';
import SingUp from './components/SingUp.vue';

function compotentLoad(x)
{
  let dyCom = 0;
  dyCom = x

}
</script>

<template>
  <!-- <CountriesList/> -->
  <!-- <Quize/> -->
  <!-- <SelectInput/> -->
  <!-- <SampleSigninSingnUp/> -->
  <!-- <SimpleCheckBox/> -->
  <!-- <ArrayCheckbox/> -->
  <!-- <FacColors/> -->
  <component :is="dyCom ? dyCom : SingIn" ></component>
</template>

<style scoped>

</style>
