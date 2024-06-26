document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");
  if (!form) {
    console.error("Formulário não encontrado!");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const petName = document.getElementById("petName").value;
    const serviceType = document.getElementById("serviceType").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const additionalInfo = document.getElementById("additionalInfo").value;

    if (!petName.trim() || !serviceType.trim() || !appointmentDate.trim()) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const appointmentData = {
      nomeDoPet: petName,
      tipoDoServico: serviceType,
      dataDoServico: appointmentDate,
      informacoesAdicionais: additionalInfo,
    };
    try {
      let pet = JSON.parse(localStorage.getItem("pet")) || [];
      pet.push(appointmentData);
      localStorage.setItem("pet", JSON.stringify(pet));
      alert("Agendamento salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar os dados: ", error);
      alert("Falha ao salvar o agendamento.");
    }
    this.reset();
  });
});
