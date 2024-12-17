
function submitFeedback() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const division = document.getElementById("division").value;
    const feedback = document.getElementById("feedback").value;

    if (name && email && division && feedback) {
      console.log("Feedback Submitted:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Division:", division);
      console.log("Feedback:", feedback);

      document.getElementById("feedbackForm").reset();

      alert(`Thanks for the feedback ${name}`);
    } else {
      alert("Please fill all the fields before submitting.");
    }
  }