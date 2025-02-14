<script setup>
import {defaultHead} from "~/composables/useHead.js";
import EmployeeList from "~/components/employeeList.vue";

defaultHead('Listagem');

const createPerson = () => {
  alert('Criar nova pessoa');
};
</script>

<template>
  <CustomCard class="mb-5">
    <template #header>
      <h2 class="card-title">Colaboradores</h2>
      <button class="btn btn-info btn-sm" title="Criar">
        <i class="bi bi-plus" style="font-size: 1.1rem;"></i>
      </button>
    </template>
  </CustomCard>
  <EmployeeList :people="people" @view="viewPerson" @edit="editPerson" @delete="deletePerson" />
</template>