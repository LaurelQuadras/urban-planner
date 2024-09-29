import Image from "next/image";

export default function WhyUsSection() {
  return (
    <div className="why-us-section">
      <div className="why-us-section-information">
        <span className="why-us-section-information-text-one">
          Why Urban Company
        </span>
        <div className="why-us-section-information-section">
          <Image
            src="/images/transparent-pricing.png"
            alt="transparent pricing"
            width="80"
            height="40"
          />
          <div className="why-us-section-information-section-content">
            <span className="why-us-section-information-section-content-header">
              Transparent pricing
            </span>
            <span className="why-us-section-information-section-content-info">
              See fixed prices before you book. No hidden charges.
            </span>
          </div>
        </div>
        <div className="why-us-section-information-section">
          <Image
            src="/images/experts-only.png"
            alt="experts only"
            width="80"
            height="40"
          />
          <div className="why-us-section-information-section-content">
            <span className="why-us-section-information-section-content-header">
              Experts only
            </span>
            <span className="why-us-section-information-section-content-info">
              Our professionals are well trained and have on-job expertise.
            </span>
          </div>
        </div>
        <div className="why-us-section-information-section">
          <Image
            src="/images/fully-equiped.png"
            alt="fully equiped"
            width="80"
            height="40"
          />
          <div className="why-us-section-information-section-content">
            <span className="why-us-section-information-section-content-header">
              Fully equipped
            </span>
            <span className="why-us-section-information-section-content-info">
              We bring everything needed to get the job done well.
            </span>
          </div>
        </div>
      </div>
      <div className="why-us-section-assurance">
        <Image
          src="/images/assurance-image.png"
          width="130"
          height="130"
          alt="assurance image"
        />
        <div className="why-us-section-assurance-content">
          <span className="why-us-section-assurance-content-text-one">
            100% Quality Assured
          </span>
          <span className="why-us-section-assurance-content-text-two">
            If you don’t love our service, we will make it right.
          </span>
        </div>
      </div>
    </div>
  );
}
