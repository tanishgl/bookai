import Price from "./../../Data/price.json";

const Pricing = () => {
  return (
    <div className="bg-secCl dark:bg-slate-300 text-prmCl dark:text-black xs:p-2 mini:p-8 rounded-lg">
      <h2 className="text-secCl dark:text-terCl xs:text-base sm:text-xl md:text-2xl lg:text-2xl mt-8 font-semibold">
        API Pricing
      </h2>
      <p className="xs:text-xxs mini:text-base leading-relaxed">
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>
      <table className="w-full bg-secCl dark:bg-slate-300 rounded-lg border-separate border-spacing-0 overflow-hidden border border-bdCl dark:border-bdCl2 mt-4">
        <thead className="bg-theadCl dark:bg-theadSecCl uppercase">
          <tr className="xs:text-xxs xs:px-0 xs:py-1 mini:px-1 md:px-2 mini:py-2 md:py-4 mini:text-xs md:text-xl grid grid-cols-3 mini:gap-x-4 md:gap-x-10 place-items-start font-semibold text-left">
            <th>API</th>
            <th>Model</th>
            <th>Price per 1K tokens</th>
          </tr>
        </thead>
        <tbody>
          {Price.map((price_obj, idx) => {
            return (
              <tr
                key={idx}
                className=" xs:text-xxs xs:px-0 xs:py-1 mini:px-1 md:px-2 mini:py-2 md:py-4 mini:text-xs md:text-xl border-t border-bdCl dark:border-bdCl2 grid grid-cols-3 mini:gap-x-4 md:gap-x-10 place-items-start"
              >
                {Object.values(price_obj).map((val, idx) => {
                  return (
                    <td className="mini:text-xs md:text-xl" key={idx}>
                      {isNaN(Number(val)) ? val : `$${val}`}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2 className="text-secCl dark:text-terCl xs:text-base mini:text-xl md:text-2xl mt-8">
        Token Estimation
      </h2>
      <p className="xs:text-xxs mini:text-base leading-relaxed">
        On average, 1 token is approximately 4 characters or 0.75 words. For
        precise pricing, we recommend using our token calculator tool.
      </p>
      <h2 className="text-secCl dark:text-terCl xs:text-base mini:text-xl md:text-2xl mt-8">
        Billing
      </h2>
      <p className="xs:text-xxs mini:text-base leading-relaxed">
        You will only be charged for the tokens used in generating the book. The
        API tracks token usage and bills accordingly. Detailed usage reports are
        available in your account dashboard.
      </p>
    </div>
  );
};

export default Pricing;
