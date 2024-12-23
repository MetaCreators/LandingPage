import { FunctionComponent } from "react";
import logo from "../assets/logo.png"
import rectangle6 from "../assets/Rectangle 6.png"


export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position: "relative",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "96px",
        color: "#fff",
        fontFamily: "Inter",
      }}
      className={className}
    >
      <img
        style={{
          height: "1749px",
          width: "2257px",
          position: "absolute",
          margin: "0",
          right: "256px",
          bottom: "-583px",
          borderRadius: "184px",
        }}
        alt=""
        src={rectangle6}
      />
      <div
        style={{
          flex: "1",
          backgroundColor: "#0c091d",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "351px 242px 222px",
          boxSizing: "border-box",
          gap: "121px",
          maxWidth: "100%",
          zIndex: "4",
        }}
      >
        <div
          style={{
            width: "2770px",
            height: "1360px",
            position: "relative",
            backgroundColor: "#0c091d",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            maxWidth: "100%",
          }}
        >
          <img
            style={{
              width: "400px",
              position: "relative",
              borderRadius: "42px",
              maxHeight: "100%",
              objectFit: "cover",
              maxWidth: "100%",
              zIndex: "5",
            }}
            loading="lazy"
            alt=""
            src={logo}
          />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "112px",
          }}
        >
          <h1
            style={{
              margin: "0",
              alignSelf: "stretch",
              position: "relative",
              fontSize: "inherit",
              letterSpacing: "0.02em",
              fontStyle: "italic",
              fontWeight: "200",
              fontFamily: "inherit",
              zIndex: "5",
            }}
          >
            Content creation will never be the same again
          </h1>
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "64px",
              letterSpacing: "0.02em",
              zIndex: "5",
            }}
          >
            <span>
              <i style={{ fontWeight: "300" }}>Join</i>
            </span>
            <b style={{ color: "#d94fd5" }}>
              <span>{` `}</span>
              <span>Lithouse</span>
            </b>
            <span>
              <i style={{ fontWeight: "300" }}> and lead the way into a</i>
              <b style={{ fontFamily: "Inter" }}> bold, new reality.</b>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;