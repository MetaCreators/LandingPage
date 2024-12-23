import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "20px 24px 75px 24px",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "160px",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
      }}
      className={className}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          maxWidth: "100%",
        }}
      >
        {/* Navbar Section */}
        <header
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 40px",
            boxSizing: "border-box",
            backgroundColor: "rgba(253, 253, 253, 0.45)",
            borderRadius: "111px",
            maxWidth: "1200px",
          }}
        >
          {/* Left Navbar Links */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                fontWeight: "800",
                color: "#000",
                fontSize: "24px",
              }}
            >
              Home
            </a>
            <a
              style={{
                textDecoration: "none",
                fontWeight: "800",
                color: "#000",
                fontSize: "24px",
              }}
            >
              Products
            </a>
          </div>

          {/* Right Navbar Links */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                fontWeight: "800",
                color: "#000",
                fontSize: "24px",
              }}
            >
              Team
            </a>
            <a
              style={{
                textDecoration: "none",
                fontWeight: "800",
                color: "#000",
                fontSize: "24px",
              }}
            >
              Contact us
            </a>
          </div>
        </header>

        {/* Headline Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "800px",
            gap: "10px",
          }}
        >
          <h1
            style={{
              margin: "0",
              fontSize: "64px",
              fontWeight: "800",
              color: "#fff",
              lineHeight: "1.2",
              textTransform: "capitalize",
            }}
          >
            Discover.
          </h1>
          <h1
            style={{
              margin: "0",
              fontSize: "64px",
              fontWeight: "800",
              color: "#fff",
              lineHeight: "1.2",
              textTransform: "capitalize",
            }}
          >
            Define.
          </h1>
          <h1
            style={{
              margin: "0",
              fontSize: "64px",
              fontWeight: "800",
              color: "#fff",
              lineHeight: "1.2",
              textTransform: "capitalize",
            }}
          >
            Dominate.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
