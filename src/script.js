const cardImgWrappers = document.querySelectorAll(".card-img-wrapper");

cardImgWrappers.forEach((wrapper) => {
  const link = wrapper.querySelector(".card-link");
  const img = wrapper.querySelector(".card-img-top");

  const handleHover = () => {
    if (link && img) {
      link.style.display = "block";
      img.style.opacity = "0.7";
    }
  };

  const handleLeave = () => {
    if (link && img) {
      link.style.display = "none";
      img.style.opacity = "1";
    }
  };

  wrapper.addEventListener("mouseenter", handleHover);
  wrapper.addEventListener("mouseleave", handleLeave);
  wrapper.addEventListener("touchstart", handleHover);
  wrapper.addEventListener("touchend", handleLeave);
});

/* booking */

const Booked = document.querySelector("#Booknow");
const Bform = document.querySelector(".f");

const GetCard = (event) => {
  event.preventDefault();
  event.target.value;
  const name = document.querySelector("#name");
  const nGuest = document.querySelector("#pplNumber");
  const dateTime = document.querySelector("#datetime");

  const locate = document.querySelector("#location");

  if (
    name.value === "" ||
    nGuest.value === "" ||
    dateTime.value === "" ||
    locate.value === ""
  ) {
    alert("Please fill in all the required fields.");
    return;
  }
  const card = document.querySelector(".BookedCard");
  card.innerHTML = `

<div class="card mb-5 mt-5" style="max-width: 600px;">
  <div class="row g-0">
    <div class="col-md-4">
     
    <img src="img/yogurt.jpg" class="img-fluid img-thumbnail rounded-start" alt="...">
    
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title mb-4">${name.value}</h5>
        <ul>
          <li><span>No. of Guests:</span>${nGuest.value}</li>
          <li><span>Date&Time:</span>${dateTime.value}</li>
          <li><span>Location:</span>${locate.value}</li>
          
        </ul>
        <p class="card-text text-danger mt-3"><small>* You can delete the booking before the booking date.</small></p>
        <button type="button" class="btn btn-outline-danger">Delete</button>
      
      </div>
    </div>
  </div>
</div>`;
  const handleDelete = (event) => {
    event.preventDefault();
    const bookingDateTime = new Date(dateTime.value);
    const currentDateTime = new Date();

    if (bookingDateTime > currentDateTime) {
      const cardContainer = document.querySelector(".BookedCard");
      cardContainer.innerHTML = "";
      alert("Booking deleted successfully.");
    } else {
      alert("You cannot delete it now. Pls call 0967334567.");
    }
    Bform.reset();
  };
  const Delete = document.querySelector(".btn-outline-danger");
  Delete.addEventListener("click", handleDelete);
};
Booked.addEventListener("click", GetCard);

document.addEventListener("DOMContentLoaded", () => {
  const dateTime = document.querySelector("#datetime");

  const currentDateTime = new Date().toISOString().slice(0, 16);
  dateTime.setAttribute("min", currentDateTime);
});
