// Define an array of image URLs
const images = [
  'https://yt3.ggpht.com/ytc/AIdro_kRGBwx4M004I3nnpcYtfKBIjVqXnAuQYGL1-9DQj7iVuIZ=s88-c-k-c0x00ffffff-no-rj',
  'https://yt3.ggpht.com/ytc/AIdro_mF8m285i9VNEL4LDoongeaxJHCdQVpb2RRhxVZAgGSrcxc=s88-c-k-c0x00ffffff-no-rj',
  'https://yt3.ggpht.com/KB7kfb9MMMOC4U9svp4dfYb4aziWKh1wxWyzWBoAuhNjpz8DcFKMdeumtiaprUHpajUxuEmtSg=s88-c-k-c0x00ffffff-no-rj'
];

let currentIndex = 0;
const imageElement = document.getElementById('image');

function changeImage() {
  imageElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

// Initial call to changeImage function
changeImage();

// Set interval to change image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);
