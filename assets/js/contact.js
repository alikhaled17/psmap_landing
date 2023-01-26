async function sendMessage(e) {
  e.preventDefault();
  let uri = `https://dev-psmap-api.meemdev.com/Email/SendEmail?name=${
    document.getElementById("name").value
  }&content=${document.getElementById("contact-msg").value}&email=${
    document.getElementById("mail").value
  }`;

  await fetch(uri, {
    method: "POST",
    mode: "no-cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    document.querySelector("#form_msg").innerHTML = "Success!";
  });
}
