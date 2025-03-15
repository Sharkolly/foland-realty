const CTA = () => {
  return (
    <div>
      <div
        className="py-20 flex justify-center items-center  max-md:py-14 "
        style={{
          background:
            "linear-gradient(rgba(247,247,253,0.5),#F7F7FD,rgba(247,247,253,0.5))",
        }}
      >
        <div className="w-10/12 text-center mx-auto max-md:w-[91%]">
          <div className="flex flex-col text-center justify-center items-center gap-6">
            <p className="text-semi-navy-blue text-2xl tracking-wide font-bold">
              No Spam Promise
            </p>
            <h1 className="text-navy-blue text-3xl tracking-wide font-bold">
              Are you a landlord?
            </h1>
            <p className="text-stroke-grey text-md ">
              Discover ways to increase your home's value and get listed. No
              Spam.
            </p>
          </div>

          <form className="bg-white flex justify-between py-3 w-6/12 mx-auto max-xl:w-8/12 max-lg:w-10/12  px-6 my-7 max-md:px-2 max-md:flex-col max-md:gap-4 rounded-lg max-md:bg-transparent">
            <input
              type="text"
              className="outline-none border-none w-[75%] max-md:w-full max-md:bg-white max-md:px-5 max-md:py-3 max-md:rounded-lg"
              placeholder="Enter your email address"
            />
            <button className="bg-navy-blue text-white px-5 py-2 rounded-md">
              Submit
            </button>
          </form>

          <div className="text-center">
            <p className="text-cta-grey text-md tracking-wide ">
              Join <span className="text-navy-blue text-md">10,000+</span> other
              landlords in our{" "}
              <span className="text-navy-blue text-md">Foland</span> community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
