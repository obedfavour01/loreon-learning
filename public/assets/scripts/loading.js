"use client"

if (typeof window !== 'undefined') {
  window.onload = () => {
    console.log("All loaded");
    // Uncomment the lines below if you want to manipulate images
    // document.querySelectorAll("img").forEach((e) => {
    //   e.style.opacity = 1;
    // });

    document.querySelector('body').style.opacity = 1;
    document.querySelector('body').style.backgroundColor = "white";
  };
}
