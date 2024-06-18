const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  const title = document.getElementById("title")
  const content = document.getElementById("content")
  const image = document.getElementById("image")
  const token = localStorage.getItem("token");
  event.preventDefault();

  const formData = new FormData();
  formData.append("image", image.files[0]);
  formData.append("title", title.value);
  formData.append("content", content.value);

  console.log(formData);
  fetch("http://10.92.198.38:8080/feed/post", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      alert("Workou");
      window.location.href = "blog.html";
    })  
    .catch((err) => console.log(err));
});
