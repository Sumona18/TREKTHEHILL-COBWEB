import React from "react";
  
let currdate = new Date().getFullYear();
function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; The Nerve Guru {currdate}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;