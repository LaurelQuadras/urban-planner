export default function BottomFooter() {
  const CompanySection: string[] = [
    "About us",
    "Terms & conditions",
    "Privacy policy",
    "Anti-discrimination policy",
    "UC impact",
    "Careers",
  ];
  const ForCustomersSection: string[] = [
    "UC reviews",
    "Categories near you",
    "Blog",
    "Contact us",
  ];
  const ForPartnersSection: string[] = ["Register as a professional"];
  const SocialLinksSection: string[] = [
    "X",
    "Facebook",
    "Instagram",
    "LinkedIn",
  ];

  return (
    <div className="bottom-footer">
      <div className="bottom-footer-content">
        <span className="bottom-footer-content-header-text">Company</span>
        {CompanySection.map((company: string, index: number) => (
          <span className="bottom-footer-content-list-text" key={index}>
            {company}
          </span>
        ))}
      </div>
      <div className="bottom-footer-content">
        <span className="bottom-footer-content-header-text">For customers</span>
        {ForCustomersSection.map((forCustomer: string, index: number) => (
          <span className="bottom-footer-content-list-text" key={index}>
            {forCustomer}
          </span>
        ))}
      </div>
      <div className="bottom-footer-content">
        <span className="bottom-footer-content-header-text">For partners</span>
        {ForPartnersSection.map((forPartner: string, index: number) => (
          <span className="bottom-footer-content-list-text" key={index}>
            {forPartner}
          </span>
        ))}
      </div>
      <div className="bottom-footer-content">
        <span className="bottom-footer-content-header-text">Social links</span>
        {SocialLinksSection.map((socialLink: string, index: number) => (
          <span className="bottom-footer-content-list-text" key={index}>
            {socialLink}
          </span>
        ))}
      </div>
    </div>
  );
}
