import { FunctionComponent } from "react";

export type VirtualHouseType = {
  className?: string;
};

const VirtualHouse: FunctionComponent<VirtualHouseType> = ({
  className = "",
}) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0px 20px 0px 30px",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "148px",
        color: "#fff",
        fontFamily: "Inter",
      }}
      className={className}
    >
      <div
        style={{
          width: "2598px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "597px",
          maxWidth: "100%",
        }}
      >
        <h1
          style={{
            margin: "0",
            position: "relative",
            fontSize: "inherit",
            display: "inline-block",
            maxWidth: "100%",
            zIndex: "4",
            fontFamily: "inherit",
          }}
        >
          <i>{`Step Into the `}</i>
          <span style={{ fontWeight: "800", color: "#fd71ff" }}>
            <span>Future</span>
          </span>
          <span>
            <span style={{ fontWeight: "800", color: "#fd71ff" }}>{` `}</span>
            <i>of Social Interaction!</i>
          </span>
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "38px 0px 0px",
            boxSizing: "border-box",
            maxWidth: "100%",
            fontSize: "64px",
          }}
        >
          <div
            style={{
              width: "657px",
              height: "221px",
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "100px",
                backgroundColor: "#000",
                border: "2px solid #ff3bff",
                boxSizing: "border-box",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "26px 126px",
                maxWidth: "100%",
                height: "100%",
                zIndex: "2",
              }}
            >
              <div
                style={{
                  height: "164px",
                  position: "relative",
                  letterSpacing: "0.02em",
                  display: "inline-block",
                }}
              >
                Try Virtual house now
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "100px",
                backgroundColor: "#000",
                border: "2px solid #ff3bff",
                boxSizing: "border-box",
                width: "630px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 131px 0px 134px",
                maxWidth: "100%",
                zIndex: "4",
              }}
            >
              <div
                style={{
                  height: "164px",
                  position: "relative",
                  letterSpacing: "0.02em",
                  display: "inline-block",
                }}
              >
                Try Virtual house now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualHouse;