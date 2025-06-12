import React from "react";

const CourseCard = ({ title, type, level, platform, description, link }) => {
  return (
    <div
      style={{
        background: "#abdd",
        padding: "1.25rem",
        borderRadius: "10px",
        border: "1px solid #e0e0e0", // subtle light gray border
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)", // soft shadow
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.2s, box-shadow 0.2s",
        marginBottom: "3rem",
        justifyContent: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <h3 style={{ margin: "0 0 0.5rem 0" }}>{title}</h3>

        <p
          style={{
            fontSize: "0.85rem",
            color: "#666",
            minHeight: "1.5em",
            margin: "0 0 1rem 0"
          }}
        >
          {type} · {level} · {platform}
        </p>

        <p style={{ marginBottom: "0.1rem" }}>{description}</p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#0077cc",
          fontWeight: "bold",
          textDecoration: "underline",
          marginTop: "auto",
          position: "center",
                }}
      >
        View Course Here
      </a>
    </div>

  );
};

export default CourseCard;
