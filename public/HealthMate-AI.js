// const chatBox = document.getElementById("chatBox");

// async function sendMessage() {
//   const symptoms = document.getElementById("symptoms").value.trim();
//   const age = document.getElementById("age").value.trim();
//   const allergies = document.getElementById("allergies").value.trim();
//   const conditions = document.getElementById("conditions").value.trim();

//   if (!symptoms) {
//     alert("Please enter symptoms");
//     return;
//   }

//   addMessage(
//     `Symptoms: ${symptoms}\nAge: ${age || "Not provided"}\nAllergies: ${allergies || "None"}\nConditions: ${conditions || "None"}`,
//     "user"
//   );

//   clearInputs();

//   const loadingBubble = addMessage(
//     `<div class="loading"><div class="loader"></div><span>HealthMate AI is thinking...</span></div>`,
//     "bot",
//     true
//   );

//   try {
//     const res = await fetch("http://localhost:3000/healthmate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ symptoms, age, allergies, conditions })
//     });

//     const data = await res.json();

//     if (data.error) {
//       loadingBubble.innerText = "⚠️ " + data.error;
//       return;
//     }

//     loadingBubble.innerHTML = createMedicineCards(data.reply);
//     chatBox.scrollTop = chatBox.scrollHeight;

//   } catch (err) {
//     loadingBubble.innerText = "⚠️ Cannot connect to server";
//   }
// }

// function createMedicineCards(text) {
//   return `
//     <div class="cards">

//       <div class="card medicine-card">
//         <h3>💊 Common Medicines</h3>
//         <p>${getSection(text, ["medicine", "otc", "common medicines"])}</p>
//       </div>

//       <div class="card care-card">
//         <h3>🏠 Home Care</h3>
//         <p>${getSection(text, ["home care", "care", "tips"])}</p>
//       </div>

//       <div class="card warning-card">
//         <h3>⚠ Warnings</h3>
//         <p>${getSection(text, ["warning", "avoid", "caution"])}</p>
//       </div>

//       <div class="card doctor-card">
//         <h3>🚨 When to See Doctor</h3>
//         <p>${getSection(text, ["doctor", "medical help", "see doctor"])}</p>
//       </div>

//       <div class="card disclaimer-card">
//         <h3>❗ Disclaimer</h3>
//         <p>${getSection(text, ["disclaimer"])}</p>
//       </div>

//     </div>
//   `;
// }

// function getSection(text, keywords) {
//   for (let key of keywords) {
//     let index = text.toLowerCase().indexOf(key.toLowerCase());
//     if (index !== -1) {
//       let nextBreak = text.indexOf("\n\n", index);
//       let section = nextBreak !== -1
//         ? text.substring(index, nextBreak)
//         : text.substring(index);

//       return section
//         .replaceAll("*", "")
//         .replaceAll("-", "<br>•")
//         .trim();
//     }
//   }
//   return "Not available";
// }

// function addMessage(text, sender, isHTML = false) {
//   const messageDiv = document.createElement("div");
//   messageDiv.className = `message ${sender}`;

//   const bubbleDiv = document.createElement("div");
//   bubbleDiv.className = "bubble";

//   if (isHTML) {
//     bubbleDiv.innerHTML = text;
//   } else {
//     bubbleDiv.innerText = text;
//   }

//   messageDiv.appendChild(bubbleDiv);
//   chatBox.appendChild(messageDiv);
//   chatBox.scrollTop = chatBox.scrollHeight;

//   return bubbleDiv;
// }

// function clearInputs() {
//   document.getElementById("symptoms").value = "";
//   document.getElementById("age").value = "";
//   document.getElementById("allergies").value = "";
//   document.getElementById("conditions").value = "";
// }
// async function getAdvice() {
//   const symptoms = document.getElementById("symptoms").value.trim();
//   const age = document.getElementById("age").value.trim();
//   const allergies = document.getElementById("allergies").value.trim();
//   const conditions = document.getElementById("conditions").value.trim();

//   const result = document.getElementById("result");

//   if (!symptoms) {
//     alert("Please enter symptoms");
//     return;
//   }

//   // 🔄 Loading UI
//   result.innerHTML = `
//     <div style="text-align:center;">
//       ⏳ Getting smart health advice...
//     </div>
//   `;

//   try {
//     const res = await fetch("http://127.0.0.1:3000/healthmate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         symptoms,
//         age,
//         allergies,
//         conditions,
//       }),
//     });

//     const data = await res.json();

//     if (data.error) {
//       result.innerHTML = `⚠️ ${data.error}`;
//       return;
//     }

//     // 🚨 Emergency case
//     if (data.emergency) {
//       result.innerHTML = `
//         <div style="
//           background:#fee2e2;
//           padding:15px;
//           border-radius:12px;
//           border-left:5px solid red;
//         ">
//           <h3>🚨 EMERGENCY ALERT</h3>
//           <p>${data.message}</p>
//         </div>
//       `;
//       return;
//     }

//     // 💊 Normal case
//     result.innerHTML = `
//       <div>

//         <h3>💊 Medicines</h3>
//         ${data.medicines
//           .map(
//             (m) => `
//           <div style="
//             background:#ecfdf5;
//             padding:10px;
//             border-radius:10px;
//             margin-bottom:10px;
//           ">
//             <b>${m.name}</b><br>
//             Brands: ${m.brands}<br>
//             Use: ${m.use}<br>
//             ⚠ ${m.warning}
//           </div>
//         `,
//           )
//           .join("")}

//         <h3>🏠 Home Care</h3>
//         <ul>
//           ${data.homeCare.map((i) => `<li>${i}</li>`).join("")}
//         </ul>

//         <h3>⏳ Recovery Time</h3>
//         <p>${data.recovery}</p>

//         <h3>⚠ Warnings</h3>
//         <ul>
//           ${data.warnings.map((i) => `<li>${i}</li>`).join("")}
//         </ul>

//         <h3>🚨 When to See Doctor</h3>
//         <ul>
//           ${data.doctor.map((i) => `<li>${i}</li>`).join("")}
//         </ul>

//         <h3>❗ Disclaimer</h3>
//         <p>${data.disclaimer}</p>

//       </div>
//     `;
//   } catch (err) {
//     result.innerHTML = "⚠️ Cannot connect to server";
//   }
// }
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
    const res = await fetch("http://localhost:3000/healthmate", {
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