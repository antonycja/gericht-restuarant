import Button from "../Button";
import quoteImg from "../../assets/quote.png";
import "./pageHeader.css";

export default function PageHeader({
  title,
  spoon = true,
  heading,
  headingSize = 4,
  description,
  footerSpoon = false,
  socialLogos,
  quote = false,
  buttonText,
  btnClick = () => alert("Button Clicked"),
}) {
  // function btnClick() {
  //   () => {};
  // }
  return (
    <>
      <div className="pageHeader">
        <div className="header-text-container">
          <div className="spoon-container">
            {title && <h5>{title}</h5>}
            {spoon && (
              <div className="spoon">
                <svg
                  width="40"
                  height="10"
                  viewBox="0 0 40 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.5014 9.5C37.0847 9.5 39.9998 7.48129 39.9998 4.99995C39.9998 2.51861 37.0847 0.5 33.5014 0.5C30.112 0.5 27.3219 2.30637 27.0298 4.6018H22.3527V3.6552L-0.000213623 3.6552V6.34446L22.3528 6.34446V5.39798H27.0299C27.3221 7.69352 30.112 9.5 33.5014 9.5ZM21.4896 5.54839L0.863079 5.54839V4.45161H21.4896V5.54839ZM27.866 4.99995C27.866 2.95778 30.3942 1.2964 33.5015 1.2964C36.6088 1.2964 39.137 2.95778 39.137 4.99995C39.137 7.04222 36.6088 8.7037 33.5015 8.7037C30.3942 8.7037 27.866 7.04222 27.866 4.99995Z"
                    fill="#DCCA87"
                  />
                </svg>
              </div>
            )}
          </div>
          <h1
            className="heading"
            style={{ fontSize: `${headingSize}rem` }}
          >
            {heading}
          </h1>
        </div>
        {description && (
          <div>
            <p>
              {quote && (
                <span className="quoteImg">
                  <img
                    src={quoteImg}
                    alt="quote"
                  />
                </span>
              )}
              {description}
            </p>
          </div>
        )}
        {footerSpoon && (
          <div className="spoon">
            <svg
              width="40"
              height="10"
              viewBox="0 0 40 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.5014 9.5C37.0847 9.5 39.9998 7.48129 39.9998 4.99995C39.9998 2.51861 37.0847 0.5 33.5014 0.5C30.112 0.5 27.3219 2.30637 27.0298 4.6018H22.3527V3.6552L-0.000213623 3.6552V6.34446L22.3528 6.34446V5.39798H27.0299C27.3221 7.69352 30.112 9.5 33.5014 9.5ZM21.4896 5.54839L0.863079 5.54839V4.45161H21.4896V5.54839ZM27.866 4.99995C27.866 2.95778 30.3942 1.2964 33.5015 1.2964C36.6088 1.2964 39.137 2.95778 39.137 4.99995C39.137 7.04222 36.6088 8.7037 33.5015 8.7037C30.3942 8.7037 27.866 7.04222 27.866 4.99995Z"
                fill="#DCCA87"
              />
            </svg>
          </div>
        )}
        {socialLogos && (
          <div className="social-logos">
            {socialLogos.map((logo, index) => (
              <span key={index}>{logo}</span>
            ))}
          </div>
        )}
        {buttonText && (
          <div>
            <Button
              text={buttonText}
              btnClick={btnClick}
            />
          </div>
        )}
      </div>
    </>
  );
}
