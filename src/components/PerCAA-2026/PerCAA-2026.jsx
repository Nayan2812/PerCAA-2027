
import './PerCAA-2026.css';
import Footer from "../Footer/Footer";
import RightContent from "../RightContent/RightContent";
import ImportantBanner from "../ImportantLink/ImportantLink";

const PerCAA_2026 = () => {
  return (
    <>
      <ImportantBanner />

      <div className="papaContainer">
        <div className="leftContainer">
          <div className="headingMain">
            <h1>PerCAA-2025</h1>

            <div
              style={{
                textAlign: "center",
                margin: "50px auto",
                padding: "35px 25px",
                background: "linear-gradient(135deg, #f8faff, #eaf0ff)",
                border: "1px solid #d9e3f5",
                borderLeft: "5px solid #234a91",
                borderRadius: "14px",
                boxShadow: "0 8px 24px rgba(35, 74, 145, 0.10)",
                maxWidth: "700px",
              }}
            >
              <h2
                style={{
                  color: "#234a91",
                  fontSize: "28px",
                  fontWeight: "800",
                  marginBottom: "15px",
                  lineHeight: "1.4",
                }}
              >
                Proceedings Under Publications
              </h2>

              
            </div>
          </div>
        </div>

        <div className="rightContainer">
          <RightContent />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PerCAA_2026;