<template>
  <section class="py-5">
    <div class="container">
      <div class="form-container">
        <h2 class="text-center mb-4 ">Contact Us</h2>
        <p class="lead text-muted">We're here to help. Whether you have a question, need assistance, or just want to
          learn more, don't hesitate to reach out. We typically respond within 1-3 business days.</p>
        <form>
          <!-- Name input -->
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="nameHelp" required>
            <div id="nameHelp" class="form-text">Please enter your full name.</div>
          </div>

          <!-- Phone number input -->
          <div class="mb-3">
            <label for="phone" class="form-label">Phone Number</label>
            <input type="tel" class="form-control" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                   aria-describedby="phoneHelp" required>
            <div id="phoneHelp" class="form-text">Format: 123-456-7890</div>
          </div>

          <!-- Email input -->
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>

          <!-- Company input -->
          <div class="mb-3">
            <label for="company" class="form-label">Company</label>
            <input type="text" class="form-control" id="company" required>
          </div>

          <!-- Submit button -->
          <div class="row">
            <button type="submit" class="col-md-4 offset-md-4 btn btn-primary btn-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-control {
  border-radius: 5px;
}

.btn-submit {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}
h2 {
  color: #007bff;
}
</style>
<script setup>
</script>