const modules = {
  1: [
    "S3_LINK_IMAGE_1",
    "S3_LINK_IMAGE_2"
  ],
  2: [
    "S3_LINK_IMAGE_3"
  ],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: []
};

function openModule(moduleNumber) {
  document.getElementById("moduleView").style.display = "none";
  document.getElementById("imageView").style.display = "block";

  document.getElementById("moduleTitle").innerText = "Module " + moduleNumber;

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const images = modules[moduleNumber];

  if (images.length === 0) {
    gallery.innerHTML = "<p>No images uploaded yet.</p>";
    return;
  }

  images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    gallery.appendChild(image);
  });
}

function goBack() {
  document.getElementById("moduleView").style.display = "grid";
  document.getElementById("imageView").style.display = "none";
}