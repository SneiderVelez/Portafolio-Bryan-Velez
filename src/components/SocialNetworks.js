const SocialNetworks = () => {
  return (
    <section className="flex flex-col items-center gap-20">
      <div className="flex flex-col gap-2 items-center">
        <hr className="border h-40" />
        <a
          href="https://www.instagram.com/sneider.velez09/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-instagram text-5xl text-darkBlue hover:text-white cursor-pointer"></i>
        </a>
      </div>
      <a
        href="https://www.facebook.com/share/19aVfDZc77/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-square-facebook text-5xl text-darkBlue hover:text-white cursor-pointer"></i>
      </a>
      <div className="flex flex-col gap-2 items-center">
        <i class="fa-brands fa-x-twitter text-5xl text-darkBlue hover:text-white cursor-pointer"></i>
        <hr className="border h-40" />
      </div>
    </section>
  );
};

export default SocialNetworks;
