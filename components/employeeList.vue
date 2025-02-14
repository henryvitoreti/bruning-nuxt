<script setup>
import { ref } from 'vue';

const employees = ref([
  { id: 1, code: '004', name: 'João Silva da Costa e Oliveira', birthdate: '15/05/1990' },
  { id: 2, code: '338', name: 'Maria Oliveira', birthdate: '22/08/1985' },
  { id: 3, code: '475', name: 'Carlos Souza', birthdate: '10/12/1978' },
  { id: 4, code: '498', name: 'Alberto da Silva', birthdate: '12/05/1988' },
  { id: 5, code: '795', name: 'Jorge Nascimento', birthdate: '21/02/2004' },
  { id: 6, code: '948', name: 'Francisco Pereira', birthdate: '26/10/2001' },
]);

const showConfirmation = ref(false);
const deletedEmployeeName = ref('');
const deletedEmployeeId = ref(null);

const truncateName = (name) => {
  return name.length > 30 ? name.slice(0, 30) + '...' : name;
};

const view = (employee) => {
  alert(`Visualizar: ${employee.name}`);
};

const edit = (employee) => {
  alert(`Editar: ${employee.name}`);
};

const remove = (employee) => {
  deletedEmployeeName.value = employee.name;
  deletedEmployeeId.value = employee.id;
  showConfirmation.value = true;

  setTimeout(() => {
    showConfirmation.value = false;
  }, 5000);
};

const restore = () => {
  showConfirmation.value = false;
  alert(`Restaurar: ${deletedEmployeeName.value}`);
};
</script>

<template>

  <CustomCard>
    <template #body>
      <div v-for="employee in employees" :key="employee.id" class="list-item">
        <div class="list-info">
          <span class="text-item-bold" :title="employee.name">
            {{ employee.code }} - {{ truncateName(employee.name) }}
          </span>
          <span class="text-item-bold">Nascimento: <span class="text-item">{{ employee.birthdate }}</span></span>
        </div>
        <div class="list-actions">
          <button class="btn btn-primary btn-sm" title="Visualizar" @click="view(employee)">
            <i class="bi bi-eye" style="font-size: 1.1rem;"></i>
          </button>
          <button class="btn btn-warning btn-sm" title="Editar" @click="edit(employee)">
            <i class="bi bi-pencil" style="font-size: 1.1rem;"></i>
          </button>
          <button class="btn btn-danger btn-sm" title="Excluir" @click="remove(employee)">
            <i class="bi bi-trash" style="font-size: 1.1rem;"></i>
          </button>
        </div>
      </div>
    </template>
  </CustomCard>

  <div v-if="showConfirmation" class="confirmation-card">
    <div class="confirmation-content">
      <p>Colaborador <strong>{{ deletedEmployeeName }}</strong> excluído. Deseja <a class="restore-link" @click="restore">Restaurar</a>?</p>
    </div>
  </div>
</template>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.list-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.text-item-bold {
  font-weight: bold;
  font-size: 1.1rem;
}

.text-item {
  color: #666;
}

.list-actions {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.confirmation-card {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffebee;
  border: 2px solid #ff0000;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease;
  z-index: 1000;
  transition: border-color 0.3s ease;
}

@media (max-width:  768px) {
  .confirmation-card {
    position: fixed;
    right: unset;
    justify-self: anchor-center;
  }
}

.confirmation-card:hover {
  border-color: #cc0000;
}

.confirmation-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.restore-link {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 5px;
}

.restore-link:hover {
  color: #0056b3;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-out {
  animation: fadeOut 0.5s ease forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>