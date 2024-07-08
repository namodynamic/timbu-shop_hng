import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <section className="bg-[#595651]">
        <div className="wrapper">
          <div className="flex justify-between lg:gap-60 gap-10 items-start flex-wrap max-lg:flex-col">
            <div className="flex flex-col">
              <div className="flex flex-col items-start">
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium">
                  Help Lines:
                </h4>
                <p className=" text-white text-base leading-7 font-montserrat sm:max-w-sm text-white-400">
                  +2348063091901, +2347055041109
                </p>
              </div>
              <div className="flex mt-4 flex-col items-start">
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium">
                  Office Address:
                </h4>
                <p className=" text-white text-base leading-7 font-montserrat sm:max-w-sm text-white-400">
                  Str. 1 Ajayi crowther Estate, Lekki Phase 1, Lagos State,
                  Nigeria.
                </p>
              </div>
            </div>

            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((link) => (
                      <li
                        key={link.name}
                        className="mt-3 text-white-400 font-montserrat text-white text-base leading-normal hover:text-slate-gray cursor-pointer"
                      >
                        <a href="#">{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex bg-white justify-center text-center items-center text-[#8D7A6B] max-sm:flex-col max-sm:items-center">
        <p>Copyright Reserved © Frin Essentials {new Date().getFullYear()}</p>
      </section>
    </footer>
  );
};

export default Footer;
