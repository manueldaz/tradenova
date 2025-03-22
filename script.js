<script>
  function goToStep(step) {
    document.querySelectorAll(".step").forEach(s => s.classList.add("hidden"));
    document.getElementById(`modalStep${step}`).classList.remove("hidden");

    if (step === 3) {
      const email = document.getElementById("userEmail").value;
      document.getElementById("confirmEmail").innerText = email || "your email";
    }
  }

  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
    goToStep(1); // Reset to Step 1
  }
</script>
