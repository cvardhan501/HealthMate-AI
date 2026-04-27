async function getAdvice() {
  const symptoms = document.getElementById("symptoms").value.trim();
  const age = document.getElementById("age").value.trim();
  const allergies = document.getElementById("allergies").value.trim();
  const conditions = document.getElementById("conditions").value.trim();

  const result = document.getElementById("result");

  if (!symptoms) {
    alert("Please enter symptoms");
    return;
  }

  // Loading
  result.innerHTML = "⏳ Getting advice...";

  try {
    const res = await fetch("/healthmate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ symptoms, age, allergies, conditions })
    });

    const data = await res.json();

    if (data.error) {
      result.innerHTML = "⚠️ " + data.error;
      return;
    }

    // 🚨 Emergency
    if (data.emergency) {
      result.innerHTML = `
        <div style="color:red; font-weight:bold;">
          🚨 ${data.message}
        </div>
      `;
      return;
    }

    // Normal UI
    result.innerHTML = `
  <div class="advice-card">
    <h3>💊 Medicines</h3>

    ${data.medicines.map(m => `
      <div class="medicine-item">
        <h4>${m.name}</h4>
        <p><b>Brands:</b> ${m.brands}</p>
        <p><b>Use:</b> ${m.use}</p>
        <p class="warning">⚠ ${m.warning}</p>
      </div>
    `).join("")}

    <h3>🏠 Home Care</h3>
    <ul>${data.homeCare.map(i => `<li>${i}</li>`).join("")}</ul>

    <h3>⏳ Recovery</h3>
    <p>${data.recovery}</p>

    <h3>⚠ Warnings</h3>
    <ul>${data.warnings.map(i => `<li>${i}</li>`).join("")}</ul>

    <h3>🚨 When to see doctor</h3>
    <ul>${data.doctor.map(i => `<li>${i}</li>`).join("")}</ul>

    <h3>❗ Disclaimer</h3>
    <p>${data.disclaimer}</p>
  </div>
`;

  } catch (err) {
    result.innerHTML = "⚠️ Cannot connect to server";
  }
}
