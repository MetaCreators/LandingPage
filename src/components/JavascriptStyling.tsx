import { FunctionComponent } from "react";
import street from '../assets/street.png'
import candid from '../assets/candid.png'
import scull from '../assets/scull.png'

export type JavascriptStylingType = {
  className?: string;
};

const JavascriptStyling: FunctionComponent<JavascriptStylingType> = ({
  className = "",
}) => {
  return (
    <section
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "0px 0px 197px",
        boxSizing: "border-box",
        gap: "191px",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "96px",
        color: "#fff",
        fontFamily: "Inter",
      }}
      className={className}
    >
      <div
        style={{
          alignSelf: "stretch",
          height: "1296px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          backgroundColor: "#030c15",
          border: "1px solid #000",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "65.5px 20px 65px 30px",
          maxWidth: "100%",
          zIndex: "1",
        }}
      >
        <div
          style={{
            height: "1296px",
            width: "2770px",
            position: "relative",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#030c15",
            border: "1px solid #000",
            boxSizing: "border-box",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <div
          style={{
            height: "1126.5px",
            width: "2543.5px",
            position: "relative",
            maxWidth: "100%",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "17.8px",
              left: "0px",
              borderRadius: "46px",
              width: "1007.5px",
              height: "1007.5px",
              objectFit: "contain",
              zIndex: "2",
            }}
            alt=""
            src={street}          />
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "1568.9px",
              borderRadius: "136px",
              width: "974.6px",
              height: "1043.1px",
              objectFit: "contain",
              zIndex: "2",
            }}
            loading="lazy"
            alt=""
            src={scull}      />
          <img
            style={{
              position: "absolute",
              top: "196.5px",
              left: "814.7px",
              borderRadius: "105px",
              width: "903px",
              height: "930px",
              objectFit: "cover",
              zIndex: "3",
            }}
            alt=""
            src={candid}        />
        </div>
      </div>
      <div
        style={{
          width: "2712px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "0px 33px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "129px",
            maxWidth: "100%",
          }}
        >
          <h1
            style={{
              margin: "0",
              position: "relative",
              fontSize: "inherit",
              zIndex: "1",
              fontFamily: "inherit",
            }}
          >
            <span>
              <i style={{ fontWeight: "300", fontFamily: "Inter" }}>
                Effortlessly generate
              </i>
              <span style={{ fontWeight: "800" }}>
                {" "}
                high performance thumbnails,script and descriptions
              </span>
              <i
                style={{ fontWeight: "300", color: "#fd71ff" }}
              >{` in just a `}</i>
            </span>
            <i style={{ fontWeight: "300", color: "#fd71ff" }}>
              <span>few clicks</span>
            </i>
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 1053px",
              boxSizing: "border-box",
              maxWidth: "100%",
              textAlign: "left",
              fontSize: "64px",
            }}
          >
            <div
              style={{
                height: "125px",
                borderRadius: "100px",
                backgroundColor: "#000",
                border: "2px solid #ff3bff",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "18px 69px 18px 74px",
                maxWidth: "100%",
                zIndex: "1",
              }}
            >
              <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                Try now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JavascriptStyling;